let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

let divQuestoes = document.querySelector('#questoes')

let nQuestao = 0
let pontuacao = 0
let acertos = 0

const q1 = {
    numQuestao: 1,
    pergunta: "Quem venceu a copa do mundo de 1970",
    alternativaA: "Alemanha",
    alternativaB: "Brasil",
    alternativaC: "Mexico",
    alternativaD: "Itália",
    correta: "Brasil"
}
const q2 = {
    numQuestao: 2,
    pergunta: "Qual time possui mais titulos da Champions League",
    alternativaA: "Real Madrid",
    alternativaB: "Crisciuma",
    alternativaC: "Milan",
    alternativaD: "Barcelona",
    correta: "Real Madrid"
}
const q3 = {
    numQuestao: 3,
    pergunta: "Quem é o maior artilheiro da história da Champions League",
    alternativaA: "Henrique Dourado",
    alternativaB: "Erling Haaland",
    alternativaC: "Cristiano Ronaldo",
    alternativaD: "Xavi",
    correta: "Cristiano Ronaldo"
}


const questoes = [q1, q2, q3]

console.log(questoes.length)
pergunta.textContent = q1.pergunta

a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

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

    }, 200)

}

function endGame(){
    numQuestao.textContent = "FIM DE JOGO"

    pergunta.textContent = `Você fez ${pontuacao} pontos acertando ${acertos} de ${nQuestao} questões`

    divQuestoes.style.display = "none" 

    setTimeout(function(){
        pontuacao = 0
        location.reload()
    }, 3000)
}