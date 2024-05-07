var express = require("express");
var router = express.Router();

var alternativaController = require("../controllers/alternativaController");

router.get("/buscarAlternativa/:idPergunta", function (req, res) {
    alternativaController.buscarAlternativa(req, res);
});


module.exports = router;