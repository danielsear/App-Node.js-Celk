const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ title: "Server ruining!" });
});

app.listen(8080, () => {
  console.log("🐱‍🏍 Celk App runing!!!");
});
