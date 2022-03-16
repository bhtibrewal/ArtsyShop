import axios from "axios";
import { useState, useEffect } from "react";

export const useAxios = (url, method, body = null, headers = null) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url);
        if (res.status === 200) {
          setData(res.data.products);
        }
      } catch {
        throw new Error("error");
      }
    })();
  }, [url]);
  return data;
};
