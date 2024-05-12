var database = require("../database/config");

function inserirNotificacao(mensagem, fkUsuario) {
    var instrucaoSql = `insert into notificacao values (default, "${mensagem}", ${fkUsuario});`;
      return database.executar(instrucaoSql);
  }

module.exports = {
    inserirNotificacao
}