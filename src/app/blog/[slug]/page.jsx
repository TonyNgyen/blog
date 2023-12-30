import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";

function SinglePostPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/5023957/pexels-photo-5023957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
        <Image
          className={styles.avatar}
          src="https://images.pexels.com/photos/5023957/pexels-photo-5023957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={50}
          height={50}
        />
        <div className={styles.detailText}>
          <div className={styles.detailTitle}>Author</div>
          <div className={styles.detailValue}>Terry Jefferson</div>
        </div>
        <div className={styles.detailText}>
          <div className={styles.detailTitle}>Published</div>
          <div className={styles.detailValue}>01.01.2024</div>
        </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum in
          suscipit ullam accusamus aperiam, explicabo harum rem dolores sint
          dolor pariatur facilis unde nesciunt exercitationem nam dicta,
          possimus, optio saepe.
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;
