var perguntaModel = require("../models/perguntaModel");

function buscarPergunta(req, res) {
  var idPergunta = req.params.idPergunta;

  perguntaModel.buscarPergunta(idPergunta).then((resultado) => {
    res.status(200).json(resultado);
  });
}
function buscarTodasPergunta(req, res) {

  perguntaModel.buscarTodasPergunta().then((perguntaRes) => {
    res.status(200).json(perguntaRes);
  }).catch(
    function (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    }
  );
}


module.exports = {
  buscarPergunta,
  buscarTodasPergunta
};
