var database = require("../database/config");

function inserirNotificacao(mensagem, fkUsuario) {
    var instrucaoSql = `insert into notificacao values (default, "${mensagem}", ${fkUsuario});`;
      return database.executar(instrucaoSql);
  }
  function buscarNotificacao( fkUsuario) {
    var instrucaoSql = `select mensagem from notificacao where fkUsuario = ${fkUsuario};`;
      return database.executar(instrucaoSql);
  }

module.exports = {
    inserirNotificacao,
    buscarNotificacao
}