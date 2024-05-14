var notificacaoModel = require("../models/notificacaoModel");

function inserirNotificacao(req, res) {
    var fkUsuario = req.params.idUsuario;
    var fkUsuarioNotificado = req.body.usuarioNotificado
    var mensagem = req.body.mensagem;
  
    notificacaoModel.inserirNotificacao(mensagem, fkUsuario, fkUsuarioNotificado).then((resultado) => {
      res.status(200).json(resultado);
    });
  }
  function buscarNotificacao(req, res) {
    var fkUsuario = req.params.idUsuario;
  
    notificacaoModel.buscarNotificacao(fkUsuario).then((resultado) => {
      res.status(200).json(resultado);
    });
  }

module.exports = {
    inserirNotificacao,
    buscarNotificacao
}