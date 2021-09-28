const express = require("express");
const app = express();
app.use(express.json());

// connect from config
const connect = require("./config/dbconfig");

// public 
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

// sample render index file
app.get("/", (req, res) => {
  res.render("index");
});

// server
app.listen(2930, async () => {
    await connect();
    console.log("listening to port 2930");
})