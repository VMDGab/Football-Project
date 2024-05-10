const idUsuario = sessionStorage.ID_USUARIO

const time = document.querySelector('#time')
const userPoints = document.querySelector('#point')
const ranking = document.querySelector('#ranking')
const usuario = document.querySelector('#usuario')
const rankingHeader = document.querySelector('#header')
const btnSeguir = document.querySelector('#btnSeguir')


let qtdPerguntas = 0

fetch(`/pontuacao/buscarPontuacaoUsuario/${idUsuario}`).then(res => {
    res.json().then(res => {
        userPoints.textContent = `${res[0].pontuacao} pts`
        time.textContent = `${res[0].tempoDecorrido}`
    })
}).catch(function (erro) {
    console.log(erro);
})

buscarRanking();

 function buscarRanking() {
    let contador = 0;
     fetch(`/seguidor/buscarRankingSeguidor/${idUsuario}`).then(response => {
        response.json().then(response => {
            fetch(`/pontuacao/buscarRanking/`).then(
                res => {
                    console.log(response)
                    res.json().then(res => {
                        for (i = 0; i <= res.length -1; i++) {
                            if (res[i].idUsuario == idUsuario) {
                                ranking.innerHTML += `
                                <div class="player">
                                <div class="positionPlayer">
                                    <span class="position">${i + 1}°</span>
                                    <span class="namePlayer">${res[i].nomeUsuario}</span>
                                </div>
                                <span class="points">${res[i].pontuacao}</span>
                                </div>`
                             
                            }
                            else if (response.length > 0) {
                               if (response[contador] == undefined) {
                                    ranking.innerHTML += `
                            <div class="player">
                            <div class="positionPlayer">
                                <span class="position">${i + 1}°</span>
                                <span class="namePlayer">${res[i].nomeUsuario}</span>
                            </div>
                            <span class="points">${res[i].pontuacao}</span>
                            <button onclick='seguir(this)' id="btnSeguir" value='${res[i].idUsuario}' class="follow">Seguir</button>
                          </div>` 
                        
                                }
                                else if (res[i].idUsuario == response[contador].idUsuario) {
                                    ranking.innerHTML += `
                                        <div class="player">
                                        <div class="positionPlayer">
                                            <span class="position">${i + 1}°</span>
                                            <span class="namePlayer">${res[i].nomeUsuario}</span>
                                        </div>
                                        <span class="points">${res[i].pontuacao}</span>
                                        <button onclick='deixarSeguir(this)' id="btnSeguir" value='${res[i].idUsuario}' class="follow following">Seguindo</button>
                                    </div>`
                                    contador++
                                }else {
                                    ranking.innerHTML += `
                                    <div class="player">
                                    <div class="positionPlayer">
                                        <span class="position">${i + 1}°</span>
                                        <span class="namePlayer">${res[i].nomeUsuario}</span>
                                    </div>
                                    <span class="points">${res[i].pontuacao}</span>
                                    <button onclick='seguir(this)' id="btnSeguir" value='${res[i].idUsuario}' class="follow">Seguir</button>
                                </div>`
                                }
                            }else {
                                ranking.innerHTML += `
                                <div class="player">
                                <div class="positionPlayer">
                                    <span class="position">${i + 1}°</span>
                                    <span class="namePlayer">${res[i].nomeUsuario}</span>
                                </div>
                                <span class="points">${res[i].pontuacao}</span>
                                <button onclick='seguir(this)' id="btnSeguir" value='${res[i].idUsuario}' class="follow">Seguir</button>
                            </div>`
                            }
                        }
                    })

                })
                .catch(function (erro) {
                    console.log(erro);
                })

        }).catch(function (erro) {
            console.log(erro);
        })
    })

}

function seguir(res) {
    res.textContent = "Seguindo"
    res.setAttribute('onclick', 'deixarSeguir(this)')
    res.setAttribute('class', 'follow following')


    fetch(`/seguidor/seguirUsuario/${idUsuario}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            usuarioSeguido: res.value,
        })
    }).catch(function (erro) {
        console.log(erro);
    })
}
function seguindo() {
    rankingHeader.innerHTML = `
    <span class="title">Pessoas seguidas</span>
    <button class="btnFollow" onclick='rankingGeral()'>Geral</button>
    `
    ranking.innerHTML = ''
    fetch(`/seguidor/buscarRankingSeguidor/${idUsuario}`).then(
        res => {
            res.json().then(res => {
                console.log(res)
                for (i = 0; i <= res.length; i++) {
                    console.log(res[i].idUsuario)
                    ranking.innerHTML += `
                        <div class="player">
                        <div class="positionPlayer">
                            <span class="position">${i + 1}°</span>
                            <span class="namePlayer">${res[i].nomeUsuario}</span>
                        </div>
                        <span class="points">${res[i].pontuacao}</span>
                        <button class="follow following" value='${res[i].idUsuario}' onclick='deixarSeguir(this)'>Seguindo</button>
                        </div>`
                }
            })
        }).catch(function (erro) {
            console.log(erro);
        })
}
function deixarSeguir(res) {
    res.textContent = "Seguir"
    res.setAttribute('onclick', 'seguir(this)')
    res.setAttribute('class', 'follow')

    fetch(`/seguidor/deixarSeguirUsuario/${idUsuario}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            usuarioSeguido: res.value,
        })
    }).catch(function (erro) {
        console.log(erro);
    })
}


function rankingGeral() {
    ranking.innerHTML = ''
    rankingHeader.innerHTML = `
    <span class="title">Raking geral</span>
    <button class="btnFollow" onclick="seguindo()">Seguindo</button>
    `
    buscarRanking();
}

fetch(`/pergunta/buscarTodasPergunta/`).then(
    res => {
        res.json().then(res => {
            qtdPerguntas = res.length

            fetch(`/pontuacao/buscarPontuacaoUsuario/${idUsuario}`).then(response => {
                response.json().then(response => {
                    console.log(response[0].acerto)
                    console.log(qtdPerguntas)

                    let porcentagemAcerto = (response[0].acerto / qtdPerguntas) * 100
                    let porcentagemErro = 100 - porcentagemAcerto

                    Chart.defaults.color = "#ffffff";
                    Chart.defaults.font.size = 20;
                    Chart.defaults.plugins.legend.position = 'right';

                    const data = {
                        datasets: [{
                            label: 'Porcentagem de acerto',
                            data: [porcentagemAcerto, porcentagemErro],
                            borderColor: '#292929',
                            backgroundColor: [
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)'
                            ],
                            position: "#right"
                        }],
                        labels: [`${porcentagemAcerto}% de acerto`, `${porcentagemErro}% de erro`],
                    };

                    const config = {
                        type: 'pie',
                        data: data,

                    };
                    const pieChart = new Chart(
                        document.getElementById('percentage'),
                        config,

                    );
                })
            }).catch(function (erro) {
                console.log(erro);
            })


        })
    }).catch(function (erro) {
        console.log(erro);
    })




window.addEventListener('load', () => {
    if (sessionStorage.length == 0) {
        location.replace('../login.html')
    }
})
function logout() {
    sessionStorage.clear()
    location.replace('../login.html')
}
