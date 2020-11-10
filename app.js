const express = require("express");
const mongosse = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());

/*Middle */
app.use((req, res, next) => {
  res.header("Acess-Control-Allow-Origin", "*"); // "*"= todos endereços podem fazer requisições, http:.... = somente esse endereço terá acesso
  res.header("Acess-Control-Allow-Methods", "GET, PUT, POST, DELETE"); //METHODS QUE PODEM FAZER REQUISIÇÕES
  res.header(
    "Acess-Control-Allow-Headers",
    "Content-Type, Authorization, X-PINGOTHER"
  );
  app.use(cors());
  next();
});

require("../models/home");
const Home = mongosse.model("Home");
require("../models/contato");
const Contato = mongosse.model("Contato");

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

app.get("/home", async (req, res) => {
  await Home.findOne({})
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

  await Home.create(req.body, (err) => {
    if (err) {
      return res.status(400).json({
        error: true,
        message: "Erro: Conteudo da pagina Home não cadastrado com sucesso.",
      });
    }
    return res.json({
      error: false,
      message: "Conteudo da pagina Home cadastrado com sucesso!",
    });
  });
});

app.post("/contato", async (req, res) => {
  await Contato.create(req.body, (err) => {
    if (err) {
      return res.status(400).json({
        error: true,
        message: "Menssagem de contato não cadastrado com sucesso.",
      });
    }
    return res.json({
      error: false,
      message: "Menssagem de contato cadastrado com sucesso!",
    });
  });
});

/**************************CONECT**SERVER********************************************** */
app.listen(8080, () => {
  console.log("🐱‍🏍 Celk App runing!!!");
});
