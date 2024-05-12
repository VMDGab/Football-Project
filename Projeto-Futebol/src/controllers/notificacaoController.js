var notificacaoModel = require("../models/notificacaoModel");

function inserirNotificacao(req, res) {
    var mensagem = req.body.mensagem;
    var fkUsuario = req.body.fkUsuario;
  
    notificacaoModel.inserirNotificacao(mensagem, fkUsuario).then((resultado) => {
      res.status(200).json(resultado);
    });
  }

module.exports = {
    inserirNotificacao
}