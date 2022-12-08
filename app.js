const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(__dirname+"/public"))
app.set("view engine", "ejs");

const todoList = [];

app.get("/", (req, res) => {
  const today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);
  res.render("todoList", { kindOfDay: day, todoList: todoList });
});

app.post("/", (req, res) => {
  var todoItem = req.body.newItem;
  todoList.push(todoItem);
  res.redirect("/");
});

app.listen(3000, () => console.log("server started at port 3000"));
