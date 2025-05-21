"use client";
import { useState } from "react";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const page = () => {
  const [postObject, setPostObject] = useState({
    username: "",
    title: "",
    description: "",
    likes: 0,
  });

  const handleInputChange = (e) => {
    if (e.target.name === "title") {
      setPostObject({
        ...postObject,
        title: e.target.value,
      });
      return;
    }

    const { name, value } = e.target;
    setPostObject({
      ...postObject,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Post Object: ", postObject);
    const localStoragePosts = localStorage.getItem("posts");
    if (!postObject.title || !postObject.description || !postObject.username) {
      alert("Please fill out your post!");
      return;
    }

    const postId = {
      ...postObject,
      id: Date.now().toString(),
    };

    if (localStoragePosts) {
      localStorage.setItem(
        "posts",
        JSON.stringify([...JSON.parse(localStoragePosts), postId])
      );
    } else {
      localStorage.setItem("posts", JSON.stringify([postId]));
    }

    toast.success("Post added successfully!");

    setPostObject({
      username: "",
      title: "",
      description: "",
      likes: 0,
    });
  };

  return (
    <div className="flex flex-col items-center pt-10">
      <div className="bg-[#603f8b] pt-4 pl-4 pr-4 pb-25 rounded-md border-2 border-[#323b36]">
        <h1 className="flex justify-center font-bold underline decoration-2 text-gray-300">
          Add a New Post
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="pt-6">
            <div>
              <label className=" pr-4 text-gray-300">Username</label>
              <input
                className=" bg-[#b9a7bb] rounded-md border-2 border-[#323b36]"
                placeholder="Swisscheese1115"
                name="username"
                value={postObject.username}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className=" pr-4 text-gray-300">Post Title:</label>
              <input
                className=" bg-[#b9a7bb] rounded-md border-2 border-[#323b36]"
                placeholder="1v4 Clutch!!"
                name="title"
                value={postObject.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="pt-4">
              <label className=" pr-4 text-gray-300">Post Descripiton:</label>
              <input
                className=" bg-[#b9a7bb] rounded-md border-2 border-[#323b36]"
                placeholder="I can't believe I did that!"
                name="description"
                value={postObject.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex justify-center pt-6">
              <button
                className="cursor-pointer text-[#323b36] bg-[#b9a7bb] p-2 rounded-lg border-2 border-[#323b36]"
                type="submit"
              >
                Add Post
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default page;
