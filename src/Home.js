import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import ProductsList from "./ProductList";
import ProductsListSSR from "./ProductListSSR";

const Home = () => {
  return (
    <div className="App">
      <h1>Welcome to My Hybrid React App</h1>
      <div className="buttons">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <br />
        <br />
        <ProductsList />
        <p> Below are being rendered through Server</p>
        <ProductsListSSR />
      </div>
    </div>
  );
};

export default Home;
