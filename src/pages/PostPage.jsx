import { useParams } from "react-router-dom";
import useCustom from "../hooks/customHook";

function PostPage() {
  const params = useParams();
  const [data, loading] = useCustom(params.id);

  return (
    <>
      {loading ? (
        <div className="absolute top-1/2 left-1/2 text-3xl font-bold">
          Loading...
        </div>
      ) : (
        <div className="mt-40 ml-14">
          <h1 className="text-4xl">{data.title}</h1>
          <p className="my-4">{data.body}</p>
          <h4 className="mb-2">Tags</h4>
          <div className="flex items-center gap-2">
            {data.tags.map((e, i) => {
              return (
                <span className="p-1 rounded-md" key={i}>
                  {e}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default PostPage;
