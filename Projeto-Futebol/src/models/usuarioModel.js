var database = require("../database/config")
function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT idUsuario, nomeUsuario, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha) {
        var instrucaoSql = `
        INSERT INTO usuario (nomeUsuario, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};