import React from "react";

function Card({ title, body, likes, dislikes, views, userId }) {
  return (
    <div className="bg-white rounded p-4 border m-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-3">{body}</p>
      <div className="text-gray-500 text-sm space-y-1">
        <p><strong>Likes:</strong> {likes}</p>
        <p><strong>Dislikes:</strong> {dislikes}</p>
        <p><strong>Views:</strong> {views}</p>
        <p><strong>User ID:</strong> {userId}</p>
      </div>
    </div>
  );
}

export default Card;
