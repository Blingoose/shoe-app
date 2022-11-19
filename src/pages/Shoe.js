import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../utils/api";
import { deleteData } from "../utils/api";
import { updateData } from "../utils/api";
import "../styles/Shoe.css";

const Shoe = ({ setIsLoading }) => {
  const url = "https://6374aad208104a9c5f858122.mockapi.io/shoes";
  const [errMsg, setErrMsg] = useState("");
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [shoeData, setShoeData] = useState({
    type: "",
    price: "",
    img: "",
  });

  const { id } = useParams();

  const { type, price, img } = shoeData;

  useEffect(() => {
    setIsLoading(true);
    getData(`${url}/${id}`, setIsLoading, setErrMsg, setShoeData);
  }, [setIsLoading, id]);

  const handleDelete = () => {
    deleteData(`${url}/${id}`);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const values = [type, price, img];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const shoeData = {
        price,
        type,
        img,
      };
      setIsInEditMode((prev) => !isInEditMode);
      updateData(`${url}/${id}`, shoeData);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrMsg(errorMsg);
  };

  const changeEditMode = () => {
    setIsInEditMode((prev) => !isInEditMode);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "quantity":
        if (parseInt(value) === +value) {
          setShoeData((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setShoeData((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setShoeData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return isInEditMode ? (
    <div className="main-form">
      {errMsg && <p className="errorMsg">{errMsg}</p>}
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="type">
            Type
            <input
              type="type"
              name="type"
              defaultValue={shoeData.type}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="price">
            Price
            <input
              type="price"
              name="price"
              value={shoeData.price}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <label>Image</label>
          <input
            // id="quantity"
            type="text"
            name="img"
            defaultValue={shoeData.img}
            // placeholder="Enter available quantity"
            onChange={handleInputChange}
          ></input>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
        <button onClick={changeEditMode}>Cancel</button>
      </form>
    </div>
  ) : (
    <div className="shoe-container">
      <h3>{shoeData.type}</h3>
      <h3>{shoeData.price}</h3>
      <img className="shoe-img" src={shoeData.img} alt={shoeData.type}></img>
      <div className="edit-delete-container">
        <button className="btn" onClick={changeEditMode}>
          Edit
        </button>
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Shoe;
