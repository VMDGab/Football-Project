const idUsuario = sessionStorage.ID_USUARIO
const nomeUsuario = sessionStorage.NOME_USUARIO
const instrucoes = document.querySelector('#instrucoes')
let welcome = document.querySelector("#welcome")
let notificacao = document.querySelector("#notificacao")

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
            if (res[i].mensagem.indexOf('seguir')) {
                notificacao.innerHTML += `  
            <div class="textWrapper">
            <span class="mensagem">${res[i].mensagem}</span>
            </div>
            <button class="btnNotificacao">Seguir</button>`
            } else {
                notificacao.innerHTML += `  
            <div class="textWrapper">
            <span class="mensagem">${res[i].mensagem}</span>
            </div>
            <button class="btnNotificacao">Jogar</button>`
            }
        }
    })
}).catch(function (erro) {
    console.log(erro);
})