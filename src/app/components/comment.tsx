"use client"
import { useState } from "react";

interface Comment {
  name: string;
  email: string;
  comment: string;
  date: Date;
}

export default function Comment() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name && email && comment) {
      const newComment: Comment = { name, email, comment, date: new Date() };
      setComments([...comments, newComment]);
      setName("");
      setEmail("");
      setComment("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleDelete = (index: number) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number) => {
    const commentToEdit = comments[index];
    setName(commentToEdit.name);
    setEmail(commentToEdit.email);
    setComment(commentToEdit.comment);
    handleDelete(index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      {/* Comment Form */}
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Post a Comment
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
              Comment
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
              placeholder="Write your comment"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-[#FF9F0D] hover:bg-orange-500 rounded-lg"
          >
            Post Comment
          </button>
        </form>
      </div>

      {/* Comments Section */}
      <div className="w-full max-w-md mt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Comments - {comments.length}
        </h2>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="p-4 mb-4 bg-white shadow-md rounded-lg flex flex-col space-y-2"
            >
              {/* Avatar and Name */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#FF9F0D] text-white flex items-center justify-center rounded-full text-lg font-bold">
                  {comment.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{comment.name}</h3>
                  <p className="text-xs text-gray-500">
                    {comment.date.toLocaleDateString()}
                  </p>
                </div>
              </div>
              {/* Comment Text */}
              <p className="text-gray-700">{comment.comment}</p>
              {/* Edit and Delete */}
              <div className="flex space-x-4 text-sm">
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
}