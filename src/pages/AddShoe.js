import React from "react";
import BookForm from "../components/BookForm";

const AddShoe = () => {
  const handleOnSubmit = (book) => {
    console.log(book);
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddShoe;
