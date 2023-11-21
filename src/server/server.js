const express = require("express");
const axios = require("axios");

const app = express();
const pug = require("pug");
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

const path = require("path");
const fs = require("fs");

const signupPug = pug.compileFile("src/templates/SignupTemplate.pug");
const signupCSS = fs.readFileSync(
  path.join("src/templates/SignupTemplate.css"),
  "utf8"
);

const productPug = pug.compileFile("src/templates/Product.pug");
const productCSS = fs.readFileSync(
  path.join("src/templates/Product.css"),
  "utf8"
);

app.get("/signup_ssr", (req, res) => {
  const signupHTML = signupPug();
  const html = `
    <style>${signupCSS}</style>
    ${signupHTML}
  `;
  console.log(html);
  res.send(html);
});

app.get("/products", (req, res) => {
  // Fetch products data from dummyjson.com

  axios
    .get("https://dummyjson.com/products?limit=10")
    .then((response) => {
      const products = response.data.products;

      // Render each product using the Pug template
      const productListHTML = products
        .map((product) => {
          const productHTML = productPug({ product });
          return `${productHTML}`;
        })
        .join("");

      // Wrap the product list in a container with the CSS styles
      const html = `
        <style>${productCSS}</style>
        <div class="products">${productListHTML}</div>
      `;

      // Send the pre-rendered HTML to the client
      res.send(html);
    })
    .catch((error) => {
      console.error("Failed to fetch products data:", error);
      res.status(500).send("Failed to fetch products data.");
    });
});

app.listen(3001);
