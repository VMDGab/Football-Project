const idUsuario = sessionStorage.ID_USUARIO

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


let seconds = 0
let minutes = 0
let time = ''


const timer = setInterval(() => {
    seconds++
    if(seconds >= 59){
        minutes++
        seconds = seconds - 60
    }

    if(minutes < 10 && seconds < 10){
    time = `00:0${minutes}:0${seconds}`
}else if(minutes < 10){
    time = `00:0${minutes}:${seconds}`
}else if(seconds < 10){
    time = `00:${minutes}:0${seconds}`
}else{
    time = `00:${minutes}:${seconds}`
}
}, 1000)


fetch(`/pergunta/buscarPergunta/1`).then(res => {
    res.json().then(res => {
        pergunta.textContent = `${res[nQuestao].descricao}`
    })
}).catch(function (erro) {
        console.log(erro);
    })

a.textContent = questoes[nQuestao].alternativaA
b.textContent = questoes[nQuestao].alternativaB
c.textContent = questoes[nQuestao].alternativaC
d.textContent = questoes[nQuestao].alternativaD

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
function nextQuestion(nQuestao) {

    numQuestao.textContent = questoes[nQuestao].numQuestao
    fetch(`/pergunta/buscarPergunta/${nQuestao + 1}`).then(res => {
        res.json().then(res => {
            console.log(res);
            pergunta.textContent = `${res[0].descricao}`
        })
    }).catch(function (erro) {
            console.log(erro);
        })
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD

}
function endGame() {
    
    clearInterval(timer)
        console.log(time)
    numQuestao.textContent = "FIM DE JOGO"

    pergunta.textContent = `Você fez ${pontuacaoUsuario} pontos acertando ${acertos} de ${nQuestao} questões`

    fetch(`/pontuacao/buscarPontuacaoUsuario/${idUsuario}`).then(
        function (res) {
            res.json().then(res => {
              if (res.length == 0) {
                fetch(`/pontuacao/inserirPontuacao/${idUsuario}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        pontuacao: pontuacaoUsuario,
                        time: time
                    })
                }).catch(function (erro) {
                    console.log(erro);
                })
            } else {
                fetch(`/pontuacao/atualizarPontuacao/${idUsuario}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        pontuacao: pontuacaoUsuario,
                        time: time
                    })
                }).catch(function (erro) {
                    console.log(erro);
                })
            }
})
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

