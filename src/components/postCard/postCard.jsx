import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/5023957/pexels-photo-5023957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Description</p>
        <Link className={styles.link} href="/blog/post">READ MORE</Link>
      </div>
    </div>
  );
}

export default PostCard;
