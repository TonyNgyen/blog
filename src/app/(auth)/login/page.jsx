import { handleGithubLogin } from "@/lib/actions";
import React from "react";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/loginForm";

function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with GitHub</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
