var seguidorModel = require("../models/seguidorModel");

function buscarRankingSeguidor(req, res) {
 
  let fkUsuario = req.params.idUsuario;
  seguidorModel.buscarRankingSeguidor(fkUsuario).then(rankingRes => {
      res.status(200).json(rankingRes);
      }).catch(
      function (erro) {
          console.log(erro);
          res.status(500).json(erro.sqlMessage);
      }
  );
}

function seguirUsuario(req, res) {
  let fkUsuarioSeguidor = req.params.idUsuario;
  let fkUsuarioSeguido = req.body.usuarioSeguido;

  seguidorModel.seguirUsuario(fkUsuarioSeguido,fkUsuarioSeguidor).then(
      function (resultado) {
          res.json(resultado);
      }
  ).catch(
      function (erro) {
          console.log(erro);
          res.status(500).json(erro.sqlMessage);
      }
  );
}
function deixarSeguirUsuario(req, res) {
  let fkUsuarioSeguidor = req.params.idUsuario;
  let fkUsuarioSeguido = req.body.usuarioSeguido;

  seguidorModel.deixarSeguirUsuario(fkUsuarioSeguido,fkUsuarioSeguidor).then(
      function (resultado) {
          res.json(resultado);
      }
  ).catch(
      function (erro) {
          console.log(erro);
          res.status(500).json(erro.sqlMessage);
      }
  );
}

function seguindo(req, res) {
  let fkUsuarioSeguidor = req.params.idUsuario;

  seguidorModel.seguindo(fkUsuarioSeguidor).then(
      function (resultado) {
          res.json(resultado);
      }
  ).catch(
      function (erro) {
          console.log(erro);
          res.status(500).json(erro.sqlMessage);
      }
  );
}

module.exports = {
  buscarRankingSeguidor,
  seguirUsuario,
  deixarSeguirUsuario,
  seguindo,

}