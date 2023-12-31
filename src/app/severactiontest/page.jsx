import { addPost, deletePost } from "@/lib/actions";
import React from "react";

function ServerActionTest() {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" id="" />
        <input type="text" placeholder="desc" name="desc" id="" />
        <input type="text" placeholder="slug" name="slug" id="" />
        <input type="text" placeholder="userId" name="userId" id="" />
        <button>Create</button>
      </form>

      <form action={deletePost}>
      <input type="text" placeholder="postId" name="id" id="" />
      <button>Delete</button>
      </form>
    </div>
  );
}

export default ServerActionTest;
