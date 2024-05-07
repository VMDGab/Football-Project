var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");

router.post("/inserirPontuacao/:idUsuario", function (req, res) {
    pontuacaoController.inserirPontuacao(req, res);
});

router.post(`/atualizarPontuacao/`, function (req, res) {
    pontuacaoController.atualizarPontuacao(req, res);
})

router.get(`/buscarPontuacaoUsuario/`, function (req, res) {
    pontuacaoController.buscarPontuacaoUsuario(req, res);
})

router.get(`/buscarRanking/`, function (req, res) {
    pontuacaoController.buscarRanking(req, res);
})

module.exports = router;