import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function Header() {
  return (
    <div className="flex w-full bg-slate-200 px-40 py-4 fixed top-0 left-0 bg-cyan-400-500 justify-between items-center">
      <Link className="text-2xl font-bold w-1/4" to="/">
        Help Scout
      </Link>
      <div className="w-2/4 flex justify-start items-center gap-20">
        <Dropdown
          label="Product"
          options={["Product 1", "Product 2", "Product 3"]}
        />
        <Dropdown label="Tags" options={["Tag 1", "Tag 2", "Tag 3"]} />
        <Dropdown label="Price" options={["$10", "$20", "$30"]} />
      </div>
      <div className="flex justify-center items-center">
        <Link className=" bg-sky-600 rounded-lg text-white px-4 py-2" to="/add">
          Add post
        </Link>
      </div>
    </div>
  );
}

export default Header;
