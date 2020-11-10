const express = require("express");
const mongosse = require("mongoose");

const app = express();

app.use(express.json());

mongosse
  .connect("mongodb://localhost/celke", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão com o mongodb foi um sucesso!");
  })
  .catch((err) => {
    console.log("Conexão com o mongodb deu erro: " + err);
  });

app.get("/", (req, res) => {
  res.json({ title: "Server ruining!" });
});

app.listen(8080, () => {
  console.log("🐱‍🏍 Celk App runing!!!");
});
