Chart.defaults.color = "#ffffff";
Chart.defaults.font.size = 20;
Chart.defaults.plugins.legend.position = 'right';

const data = {
    datasets: [{
        label: 'Porcentagem de acerto',
        data: [30, 70],
        borderColor: '#292929',
        backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        position: "#right"
    }],
    labels: ['30% de erro', '70% de acerto'],
};

const config = {
    type: 'pie',
    data: data,

};
const pieChart = new Chart(
    document.getElementById('percentage'),
    config,

);

window.addEventListener('load', () => {
    if (sessionStorage.length == 0) {
        location.replace('../login.html')
    }
})
function logout() {
    sessionStorage.clear()
    location.replace('../login.html')
}

const idUsuario = sessionStorage.ID_USUARIO

const time = document.querySelector('#time')
const userPoints = document.querySelector('#point')
const ranking = document.querySelector('#ranking')

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

