var express = require("express");
var router = express.Router();

var perguntaController = require("../controllers/perguntaController");

router.get("/buscarPergunta/:idPergunta", function (req, res) {
  perguntaController.buscarPergunta(req, res);
});
router.get("/buscarTodasPergunta/", function (req, res) {
  perguntaController.buscarTodasPergunta(req, res);
});

module.exports = router;