import { useState } from "react";
import { api } from "../utils/axios";

function AddPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  async function post() {
    try {
      const res = await api.post("https://dummyjson.com/posts/add", {
        userId: 1,
        title,
        body,
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
          <div className="mb-4">
            <label
              htmlFor="Input1"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="Input1"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="Textarea1"
              className="block text-sm font-medium text-gray-700"
            >
              Body
            </label>
            <textarea
              id="Textarea1"
              rows={3}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-cyan-500 text-white px-4 py-2 rounded-md shadow hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              onClick={post}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPage;
