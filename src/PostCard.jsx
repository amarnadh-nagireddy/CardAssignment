import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card"; // child component

function PostCard() {
  const [posts, setPosts] = useState([]);
  const [searchTag, setSearchTag] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/posts");
        setPosts(response.data.posts);
        setFilteredPosts(response.data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const handleSearch = () => {
    if (searchTag.trim() === "") {
      setFilteredPosts(posts);
      return;
    }

    const filtered = posts.filter((post) =>
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTag.toLowerCase())
      )
    );
    setFilteredPosts(filtered);
  };

  return (
    <div >
      <h1 className="text-3xl font-bold text-center mb-6">Posts</h1>

     
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by tag..."
          value={searchTag}
          onChange={(e) => setSearchTag(e.target.value)}
          className="border px-2 rounded py-2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
        >
          Search
        </button>
      </div>

     
      <div className="m-2">
        {filteredPosts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            body={post.body}
            likes={post.reactions.likes}
            dislikes={post.reactions.dislikes}
            views={post.views}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
}

export default PostCard;
