import React from "react";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";
import Image from "next/image";

// FETCH DATA WITH AN API
// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

async function PostUser({ userId }) {
  // FETCH DATA WITH AN API
  //   const user = await getData(userId);

  // FETCH DATA WITHOUT AN API
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.text}>
        <div className={styles.title}>Author</div>
        <div className={styles.username}>{user.username}</div>
      </div>
    </div>
  );
}

export default PostUser;
