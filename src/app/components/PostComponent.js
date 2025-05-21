import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const PostComponent = ({ post }) => {
  const [likes, setLikes] = useState(post.likes || 0);

  const handleLike = () => {
    const updatedLikes = likes + 1;
    setLikes(updatedLikes);

    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatePosts = storedPosts.map((storedPost) => {
      if (storedPost.id === post.id) {
        return { ...storedPost, likes: updatedLikes };
      }
      return storedPost;
    });
    localStorage.setItem("posts", JSON.stringify(updatePosts));
  };

  return (
    <div
      className={
        post
          ? "bg-[#603f8b] pt-4 pl-4 pr-4 pb-6 rounded-md border-2 border-[#323b36] text-gray-300"
          : "hidden"
      }
    >
      <h1 className="text-xl font-bold">{post.username}</h1>
      <br />
      <h2 className="text-3xl font-bold underline">{post.title}</h2>
      <br />
      <p className="text-lg">{post.description}</p>
      <br />
      <button onClick={handleLike} className="flex items-center">
        <FaHeart className="mr-2 hover:cursor-pointer" />
        {likes} Likes
      </button>
    </div>
  );
};

export default PostComponent;
