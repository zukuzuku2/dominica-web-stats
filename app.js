const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();
app.use(morgan("dev"));

const { Port = 3000 } = process.env;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(console.log("Conexion exitosa"))
  .catch((err) => {
    console.log(err);
  });

app.listen(Port, () => console.log(`Server is running on port ${Port}`));
