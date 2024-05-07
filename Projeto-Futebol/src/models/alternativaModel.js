var database = require("../database/config");

function buscarAlternativa(idPergunta) {
    var instrucaoSql = `SELECT * FROM alternativa WHERE fkPergunta = '${idPergunta}'`;
  
    return database.executar(instrucaoSql);
  }

module.exports = {
    buscarAlternativa
}
