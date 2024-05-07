var database = require("../database/config");

function inserirPontuacao(pontuacao, fkUsuario, time) {

    var instrucaoSql = `insert into pontuacao (pontuacao, fkUsuario, tempoDecorrido) values('${pontuacao}', '${fkUsuario}', '${time}');`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarPontuacao(pontuacao, fkUsuario, time) {

    var instrucaoSql = `update pontuacao set pontuacao = ${pontuacao},tempoDecorrido = '${time}' where fkUsuario = ${fkUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPontuacaoUsuario(fkUsuario) {

    var instrucaoSql = `select pontuacao, tempoDecorrido from pontuacao where fkUsuario = ${fkUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarRanking() {

    var instrucaoSql = `select usuario.nomeUsuario, pontuacao.pontuacao 
    from usuario join pontuacao on pontuacao.fkUsuario = usuario.idUsuario order by pontuacao.pontuacao desc`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirPontuacao,
    atualizarPontuacao,
    buscarPontuacaoUsuario,
    buscarRanking

}
