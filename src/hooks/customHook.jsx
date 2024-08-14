import { useState, useEffect } from "react";
import { api } from "../utils/axios";

function useCustom(
  params = "",
  query = "",
  postsNumber = 9,
  pageSkip = 0,
  sort = "",
  orderType = ""
) {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const res = await api.get(`${params}`, {
          params: {
            q: query,
            limit: postsNumber,
            skip: pageSkip,
            sortBy: sort,
            order: orderType,
          },
        });

        if (res.data.hasOwnProperty("posts")) {
          setdata(res.data.posts);
        } else {
          setdata(res.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [params, query, postsNumber, pageSkip, sort, orderType]);

  return [data, loading];
}

export default useCustom;
