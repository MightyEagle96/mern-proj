const express = require("express");
const { getTodos, createTodo } = require("../controller/todoController");
const router = express.Router();

router.get("/", getTodos).post("/", createTodo);
module.exports = router;
