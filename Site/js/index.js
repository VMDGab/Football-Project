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
let overview = document.querySelector("#overview")
let desc = document.querySelector("#desc")
let stats = document.querySelector("#stats")

let nPlayer = 0

playerPhoto.setAttribute("src", players[nPlayer].photo)
clubs.setAttribute("src", players[nPlayer].clube)

playerName.textContent = players[nPlayer].nome
number.textContent = players[nPlayer].numero
position.textContent = players[nPlayer].posicao

playerName.style.color = players[nPlayer].cor
number.style.color = players[nPlayer].cor
position.style.color = players[nPlayer].cor
statsJogos.style.borderColor = players[nPlayer].stat
statsGols.style.borderColor = players[nPlayer].stat
statsAssist.style.borderColor = players[nPlayer].stat

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
    animate(playerPhoto)
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
        statsJogos.style.borderColor = players[nPlayer].stat
        statsGols.style.borderColor = players[nPlayer].stat
        statsAssist.style.borderColor = players[nPlayer].stat

        jogos.style.color = players[nPlayer].bg
        gols.style.color = players[nPlayer].bg
        assist.style.color = players[nPlayer].bg


    }, 500)

}

function previouslyPlayer() {
    nPlayer = nPlayer - 1
    animate()
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
        statsJogos.style.borderColor = players[nPlayer].stat
        statsGols.style.borderColor = players[nPlayer].stat
        statsAssist.style.borderColor = players[nPlayer].stat

        jogos.style.color = players[nPlayer].bg
        gols.style.color = players[nPlayer].bg
        assist.style.color = players[nPlayer].bg


    }, 500)
}

function changeNav() {
    nav.classList.toggle('active', scrollY > 0)
}

function animate() {
    playerPhoto.style.transform = "translateX(-1000px)"
    overview.style.transform = "translateX(-1000px)"
    desc.style.transform = "translateX(-3000px)"
    stats.style.transform = "translateY(1000px)"

    setTimeout(function () {
        playerPhoto.style.transform = "translateX(0px)"
        overview.style.transform = "translateX(0px)"
        desc.style.transform = "translateX(0px)"
        stats.style.transform = "translateY(0px)"
    }, 500)

 }