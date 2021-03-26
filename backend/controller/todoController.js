const Todo = require("../model/todoModel");

exports.getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};
exports.createTodo = async (req, res) => {
  const todos = await Todo.create(req.body);
  res.send("Hello");
};
