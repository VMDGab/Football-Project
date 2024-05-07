var database = require("../database/config");

function buscarPergunta(idPergunta) {
  var instrucaoSql = `SELECT * FROM pergunta WHERE idPergunta = '${idPergunta}'`;

  return database.executar(instrucaoSql);
}

module.exports = {buscarPergunta};
