const idUsuario = sessionStorage.ID_USUARIO
const nomeUsuario = sessionStorage.NOME_USUARIO
const instrucoes = document.querySelector('#instrucoes')
let welcome = document.querySelector("#welcome")
let notificacao = document.querySelector("#notificacao")
const btnSeguir = document.querySelector('#btnSeguir')

window.addEventListener('load', () => {
    if (sessionStorage.length == 0) {
        location.replace('../login.html')
    }
})

function openModal() {
    instrucoes.showModal()
}
function closeModal() {
    instrucoes.close()
}
function logout() {
    sessionStorage.clear()
    location.replace('../login.html')
}

welcome.textContent = `Bem Vindo, ${nomeUsuario}`


fetch(`/notificacao/buscarNotificacao/${idUsuario}`).then(res => {
    res.json().then(res => {
        console.log(res)
        for (i = 0; i <= res.length; i++) {
            if (res[i].mensagem.indexOf('seguir')!= -1) {
                notificacao.innerHTML += ` 
                <div class="notificacao">
            <div class="textWrapper">
            <span class="mensagem">${res[i].mensagem}</span>
            </div>
            <button class="btnNotificacao" value='${res[i].fkUsuario}' onclick='seguir(this)'>Seguir</button>
            </div>`
            } else {
                notificacao.innerHTML += `  
                <div class="notificacao">
            <div class="textWrapper">
            <span class="mensagem">${res[i].mensagem}</span>
            </div>
            <button class="btnNotificacao" onclick="jogar(this)">Jogar</button>
            </div>
            `
            }
        }
    })
}).catch(function (erro) {
    console.log(erro);
})

function jogar(){
    location.replace('/dashboard/game.html')
}
function seguir(res){
    res.textContent = "Seguindo"
   
    res.setAttribute('onclick', 'deixarSeguir(this)')
    res.setAttribute('class', 'btnNotificacao following')


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

function deixarSeguir(res) {
    res.textContent = "Seguir"
    res.setAttribute('onclick', 'seguir(this)')
    res.setAttribute('class', 'btnNotificacao')

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