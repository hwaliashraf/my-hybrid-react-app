import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div dangerouslySetInnerHTML={{ __html: html }}>
      {/* Product list content will be rendered here from the server-side HTML */}
    </div>
  );
};

export default ProductsListSSR;
