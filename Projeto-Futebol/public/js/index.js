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

let nameClub = document.querySelector('#nameClub')
let descClub = document.querySelector('#descClub')
let imageClub = document.querySelector('#imageClub')
let interQtd = document.querySelector('#interQtd')
let nomeTituloInter = document.querySelector('#nomeTituloInter')
let nacionalQtd = document.querySelector('#nacionalQtd')
let nomeTituloNacional = document.querySelector('#nomeTituloNacional')
let international = document.querySelector('#international')
let national = document.querySelector('#national')
let aboutClub = document.querySelector('#aboutClub')
let clubStats = document.querySelector('#clubStats')
let nPlayer = 0
let nClube = 0


imageClub.setAttribute('src', clubes[nClube].image)
nameClub.textContent = clubes[nClube].nome
descClub.textContent = clubes[nClube].descricao
interQtd.textContent = clubes[nClube].interQtd
nomeTituloInter.textContent = clubes[nClube].nomeTituloInter
nacionalQtd.textContent = clubes[nClube].nacionalQtd
nomeTituloNacional.textContent = clubes[nClube].nomeTituloNacional
international.style.borderColor = clubes[nClube].color
national.style.borderColor = clubes[nClube].color
nameClub.style.color = clubes[nClube].color
interQtd.style.color = clubes[nClube].color
nacionalQtd.style.color = clubes[nClube].color

function nextClub() {
    nClube++
    animateClub()
    
    setTimeout(function() {
        imageClub.setAttribute('src', clubes[nClube].image)
        nameClub.textContent = clubes[nClube].nome
        descClub.textContent = clubes[nClube].descricao
        interQtd.textContent = clubes[nClube].interQtd
        nomeTituloInter.textContent = clubes[nClube].nomeTituloInter
        nacionalQtd.textContent = clubes[nClube].nacionalQtd
        nomeTituloNacional.textContent = clubes[nClube].nomeTituloNacional
        international.style.borderColor = clubes[nClube].color
        national.style.borderColor = clubes[nClube].color
        nameClub.style.color = clubes[nClube].color
        interQtd.style.color = clubes[nClube].color
        nacionalQtd.style.color = clubes[nClube].color
    },500)
}

function previouslyClub() {
    nClube = nClube - 1
    animateClub()
    setTimeout(function() {
    imageClub.setAttribute('src', clubes[nClube].image)
    nameClub.textContent = clubes[nClube].nome
    descClub.textContent = clubes[nClube].descricao
    interQtd.textContent = clubes[nClube].interQtd
    nomeTituloInter.textContent = clubes[nClube].nomeTituloInter
    nacionalQtd.textContent = clubes[nClube].nacionalQtd
    nomeTituloNacional.textContent = clubes[nClube].nomeTituloNacional
    international.style.borderColor = clubes[nClube].color
    national.style.borderColor = clubes[nClube].color
    nameClub.style.color = clubes[nClube].color
    interQtd.style.color = clubes[nClube].color
    nacionalQtd.style.color = clubes[nClube].color
},500)
}
// --------------------------------------------------------------

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

jogos.style.color = players[nPlayer].stat
gols.style.color = players[nPlayer].stat
assist.style.color = players[nPlayer].stat

descricao.textContent = players[nPlayer].descricao
jogos.textContent = players[nPlayer].jogos
gols.textContent = players[nPlayer].gols
assist.textContent = players[nPlayer].assist

Lendas.style.background = players[nPlayer].bg

function nextPlayer() {
    nPlayer = nPlayer + 1
    animatePlayer()
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

        jogos.style.color = players[nPlayer].stat
        gols.style.color = players[nPlayer].stat
        assist.style.color = players[nPlayer].stat


    }, 500)

}

function previouslyPlayer() {
    nPlayer = nPlayer - 1
    animatePlayer()
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

        jogos.style.color = players[nPlayer].stat
        gols.style.color = players[nPlayer].stat
        assist.style.color = players[nPlayer].stat


    }, 500)
}

function changeNav() {
    nav.classList.toggle('active', scrollY > 0)
}

function animateClub() {
    aboutClub.style.transform = "translateX(-1500px)"
    clubStats.style.transform = "translateY(500px)"


    setTimeout(function () {
        aboutClub.style.transform = "translateX(0px)"
        clubStats.style.transform = "translateY(0px)"

    }, 500)
}

function animatePlayer() {
    playerPhoto.style.transform = "translateX(-2000px)"
    overview.style.transform = "translateX(-2000px)"
    desc.style.transform = "translateX(-2000px)"
    stats.style.transform = "translateY(2000px)"

    setTimeout(function () {
        playerPhoto.style.transform = "translateX(0px)"
        overview.style.transform = "translateX(0px)"
        desc.style.transform = "translateX(0px)"
        stats.style.transform = "translateY(0px)"
    }, 500)

}