let pontuacaoModel = require("../models/pontuacaoModel");

function inserirPontuacao(req, res) {
    
    let pontuacao = req.body.pontuacao;
    let fkUsuario = req.params.idUsuario;
    
    pontuacaoModel.inserirPontuacao(pontuacao, fkUsuario).then(
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


function atualizarPontuacao(req, res) {

    let pontuacao = req.body.pontuacao;
    let fkUsuario = req.params.idUsuario;

    pontuacaoModel.atualizarPontuacao(pontuacao, fkUsuario).then(
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


function buscarPontuacaoUsuario(req, res) {
 
    let fkUsuario = req.params.idUsuario;

    pontuacaoModel.buscarPontuacaoUsuario(fkUsuario).then(
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

function buscarRanking(req, res) {
 
    pontuacaoModel.buscarRanking().then(rankingRes => {
        res.status(200).json(rankingRes);
        }).catch(
        function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    inserirPontuacao,
    atualizarPontuacao,
    buscarPontuacaoUsuario,
    buscarRanking
}