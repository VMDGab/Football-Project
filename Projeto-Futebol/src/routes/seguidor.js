var express = require("express");
var router = express.Router();

var seguidorController = require("../controllers/seguidorController");

router.post("/seguirUsuario/:idUsuario", function (req, res) {
  seguidorController.seguirUsuario(req, res);
});
router.get(`/buscarRankingSeguidor/:idUsuario`, function (req, res) {
  seguidorController.buscarRankingSeguidor(req, res);
})
router.delete(`/deixarSeguirUsuario/:idUsuario`, function (req, res) {
  seguidorController.deixarSeguirUsuario(req, res);
})
router.get(`/seguindo/:idUsuario`, function (req, res) {
  seguidorController.seguindo(req, res);
})
router.get("/seguidores/:idUsuario", function (req, res) {
  seguidorController.seguidores(req, res);
});
module.exports = router;