const idUsuario = sessionStorage.ID_USUARIO
console.log(idUsuario)

let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

let questionNumber = document.querySelector('#questionDiv')
let divQuestoes = document.querySelector('#alt')

let nQuestao = 0
let pontuacaoUsuario = 0
let acertos = 0


pergunta.textContent = questoes[nQuestao].pergunta

a.textContent = questoes[nQuestao].alternativaA
b.textContent = questoes[nQuestao].alternativaB
c.textContent = questoes[nQuestao].alternativaC
d.textContent = questoes[nQuestao].alternativaD



function nextQuestion(nQuestao) {

    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD

}

function checkAnswer(resposta) {

    let respostaUsuario = resposta.textContent
    let respostaCorreta = questoes[nQuestao].correta

    if (respostaUsuario == respostaCorreta) {
        pontuacaoUsuario += questoes[nQuestao].valor
        acertos += 1
    }

    setTimeout(function () {
        nQuestao = nQuestao + 1

        if (nQuestao > questoes.length - 1) {
            endGame()
        } else {
            nextQuestion(nQuestao)
        }

    }, 300)

}

function endGame() {
    numQuestao.textContent = "FIM DE JOGO"

    pergunta.textContent = `Você fez ${pontuacaoUsuario} pontos acertando ${acertos} de ${nQuestao} questões`

    fetch(`/pontuacao/buscarPontuacaoUsuario/${idUsuario}`).then(
        function (res) {
            if (res.ok) {
                fetch(`/pontuacao/atualizarPontuacao/${idUsuario}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        pontuacao: pontuacaoUsuario
                    })
                }).catch(function (erro) {
                    console.log(erro);
                })
            } else {
                fetch(`/pontuacao/inserirPontuacao/${idUsuario}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        pontuacao: pontuacaoUsuario
                    })
                }).catch(function (erro) {
                    console.log(erro);
                })
            }

        }
    )



    divQuestoes.style.display = "none"
    questionNumber.style.display = "none"

    setTimeout(function () {
        location.replace("../dashboard/ranking.html")
    }, 5000)
}

function goHome() {
    location.replace('../dashboard/home.html')
}

window.addEventListener('load', () => {
    if (sessionStorage.length == 0) {
        location.replace('../login.html')
    }
})

