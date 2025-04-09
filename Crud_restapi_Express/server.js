const express = require("express");
const morgan = require("morgan");
const app = express();
let products = [
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
  res.send(newProduct);
});

app.put("/products/:id", (req, res) => {
  const newData = req.body;
  const productfound = products.find((p) => p.id === parseInt(req.params.id));

  if (!productfound) {
    return res.status(404).json({
      message: "product not found",
    });
  }

  products = products.map((p) =>
    p.id === parseInt(req.params.id) ? { ...p, ...newData } : p
  );
  res.json({
    message: "producto actualizado"
  });
});

app.delete("/products/:id", (req, res) => {
  const productfound = products.find((p) => p.id === parseInt(req.params.id));

  if (!productfound) {
    return res.status(404).json({
      message: "product not found",
    });
  }

  products = products.filter((p) => p.id !== parseInt(req.params.id));

  res.sendStatus(204);
});

app.get("/products/:id", (req, res) => {
  console.log(req.params.id);
  const productfound = products.find((p) => p.id === parseInt(req.params.id));

  if (!productfound) {
    return res.status(404).json({
      message: "product not found",
    });
  }
  console.log(productfound);
  res.json(productfound);
});

app.listen(3000);
console.log(`server runing on port ${3000}`);
