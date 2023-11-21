import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css";

const ProductsListSSR = () => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        setHtml(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch pre-rendered HTML:", error);
      });
  }, []);

  return (
    <>
      <div className="product-list-container">
        <p> Below are being rendered through Server</p>
        <div dangerouslySetInnerHTML={{ __html: html }}>
          {/* Product list content will be rendered here from the server-side HTML */}
        </div>
      </div>
    </>
  );
};

export default ProductsListSSR;
