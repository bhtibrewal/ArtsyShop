import axios from "axios";
import { useState, useEffect } from "react";

export const useAxios = (url, method, dataType, body = null, call = true) => {
  const AUTH_TOKEN = localStorage.getItem("token");
  if (AUTH_TOKEN) {
    axios.defaults.headers.common["authorization"] = AUTH_TOKEN;
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios({
          url,
          method,
          data: body,
        });
        console.log({ res });
        if (res.status === 200 || res.status === 201) {
          setData(res.data[dataType]);
        }
      } catch (e) {
        console.log(e.response.data);
      }
    };

    if (call) {
      fetchAPI();
    }
  }, [url]);
  return data;
};
