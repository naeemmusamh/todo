import axios from "axios";
import { useState } from "react";

const useAjax = (url) => {
  const [list, setList] = useState([]);

  const RESTItems = async (method, url, item) => {
    const result = await axios({
      method: method,
      url: url,
      mode: "cors",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      data: item
    });
    return result.data;
  };

  const postItem = (item) => {
    RESTItems("post", url, item);
  };

  const deleteItem = (item) => {
    let extendedUrl = `${url}/${item._id}`;
    RESTItems("delete", extendedUrl, item);
  };

  const putItem = (item) => {
    item.complete = !item.complete;
    let extendedUrl = `${url}/${item._id}`;
    RESTItems("put", extendedUrl, item);
  };

  const getItems = () => {
    const fetchData = async () => {
      let data = await RESTItems("get", url);
      setList(data.results);
    };
    fetchData();
  };

  return [list, postItem, deleteItem, putItem, getItems];
};

export default useAjax;
