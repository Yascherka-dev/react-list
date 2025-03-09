import React from "react";

const Post = ({ post }) => (
  <div>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </div>
);

export default Post;
