import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import AddBook from "../components/AddBook";
import BooksList from "../components/BooksList";

const AppRouter = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Routes>
          <Route element={<BooksList />} path="/" />
          <Route element={<AddBook />} path="/add" />
        </Routes>
      </div>
    </div>
  );
};

export default AppRouter;
