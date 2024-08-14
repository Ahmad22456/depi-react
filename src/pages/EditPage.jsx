import { useParams } from "react-router-dom";
import useCustom from "../hooks/customHook";
import { api } from "../utils/axios";
import { useState } from "react";

function EditPage() {
  const params = useParams();
  const [data, loading] = useCustom(params.id);
  const [title, setTitle] = useState(data.title);
  const [body, setBody] = useState(data.body);

  async function edit() {
    try {
      const res = await api.put(`https://dummyjson.com/posts/${params.id}`, {
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
      {loading ? (
        <div className="absolute top-1/2 left-1/2 text-3xl font-bold">
          Loading...
        </div>
      ) : (
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
                onClick={edit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditPage;
