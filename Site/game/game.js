let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

let pergunta = document.querySelector("#pergunta")

const q1 = {
    numQuestao : 1,
    pergunta: "Quem venceu a copa do mundo de 1970",
    alternativaA: "Alemanha",
    alternativaB: "Brasil",
    alternativaC: "Mexico",
    alternativaD: "Itália",
    correta: "Brasil"
}
const q2 = {
    numQuestao : 2,
    pergunta: "Qual time possui mais titulos da Champions League",
    alternativaA: "Real Madrid",
    alternativaB: "Crisciuma",
    alternativaC: "Milan",
    alternativaD: "Barcelona",
    correta: "Real Madrid"
}

const questoes = [q1, q2]

pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

function nextQuestion(nquestao){
    
pergunta.textContent = questoes[nquestao].pergunta
a.textContent = questoes[nquestao].alternativaA
b.textContent = questoes[nquestao].alternativaB
c.textContent = questoes[nquestao].alternativaC
d.textContent = questoes[nquestao].alternativaD
}

function checkAnswer(nquestao, resposta){
    let respostaCorreta = questoes[nquestao].correta
    let respostaUsuario = resposta.textContent
if(respostaUsuario == respostaCorreta){
    alert("resposta correta")
}else{
    alert("resposta errada")
}

nextQuestion(1)

   
}