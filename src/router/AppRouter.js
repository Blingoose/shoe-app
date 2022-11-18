import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import AddShoe from "../pages/AddShoe";
import Shoes from "../pages/Shoes";

const AppRouter = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Shoes />} path="/shoes" />
          <Route element={<AddShoe />} path="/add" />
        </Routes>
      </div>
    </div>
  );
};

export default AppRouter;
