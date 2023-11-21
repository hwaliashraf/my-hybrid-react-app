import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css";
import "../templates/Product.css";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=10")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Failed to fetch products data:", error);
      });
  }, []);

  return (
    <div className="product-list-container">
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => (
          <div className="product">
            <img src={product.thumbnail} alt={product.title} />
            <div className="product-details">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <div className="price-container">
                <span>Price:</span> <span>{product.price}</span>
              </div>
            </div>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
