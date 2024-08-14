import { useState } from "react";
import Card from "../components/Card";
import useCustom from "../hooks/customHook";
import { useSearchParams } from "react-router-dom";
import Dropdown from "../components/Dropdown";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [limit, setLimit] = useState(searchParams.get("limit") || 9);
  const [skip, setSkip] = useState(searchParams.get("skip") || 0);
  const [sort, setSort] = useState(searchParams.get("sortBy") || "");
  const [order, setOrder] = useState(searchParams.get("order") || "");
  const [action, setAction] = useState("");
  const [data, loading] = useCustom(action, search, limit, skip, sort, order);

  function pageChange(postsNumber, pageSkip) {
    setLimit(postsNumber);
    setSkip(pageSkip);
    setSearchParams({
      q: search,
      limit: postsNumber,
      skip: pageSkip,
    });
  }

  function sorting(type) {
    setSort(type.toLowerCase());
    setSearchParams({
      q: search,
      limit: limit,
      skip: skip,
      sort: type.toLowerCase(),
    });
  }

  function ordering(orderType) {
    setOrder(orderType.toLowerCase());
    setSearchParams({
      q: search,
      limit: limit,
      skip: skip,
      sort: sort,
      order: orderType.toLowerCase(),
    });
  }

  function sortTag(tag) {
    setAction(`/tag/${tag.toLowerCase()}`);
  }

  return (
    <>
      {loading ? (
        <div className="absolute top-1/2 left-1/2 text-3xl font-bold">
          Loading...
        </div>
      ) : (
        <div className="mt-40 ml-14">
          <div className="w-full mb-4 flex justify-between items-center">
            <input
              className="w-1/2 px-4 py-1 border-2"
              placeholder="Search..."
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setAction(`/search`);
                setSearchParams({
                  q: e.target.value,
                  limit: limit,
                  skip: skip,
                });
              }}
            />
            <div className="mr-16 flex justify-center items-center gap-2">
              <Dropdown
                label="Tag"
                options={[
                  "History",
                  "Crime",
                  "Fiction",
                  "Magical",
                  "Love",
                  "Classic",
                ]}
                onClick={sortTag}
              />
              <Dropdown
                label="Sort by"
                options={["Title", "Views"]}
                onClick={sorting}
              />
              <Dropdown
                label="Order"
                options={["Asc", "Desc"]}
                onClick={ordering}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-4 gap-y-12">
            {data.map((e, i) => {
              return (
                <Card id={e.id} title={e.title} description={e.body} key={i} />
              );
            })}
          </div>
          <div className="w-full flex justify-center items-center gap-10 my-10">
            <button
              className="text-blue-800 underline"
              onClick={() => pageChange(9, 0)}
            >
              1
            </button>
            <button
              className="text-blue-800 underline"
              onClick={() => pageChange(9, 10)}
            >
              2
            </button>
            <button
              className="text-blue-800 underline"
              onClick={() => pageChange(9, 20)}
            >
              3
            </button>
            <button
              className="text-blue-800 underline"
              onClick={() => pageChange(9, 30)}
            >
              4
            </button>
            <button
              className="text-blue-800 underline"
              onClick={() => pageChange(9, 40)}
            >
              5
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
