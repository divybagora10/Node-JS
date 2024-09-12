const express = require("express");

const products = require("../products");

const router = express.Router();

router.get("/product", (req, res) => {
  res.send({ message: "product details", data: products});
});

router.post("/product", (req, res) => {
  const data = req.body;
  const modifiedData = { id: products.length + 1, ...data };
  products.push(modifiedData);

  res.send({ message: "user added", data: data });
});

router.put("/product/:id", (req, res) => {
  const id = req.params.id;
  let product = products.find((item) => item.id === +id);

  if (!product) {
    res.send({ message: "product not found" });
  }
//   product.productName = req.body.productName;

//   const updatedProduct = { ...product, ...req.body }; // METHOD-1 to update dynamically

product = req.body // METHOD-2 to update dynamically
  const productIndex = products.findIndex((item) => item.id === +id);
  products[productIndex] = product;
  res.status(202).send({ message: "user updated", user: product });
});

router.delete("/product", (req, res) => {
  const id = req.params.id;
  const productIndex = products.findIndex((item) => item.id === +id);

  if (productIndex === -1) {
    res.send({ message: "product not exist" });
  }

  const deletedProduct = products.splice(productIndex, 1);
  res.send({ message: "product deleted", data: deletedProduct });
});

module.exports = router;
