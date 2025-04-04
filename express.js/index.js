/* const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const read = fs.createReadStream("./static/index.html");
  read.pipe(res)
});

server.listen(3000)
console.log('Server on port 3000') */

/* app.get("/products", (req, res) => {
  res.send("lista de productos");
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
  res.send("Acerca de");
});

app.get("/clima", (req, res) => {
  res.send("El cilma esta bonito");
});

app.use((req, res) => {
  res.status(404).send("No se encuentra esta pagina");
});

app.post("/products", (req, res) => {
  res.send("creando productos");
});

app.put("/products", (req, res) => {
  res.send("actualizando productos");
});

app.patch("/products", (req, res) => {
  res.send("actualizando una parte del producto");
});

app.delete("/products", (req, res) => {
  res.send("eliminando un producto");
});
 */

/* app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/miarchivo", (req, res) => {
  res.sendFile("./Escudo_Hyliano.jpg", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    name: "Luis",
    age: 20,
    country: "Venezuela",
    counter: [3, 2, 1],
    personal: {
      height: 1.83,
      hair: "black",
    },
  });
});

app.get("/isAlive", (req, res) => {
  res.sendStatus(204);
});
 */

/* app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post("/user", (req, res) => {
  res.send("nuevo usuario creado");
  console.log(req.body);
}); */

const express = require("express");
const app = express();

appp.get("/hello/:user", (req, res) => {
  console.log(); 
  res.send(`hello ${req.params.user}`);
});

app.listen(3000);
console.log("Server on port 3000");
