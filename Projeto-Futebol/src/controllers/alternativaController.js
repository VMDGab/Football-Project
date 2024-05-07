var alternativaModel = require("../models/alternativaModel");

function buscarAlternativa(req, res) {
    var idPergunta = req.params.idPergunta;
  
    alternativaModel.buscarAlternativa(idPergunta).then((resultado) => {
      res.status(200).json(resultado);
    });
  }

module.exports = {
    buscarAlternativa
}