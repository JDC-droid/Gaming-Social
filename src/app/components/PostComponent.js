import React from "react";

const PostComponent = ({ post }) => {
  return (
    <div
      className={
        post
          ? "bg-[#603f8b] pt-4 pl-4 pr-4 pb-25 rounded-md border-2 border-[#323b36]"
          : "hidden"
      }
    >
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </div>
  );
};

export default PostComponent;
