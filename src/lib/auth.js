import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "./models";
import bcrypt from "bcryptjs"
import { authConfig } from "./auth.config";

const login = async (credentials) => {
  try {
    connectToDb();
    const user = await User.findOne({username: credentials.username})

    if (!user) {
      throw new Error("Wrong credentials")
    }

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

    if (!isPasswordCorrect) {
      throw new Error ("Wrong credentials")
    }

    return user;
  } catch (error) {
    console.log(error)
    throw new Error("Failed to login")
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({...authConfig,
  providers: [
    GitHub({
      clientId: "de26bdad208bc1c89adb",
      clientSecret: "9ff14b135ad683378df0f15f330818797a79c066",
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null
        }
      }
    })
  ],
  callbacks: {
    async signIn({user, account, profile}) {
      console.log(profile)
      if (account.provider === "github") {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
