import axios from "axios";
import { useState, useEffect } from "react";

export const useAxios = (url, method,dataType, body = null, headers = null) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios(url, {
          method,
          dataType,
          body,
          headers,
        });
        if (res.status === 200) {
          setData(res.data[dataType]);
        }
      } catch {
        throw new Error("error");
      }
    })();
  }, [url]);
  return data;
};
