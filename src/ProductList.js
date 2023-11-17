import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <img src={product.thumbnail} alt={product.title} />
            <p>Price: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
