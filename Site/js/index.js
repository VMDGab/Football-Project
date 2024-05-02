let playerPhoto = document.querySelector("#playerPhoto")
let playerName = document.querySelector("#playerName")
let clubs = document.querySelector("#clubs")
let number = document.querySelector("#number")
let position = document.querySelector("#position")
let descricao = document.querySelector("#descricao")
let jogos = document.querySelector("#jogos")
let gols = document.querySelector("#gols")
let assist = document.querySelector("#assist")
let Lendas = document.querySelector("#Lendas")
let statsJogos = document.querySelector("#statsJogos")
let statsGols = document.querySelector("#statsGols")
let statsAssist = document.querySelector("#statsAssist")

let nPlayer = 0

playerPhoto.setAttribute("src", players[nPlayer].photo)
clubs.setAttribute("src", players[nPlayer].clube)

playerName.textContent = players[nPlayer].nome
number.textContent = players[nPlayer].numero
position.textContent = players[nPlayer].posicao

playerName.style.color = players[nPlayer].cor
number.style.color = players[nPlayer].cor
position.style.color = players[nPlayer].cor
statsJogos.style.borderColor = players[nPlayer].bg
statsGols.style.borderColor = players[nPlayer].bg
statsAssist.style.borderColor = players[nPlayer].bg

jogos.style.color = players[nPlayer].bg
gols.style.color = players[nPlayer].bg
assist.style.color = players[nPlayer].bg

descricao.textContent = players[nPlayer].descricao
jogos.textContent = players[nPlayer].jogos
gols.textContent = players[nPlayer].gols
assist.textContent = players[nPlayer].assist

Lendas.style.background = players[nPlayer].bg

function nextPlayer() {
    nPlayer = nPlayer + 1

    setTimeout(function () {

        playerPhoto.setAttribute("src", players[nPlayer].photo)
        clubs.setAttribute("src", players[nPlayer].clube)

        playerName.textContent = players[nPlayer].nome
        number.textContent = players[nPlayer].numero
        position.textContent = players[nPlayer].posicao

        playerName.style.color = players[nPlayer].cor
        number.style.color = players[nPlayer].cor
        position.style.color = players[nPlayer].cor

        descricao.textContent = players[nPlayer].descricao
        jogos.textContent = players[nPlayer].jogos
        gols.textContent = players[nPlayer].gols
        assist.textContent = players[nPlayer].assist

        Lendas.style.background = players[nPlayer].bg
        statsJogos.style.borderColor = players[nPlayer].bg
        statsGols.style.borderColor = players[nPlayer].bg
        statsAssist.style.borderColor = players[nPlayer].bg

        jogos.style.color = players[nPlayer].bg
        gols.style.color = players[nPlayer].bg
        assist.style.color = players[nPlayer].bg


    }, 100)

}

function previouslyPlayer(){
    nPlayer = nPlayer - 1

    setTimeout(function () {

        playerPhoto.setAttribute("src", players[nPlayer].photo)
        clubs.setAttribute("src", players[nPlayer].clube)

        playerName.textContent = players[nPlayer].nome
        number.textContent = players[nPlayer].numero
        position.textContent = players[nPlayer].posicao

        playerName.style.color = players[nPlayer].cor
        number.style.color = players[nPlayer].cor
        position.style.color = players[nPlayer].cor

        descricao.textContent = players[nPlayer].descricao
        jogos.textContent = players[nPlayer].jogos
        gols.textContent = players[nPlayer].gols
        assist.textContent = players[nPlayer].assist

        Lendas.style.background = players[nPlayer].bg
        statsJogos.style.borderColor = players[nPlayer].bg
        statsGols.style.borderColor = players[nPlayer].bg
        statsAssist.style.borderColor = players[nPlayer].bg

        jogos.style.color = players[nPlayer].bg
        gols.style.color = players[nPlayer].bg
        assist.style.color = players[nPlayer].bg


    }, 100)
}

function changeNav() {
    nav.classList.toggle('active', scrollY > 0)
}
