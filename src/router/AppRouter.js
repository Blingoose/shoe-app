import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddShoe from "../pages/AddShoe";
import Shoes from "../pages/Shoes";
import Shoe from "../pages/Shoe";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import "../styles/Spinner.css";

const AppRouter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [shoeData, setShoeData] = useState({});
  return (
    <div>
      <Header />
      {isLoading && (
        <div className="spinner-container">
          <h1 className="loading">Loading</h1>
          <Spinner />
        </div>
      )}
      <div className="main-content">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route
            element={
              <Shoes
                setShoeData={setShoeData}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
              />
            }
            path="/shoes"
          />
          <Route element={<AddShoe />} path="/add" />
          <Route
            element={
              <Shoe
                data={shoeData}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
              />
            }
            path="/shoes/:id"
          />
        </Routes>
      </div>
    </div>
  );
};

export default AppRouter;
