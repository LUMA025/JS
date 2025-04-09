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

/* app.get("/hello/:user", (req, res) => {
  console.log(); 
  res.send(`hello ${req.params.user}`);
}); */

/* app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Corregido

app.post("/user", (req, res) => {
  console.log(req.body); // Aquí deberías ver los datos del formulario
  res.send("nuevo usuario creado");
}); */

/* app.get("/hello/:user", (req, res) => {
  console.log(req.query.user);
  console.log(req.query.age);
  res.send(`hello ${req.params.user.toUpperCase()}`);
});

app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  res.send(`Result: ${parseInt(x) + parseInt(y)}`);
});

app.get("/users/:username/photo", (req, res) => {
  if (req.params.username === "Luis") {
    return res.sendFile("./Escudo_Hyliano.jpg", {
      root: __dirname,
    });
  }
  res.send("el usuario no tiene acceso");
});

app.get("/name/:nombre/age/:age", (req, res) => {
  res.send(
    `El usuario ${req.params.nombre} tiene ${req.params.age} anos de edad`
  );
});

app.all("/search", (req, res) => {
  if (req.query.q === "javascript books") {
    res.end("lista de libros de  javascript");
  } else {
    res.send("pagina normal");
  }
});

app.all("/info", (req, res) => {
  res.send("server info");
}); */

/* app.use((req, res, next) => {
  console.log(`Ruta: ${req.url} Metodo:${req.method}`);
  next();
});

app.use((req, res, next) => {
  if (req.query.login === "luismanuel.rincon24@gmail.com") {
    next();
  } else {
    res.send("quien eres? perro hjept");
  }
}); */

/* app.get("/note.txt", (req, res) => {
  res.send("este no es un archivo");
}); */

// Importaciones:

const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
require('ejs')

// Routes:

const HomeRoutes = require('./routes/home')
const UserRoutes = require('./routes/users')

// Configuraciones:

app.set("Nombreapp", "Express Course");
app.set("port", 3000);
app.set("case sensitive routing", true);
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'views'))

// Middlewares:

app.use(express.json());
app.use(morgan("dev"));

app.use(UserRoutes)
app.use(HomeRoutes)

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(app.get("port"));
console.log(`Server ${app.get("Nombreapp")} on port ${app.get("port")}`);
