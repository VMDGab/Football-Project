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
    let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;

    let isNameRepeated = false;
    const isEmailValido = emailRegex.test(email);

    usuarioModel.listAll()
        .then(response => {
            for (let i = 0; i < res.length; i++) {
                if (nome.toUpperCase() == (response[i].nomeUsuario).toUpperCase()) {
                    isNameRepeated = true;
                    break;
                }}
   
    if (nome == "") {
        res.status(400).send("Informe seu nome!");
    } else if (nome.length >= 15) {
        res.status(400).send("Insira um nome com até 14 caracteres!");
    }else if (!isEmailValido) {
        res.status(400).send("Seu email não é válido!");
    }else if (isNameRepeated) {
        res.status(400).send("Esse nome já existe");
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
    })

}
module.exports = {
    autenticar,
    cadastrar
}