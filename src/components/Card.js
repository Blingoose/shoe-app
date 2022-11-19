import React from "react";
import "../styles/Card.css";

const Card = ({ data }) => {
  return (
    <div className="card-container">
      <div className="card-box">
        <img className="img" src={`${data.img}`} alt={data.type} />
        <div className="details-container">
          <h4 className="brand">Brand - {data.type}</h4>
          <p className="price">Price - {data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
