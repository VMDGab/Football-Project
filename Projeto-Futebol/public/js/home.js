const instrucoes = document.querySelector('#Instrucoes')

window.addEventListener('load', () => {
    if(sessionStorage.length == 0){
        location.replace('../login.html')
    }
})

function openModal(){
    instrucoes.showModal()
}
function closeModal(){
    instrucoes.close()
}
function logout(){
    sessionStorage.clear()
    location.replace('../login.html')
    }