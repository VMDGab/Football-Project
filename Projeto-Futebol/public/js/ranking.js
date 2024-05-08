const idUsuario = sessionStorage.ID_USUARIO

const time = document.querySelector('#time')
const userPoints = document.querySelector('#point')
const ranking = document.querySelector('#ranking')

let qtdPerguntas = 0

fetch(`/pontuacao/buscarPontuacaoUsuario/${idUsuario}`).then(res => {
    res.json().then(res => {
        userPoints.textContent = `${res[0].pontuacao} pts`
        time.textContent = `${res[0].tempoDecorrido}`
    })
}).catch(function (erro) {
    console.log(erro);
})

fetch(`/pontuacao/buscarRanking/`).then(
    res => {
        res.json().then(res => {
            for (i = 0; i <= res.length; i++) {
                ranking.innerHTML += `
                <div class="player">
                <div class="positionPlayer">
                    <span class="position">${i + 1}°</span>
                    <span class="namePlayer">${res[i].nomeUsuario}</span>
                </div>
                <span class="points">${res[i].pontuacao}</span>
                </div>`
            }
        })
    }).catch(function (erro) {
        console.log(erro);
    })

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
