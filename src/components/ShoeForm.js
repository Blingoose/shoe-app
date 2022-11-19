import { v4 as uuidv4 } from "uuid";

import React, { useState } from "react";
import { addData } from "../utils/api";

const ShoeForm = () => {
  const [errMsg, setErrMsg] = useState("");
  const url = "https://6374aad208104a9c5f858122.mockapi.io/shoes";

  const [data, setData] = useState({
    uuid: uuidv4(),
    type: "",
    price: "",
    img: "",
  });

  const { type, price, img } = data;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "quantity":
        if (parseInt(value) === +value) {
          setData((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setData((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = [type, price, img];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const data = {
        price,
        type,
        img,
      };
      addData(url, data);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrMsg(errorMsg);
  };

  return (
    <div>
      {errMsg && <p className="errorMsg">{errMsg}</p>}
      <h1>Add Shoe</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">
          Type
          <input
            type="type"
            name="type"
            value={data.type}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="price"
            name="price"
            value={data.price}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="img">
          Img
          <input
            type="input"
            name="img"
            value={data.img}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default ShoeForm;
