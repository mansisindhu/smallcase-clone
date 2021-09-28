const express = require("express");
const app = express();

app.use(express.json());

// importing connect from config
const connect = require("./src/config/dbconfig");

// controllers
const smallCaseController = require("./src/controllers/smallcase.controller");

app.use("/", smallCaseController);

// public 
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

// // landing page api
// app.get("/", async (req, res) => {
//   res.render("index");
// });

// collection page api
app.get("/discover", async (req, res) => {
  res.render("collection");
})

// all smallcases page api
app.get("/allSmallcases", async (req, res) => {
  res.render("allSmallcases");
})

// login page api
app.get("/login", async (req, res) => {
  res.render("login");
})

// signup page api
app.get("/signup", async (req, res) => {
  res.render("signup");
})

// orders page api
app.get("/orders", async (req, res) => {
  res.render("orders")
})

// server
app.listen(2930, async () => {
    await connect();
    console.log("listening to port 2930");
})