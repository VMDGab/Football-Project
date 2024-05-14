var database = require("../database/config");

function inserirNotificacao(mensagem, fkUsuario, fkUsuarioNotificado) {
    var instrucaoSql = `insert into notificacao (mensagem, fkUsuario, fkUsuarioNotificado) values ("${mensagem}", ${fkUsuario}, ${fkUsuarioNotificado});`;
      return database.executar(instrucaoSql);
  }
  function buscarNotificacao( fkUsuario) {
    var instrucaoSql = `select fkUsuario, mensagem from notificacao where fkUsuarioNotificado = ${fkUsuario};`;
      return database.executar(instrucaoSql);
  }

module.exports = {
    inserirNotificacao,
    buscarNotificacao
}