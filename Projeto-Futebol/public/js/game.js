const idUsuario = sessionStorage.ID_USUARIO
const nomeUsuario = sessionStorage.NOME_USUARIO
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
    if (seconds >= 59) {
        minutes++
        seconds = seconds - 60
    }

    if (minutes < 10 && seconds < 10) {
        time = `00:0${minutes}:0${seconds}`
    } else if (minutes < 10) {
        time = `00:0${minutes}:${seconds}`
    } else if (seconds < 10) {
        time = `00:${minutes}:0${seconds}`
    } else {
        time = `00:${minutes}:${seconds}`
    }
}, 1000)


fetch(`/pergunta/buscarPergunta/1`).then(res => {
    res.json().then(res => {
        console.log(res)
        pergunta.textContent = `${res[nQuestao].descricao}`
    })
}).catch(function (erro) {
    console.log(erro);
})

fetch(`/alternativa/buscarAlternativa/1`).then(res => {
    res.json().then(res => {
        console.log(res)
        a.textContent = `${res[0].descricao}`
        b.textContent = `${res[1].descricao}`
        c.textContent = `${res[2].descricao}`
        d.textContent = `${res[3].descricao}`
    })
}).catch(function (erro) {
    console.log(erro);
})

function checkAnswer(resposta) {
    fetch(`/pergunta/buscarPergunta/${nQuestao + 1}`).then(res => {
                let respostaUsuario = resposta.textContent
        res.json().then(res => {
            let respostaCorreta = res[0].resposta
            if (respostaUsuario == respostaCorreta) {
                pontuacaoUsuario += res[0].valor
                acertos += 1
            }
        })
    }).catch(function (erro) {
        console.log(erro);
    })
    setTimeout(function () {

        fetch(`/pergunta/buscarTodasPergunta/`).then(
            res => {
                res.json().then(res => {
                    nQuestao = nQuestao + 1
                    if (nQuestao > res.length - 1) {
                        endGame()
                    } else {
                        nextQuestion(nQuestao)
                    }
                })
            }).catch(function (erro) {
                console.log(erro);
            })


    }, 300)
}
function nextQuestion(nQuestao) {

    numQuestao.textContent = nQuestao + 1
    fetch(`/pergunta/buscarPergunta/${nQuestao + 1}`).then(res => {
        res.json().then(res => {
            pergunta.textContent = `${res[0].descricao}`
        })
    }).catch(function (erro) {
        console.log(erro);
    })
    fetch(`/alternativa/buscarAlternativa/${nQuestao + 1}`).then(res => {
        res.json().then(res => {
            console.log(res)
            a.textContent = `${res[0].descricao}`
            b.textContent = `${res[1].descricao}`
            c.textContent = `${res[2].descricao}`
            d.textContent = `${res[3].descricao}`
        })
    }).catch(function (erro) {
        console.log(erro);
    })

}
function endGame() {

    clearInterval(timer)
    numQuestao.textContent = "FIM DE JOGO"
    let msg = `${nomeUsuario} fez ${pontuacaoUsuario} pontos` 
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
                            time: time,
                            acerto: acertos
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
                            time: time,
                            acerto: acertos
                        })
                    }).catch(function (erro) {
                        console.log(erro);
                    })
                }
            })
        }
    )
    fetch(`/seguidor/seguidores/${idUsuario}`).then(res => {
        res.json().then(res => {
            const seguidores = res

            for(i = 0; i <= seguidores.length; i++){
                fetch(`/notificacao/inserirNotificacao/${idUsuario}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    mensagem: msg,
                    usuarioNotificado: seguidores[i].fkUsuarioSeguidor,
                    })
            }).catch(function (erro) {
                console.log(erro);
            })
            }
            

        })
    }).catch(function (erro) {
        console.log(erro);
    })



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

