let usuarioModel = require("../models/usuarioModel");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function autenticar(req, res) {
    let email = req.body.email;
    let senha = req.body.senha;

    const isEmailValido = emailRegex.test(email);

    if (!isEmailValido) {
        res.status(400).send("Seu email não é válido!");
    } else if (senha.length < 6) {
        res.status(400).send("Sua senha possui menos de 6 caracteres!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(200).json(resultadoAutenticar[0])
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma letiável que vá recuperar os valores do arquivo cadastro.html
    let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;

    const isEmailValido = emailRegex.test(email);
    // Faça as validações dos valores
    if (nome == "") {
        res.status(400).send("Informe seu nome!");
    } else if (!isEmailValido) {
        res.status(400).send("Seu email não é válido!");
    } else if (senha.length < 6) {
        res.status(400).send("Sua senha possui menos de 6 caracteres!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}