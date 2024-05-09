var database = require("../database/config");

function inserirPontuacao(pontuacao, fkUsuario, time, acerto) {

    var instrucaoSql = `insert into pontuacao (pontuacao, fkUsuario, tempoDecorrido, acerto) values('${pontuacao}', '${fkUsuario}', '${time}', ${acerto});`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarPontuacao(pontuacao, fkUsuario, time, acerto) {

    var instrucaoSql = `update pontuacao set pontuacao = ${pontuacao},tempoDecorrido = '${time}', acerto= ${acerto} where fkUsuario = ${fkUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPontuacaoUsuario(fkUsuario) {

    var instrucaoSql = `select pontuacao, tempoDecorrido, acerto from pontuacao where fkUsuario = ${fkUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarRanking() {

    var instrucaoSql = `select usuario.idUsuario, usuario.nomeUsuario, pontuacao.pontuacao 
    from usuario join pontuacao on pontuacao.fkUsuario = usuario.idUsuario order by pontuacao.pontuacao desc`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarRankingSeguidor(fkUsuario){
    var instrucaoSql = `select usuario.idUsuario, usuario.nomeUsuario, pontuacao.pontuacao from usuario join pontuacao join usuarioSeguidor on fkUsuario = idUsuario and fkUsuarioSeguido = idUsuario and fkUsuarioSeguidor = ${fkUsuario}; `;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function seguirUsuario(fkUsuarioSeguido, fkUsuarioSeguidor){
    var instrucaoSql = `insert into usuarioSeguidor (fkUsuarioSeguido, fkUsuarioSeguidor) values ( ${fkUsuarioSeguido}, ${fkUsuarioSeguidor}); `;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirPontuacao,
    atualizarPontuacao,
    buscarPontuacaoUsuario,
    buscarRanking,
    buscarRankingSeguidor,
    seguirUsuario

}
