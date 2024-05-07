var perguntaModel = require("../models/perguntaModel");

function buscarPergunta(req, res) {
  var idPergunta = req.params.idPergunta;

  perguntaModel.buscarPergunta(idPergunta).then((resultado) => {
    res.status(200).json(resultado);
  });
}



module.exports = {
  buscarPergunta,
};
