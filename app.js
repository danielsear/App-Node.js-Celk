const express = require("express");
const mongosse = require("mongoose");

const app = express();

app.use(express.json());

require("../models/home");
const Home = mongosse.model("Home");

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

app.get("/home", (req, res) => {
  Home.findOne({})
    .then((home) => {
      return res.json({
        error: false,
        home,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: true,
        message: "Nenhum registro encontrado!",
      });
    });
});

app.post("/home", async (req, res) => {
  const homeExite = await Home.findOne({});
  if (homeExite) {
    return res.status(400).json({
      error: true,
      message: "Erro: Conteudo da pagina Home ja tem um registro.",
    });
  }

  Home.create(req.body, (err) => {
    if (err) {
      return res.status(400).json({
        error: true,
        message: "Erro: Conteudo da pagina Home não cadastrado com sucesso.",
      });
    }
    return res.json({
      error: false,
      message: "Conteudo da pagina Home cadastrado com sucesso.",
    });
  });
});

app.listen(8080, () => {
  console.log("🐱‍🏍 Celk App runing!!!");
});
