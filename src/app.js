const express = require("express");
const dotenv = require("dotenv");
const bd = require("../src/database/db");
const mainRoutes = require("../src/routes/index");
dotenv.config();

const app = express();
// Forma de ler json / middlewares
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

bd.then(console.log("rodando")).catch((err) => {
  console.log(err);
});
app.use("/person", mainRoutes);
app.get("/", (req, res) => {
  res.json({ message: "Oi Express" });
});

app.listen(process.env.PORT, () => {
  console.log("server running");
});
