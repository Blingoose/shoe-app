import React, { useState, useEffect } from "react";
import { getData } from "../utils/api";

const Shoes = ({ setIsLoading, setShoeData }) => {
  const [shoeList, setShoeList] = useState([]);
  const [errMsg, setErrMsg] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getData(
      "https://6374aad208104a9c5f858122.mockapi.io/shoes",
      setShoeList,
      setErrMsg,
      setIsLoading
    );
  }, [setIsLoading]);
  console.log(shoeList);
  return (
    <div>{errMsg !== null ? <p>{errMsg.message}</p> : <h1>{"hi"}</h1>}</div>
  );
};

export default Shoes;
