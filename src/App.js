import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import ProductsListSSR from "./components/ProductListSSR";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/products_ssr" element={<ProductsListSSR />} />
      </Routes>
    </Router>
  );
};

export default App;
