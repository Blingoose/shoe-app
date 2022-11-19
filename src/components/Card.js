import React from "react";
import "../styles/Card.css";

const Card = ({ data }) => {
  return (
    <div className="card-container">
      <div className="card-box">
        <img className="img" src={`${data.img}`} alt={data.type} />
        <h4>{data.type}</h4>
        <p>{data.price}</p>
      </div>
    </div>
  );
};

export default Card;
