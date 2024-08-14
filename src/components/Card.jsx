/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import image from "../assets/image.webp";

function Card({ id, title, description }) {
  return (
    <div className="w-96 rounded-lg shadow-lg bg-white flex flex-col">
      <img src={image} alt="" className="w-full h-1/2 object-cover" />
      <div className="p-4 h-1/2 flex flex-col">
        <h3 className="text-center text-lg font-bold mb-2">{title}</h3>
        <p className="h-20 text-gray-700 overflow-hidden text-justify text-sm mb-11">
          {description}
        </p>
        <div className="w-full flex justify-center items-center gap-3 mt-auto">
          <Link
            className="bg-blue-900 text-white rounded px-4 py-1"
            to={`${id}`}
          >
            More info
          </Link>
          <Link
            className="bg-blue-900 text-white rounded px-4 py-1"
            to={`${id}/update`}
          >
            Edit Post
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
