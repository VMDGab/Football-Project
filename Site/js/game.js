
let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

let questionNumber = document.querySelector('#questionDiv')
let divQuestoes = document.querySelector('#alt')

let nQuestao = 0
let pontuacao = 0
let acertos = 0


console.log(questoes.length)
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
        pontuacao += 100
        acertos += 1
    }
    
    setTimeout(function(){
        nQuestao = nQuestao + 1
        
        if(nQuestao > questoes.length - 1){
            endGame()
        }else{
            nextQuestion(nQuestao)
        }

    }, 300)

}

function endGame(){
    numQuestao.textContent = "FIM DE JOGO"

    pergunta.textContent = `Você fez ${pontuacao} pontos acertando ${acertos} de ${nQuestao} questões`

    divQuestoes.style.display = "none" 
    questionNumber.style.display = "none" 
    setTimeout(function(){
        pontuacao = 0
        location.reload()
    }, 3000)
}