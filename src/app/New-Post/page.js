"use client";
import { useState } from "react";
import React from "react";

const page = () => {
  const [postObject, setPostObject] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostObject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center pt-10">
      <div className="bg-[#603f8b] pt-4 pl-4 pr-4 pb-25 rounded-md border-2 border-[#323b36]">
        <h1 className="flex justify-center font-bold underline decoration-2 text-gray-300">
          Add a New Post
        </h1>
        <form>
          <div className="pt-6">
            <div>
              <label className=" pr-4 text-gray-300">Post Title:</label>
              <input
                className=" bg-[#b9a7bb] rounded-md border-2 border-[#323b36]"
                placeholder="1v4 Clutch!!"
                name="title"
                onChange={handleInputChange}
              />
            </div>
            <div className="pt-4">
              <label className=" pr-4 text-gray-300">Post Descripiton:</label>
              <input
                className=" bg-[#b9a7bb] rounded-md border-2 border-[#323b36]"
                placeholder="I can't believe I did that!"
                name="description"
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
    </div>
  );
};

export default page;
