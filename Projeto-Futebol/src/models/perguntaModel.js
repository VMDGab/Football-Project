var database = require("../database/config");

function buscarPergunta(idPergunta) {
  var instrucaoSql = `SELECT * FROM pergunta WHERE idPergunta = '${idPergunta}'`;

  return database.executar(instrucaoSql);
}

function buscarTodasPergunta() {
  var instrucaoSql = `SELECT * FROM pergunta`;

  return database.executar(instrucaoSql);
}

module.exports = {
  buscarPergunta,
  buscarTodasPergunta
};
