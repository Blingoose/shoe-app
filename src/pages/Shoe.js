import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../utils/api";
import { deleteData } from "../utils/api";
import { updateData } from "../utils/api";
import "../styles/Shoe.css";
import "../styles/ShoeAdd-Edit.css";

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
    <div className="main-edit-form">
      {errMsg && <p className="errorMsg">{errMsg}</p>}
      <form className="edit-form" onSubmit={handleUpdate}>
        <div className="input-label-cont">
          <label className="label-control" htmlFor="type">
            Type
          </label>
          <input
            className="input-control"
            type="type"
            name="type"
            defaultValue={shoeData.type}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-label-cont">
          <label className="label-control" htmlFor="price">
            Price
          </label>
          <input
            className="input-control"
            type="price"
            name="price"
            value={shoeData.price}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-label-cont">
          <label className="label-control">Image</label>
          <input
            // id="quantity"
            className="input-control"
            type="text"
            name="img"
            defaultValue={shoeData.img}
            // placeholder="Enter available quantity"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="submit-cancel-container">
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn" onClick={changeEditMode}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className="shoe-container">
      <h3 className="shoe-brand">Brand - {shoeData.type}</h3>
      <h4 className="shoe-price">Price - {shoeData.price}</h4>
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
