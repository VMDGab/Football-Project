var database = require("../database/config");

function buscarRankingSeguidor(fkUsuario){
  var instrucaoSql = `select usuario.idUsuario, usuario.nomeUsuario, pontuacao.pontuacao from usuario 
  join pontuacao join usuarioSeguidor on fkUsuario = idUsuario and fkUsuarioSeguido = idUsuario 
  and fkUsuarioSeguidor = ${fkUsuario} order by pontuacao.pontuacao desc; `;


  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function seguirUsuario(fkUsuarioSeguido, fkUsuarioSeguidor){
  var instrucaoSql = `insert into usuarioSeguidor (fkUsuarioSeguido, fkUsuarioSeguidor) values ( ${fkUsuarioSeguido}, ${fkUsuarioSeguidor}); `;


  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function deixarSeguirUsuario(fkUsuarioSeguido, fkUsuarioSeguidor){
  var instrucaoSql = `delete from usuarioSeguidor where fkUsuarioSeguido = ${fkUsuarioSeguido} and fkUsuarioSeguidor = ${fkUsuarioSeguidor}; `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function seguindo(fkUsuarioSeguidor){
  var instrucaoSql = `select * from usuarioSeguidor where fkUsuarioSeguidor = ${fkUsuarioSeguidor}; `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
function seguidores(fkUsuarioSeguido){
  var instrucaoSql = `select * from usuarioSeguidor where fkUsuarioSeguido = ${fkUsuarioSeguido}; `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarRankingSeguidor,
  seguirUsuario,
  deixarSeguirUsuario,
  seguindo,
  seguidores
}
