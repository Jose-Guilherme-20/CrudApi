const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
// Forma de ler json / middlewares
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Oi Express" });
});

app.listen(process.env.PORT, () => {
  console.log("server running");
});
