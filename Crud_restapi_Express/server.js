const express = require("express");
const morgan = require("morgan");
const app = express();
const products = [
  {
    id: 1,
    name: "laptop",
    price: 200,
  },
];

app.use(morgan("dev"));
app.use(express.json());

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.send("newProduct");
});

app.put("/products", (req, res) => {
  res.send("actualizando productos");
});

app.delete("/products", (req, res) => {
  res.send("eliminando productos");
});

app.get("/products/:id", (req, res) => {
  res.send("obteniendo un producto");
});

app.listen(3000);
console.log(`server runing on port ${3000}`);
