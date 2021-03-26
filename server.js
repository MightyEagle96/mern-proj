const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "./backend/.env" });
const todoRouter = require("./backend/router/todoRouter");
const app = express();

const database = process.env.DATABASE;

mongoose
  .connect(database, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("E don connect o"))
  .catch(() => "Wahala for who no sabi connect database");

app.use(express.json());
app.use(cors());
app.use("/todos", todoRouter);
app.listen(4000, () => {
  console.log("App can hear you loud and clear");
});
