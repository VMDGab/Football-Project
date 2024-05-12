var express = require("express");
var router = express.Router();

var notificacaoController = require("../controllers/notificacaoController");

router.post("/inserirNotificacao/", function (req, res) {
    notificacaoController.inserirNotificacao(req, res);
});
router.get("/buscarNotificacao/:idUsuario", function (req, res) {
    notificacaoController.buscarNotificacao(req, res);
});


module.exports = router;