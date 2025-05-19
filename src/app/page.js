"use client";
import { useState, useEffect } from "react";
import React from "react";
import PostComponent from "./components/PostComponent";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = () => {
      const localStoragePosts = localStorage.getItem("posts");
      if (localStoragePosts) {
        const parsedPosts = JSON.parse(localStoragePosts);
        setPosts(parsedPosts);
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  const handleNewPost = (id) => {
    console.log("New Post ID: ", id);
    const postUpdate = posts.find((post) => post.id === id);
    if (postUpdate) {
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post.id === id ? postUpdate : post))
      );
      return postUpdate;
    }
    localStorage.setItem("posts", JSON.stringify(posts));
    setPosts(posts);
  };

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      {posts?.length === 0 ? (
        <h1>No posts available</h1>
      ) : (
        posts.map((post) => (
          <PostComponent
            key={post.id}
            post={post}
            title={post.title}
            description={post.description}
            id={post.id}
            handleNewPost={handleNewPost}
          />
        ))
      )}
    </div>
  );
}
