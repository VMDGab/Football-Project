var database = require("../database/config");

function inserirPontuacao(pontuacao, fkUsuario) {

    var instrucaoSql = `insert into pontuacao (pontuacao, fkUsuario) values('${pontuacao}', '${fkUsuario}');`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarPontuacao(pontuacao, fkUsuario) {

    var instrucaoSql = `update pontuacao set pontuacao = ${pontuacao} where fkUsuario = ${fkUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPontuacaoUsuario(fkUsuario) {

    var instrucaoSql = `select pontuacao from pontuacao where fkUsuario = ${fkUsuario}`;

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
