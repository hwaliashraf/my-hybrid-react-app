import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ProductsList from "../components/ProductList";
import ProductsListSSR from "../components/ProductListSSR";

const Home = () => {
  return (
    <div className="App">
      <h1>Welcome to My Hybrid React App</h1>
      <div className="button-container">
        <Link className="login" to="/login">
          Login
        </Link>

        <Link className="signup" to="/signup">
          Sign Up
        </Link>
      </div>
      <div className="products-container">
        <ProductsList />

        <ProductsListSSR />
      </div>
    </div>
  );
};

export default Home;
