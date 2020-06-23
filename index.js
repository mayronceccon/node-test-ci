const express = require("express");
const app = express();
const sum = require("./sum");

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ name: "Test", sum: sum(20, 15) });
});

app.listen((port = PORT), () => {
  console.log("Run server");
});
