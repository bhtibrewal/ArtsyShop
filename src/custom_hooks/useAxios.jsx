import axios from "axios";
import { useState, useEffect } from "react";

export const useAxios = (
  url,
  method,
  dataType,
  body = null,
  headers = null
) => {
  const AUTH_TOKEN = localStorage.getItem("token");
  if (AUTH_TOKEN) {
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    console.log("token");
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios(url, {
          method,
          data: body,
          headers,
        });
        console.log({ res });
        if (res.status === 200 || res.status === 201) {
          setData(res.data[dataType]);
        }
      } catch (e) {
        console.log(e.response.data);
        // throw new Error("error");
      }
    };
    fetchAPI();
  }, [url]);
  // console.log("data", data)
  return data;
};
