const mongoose = require("mongoose");

const bd = mongoose.connect("mongodb://127.0.0.1:27017/Clientes");

module.exports = bd;
