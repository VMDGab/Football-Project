var express = require("express");
var router = express.Router();

var notificacaoController = require("../controllers/notificacaoController");

router.post("/inserirNotificacao/", function (req, res) {
    notificacaoController.buscarPergunta(req, res);
});


module.exports = router;