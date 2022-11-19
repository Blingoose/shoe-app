import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { getData } from "../utils/api";
import "../styles/Shoes.css";

const Shoes = ({ setIsLoading, isLoading, setShoeData }) => {
  const [shoeList, setShoeList] = useState([]);
  const [errMsg, setErrMsg] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getData(
      "https://6374aad208104a9c5f858122.mockapi.io/shoes",
      setIsLoading,
      setErrMsg,
      setShoeList
    );
  }, [setIsLoading]);

  useEffect(() => {
    setShoeData((prev) => {
      const res = {};
      shoeList.forEach((e) => {
        res[e.id] = e;
      });
      return { ...prev, ...res };
    });
  }, [setShoeData, shoeList]);

  const insertShoes = () => {
    return shoeList.map((shoe) => {
      return (
        <div className="container" key={shoe.id}>
          <Link style={{ textDecoration: "none" }} to={`${shoe.id}`}>
            <Card data={shoe} />
          </Link>
        </div>
      );
    });
  };

  return (
    { isLoading } && (
      <div>{errMsg ? <p>{errMsg.message}</p> : <div>{insertShoes()}</div>}</div>
    )
  );
};

export default Shoes;
