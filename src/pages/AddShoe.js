import React from "react";
import ShoeForm from "../components/ShoeForm";

const AddShoe = () => {
  const handleOnSubmit = (book) => {
    console.log(book);
  };

  return (
    <React.Fragment>
      <ShoeForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddShoe;
