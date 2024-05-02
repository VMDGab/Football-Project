
function Verificar() {
    const email = inputEmail.value
    const password = inputSenha.value

    const modal = error
    const msgModal = msg

    const close = btnClose

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isEmailValido = emailRegex.test(email);

    if (email == "" || password == "") {
        modal.showModal();
        msgModal.innerHTML = "Preencha todos os campos!"
    } else if (!isEmailValido) {
        modal.showModal();
        msgModal.innerHTML = "É necessário informar um e-mail válido!"
    } else {
        window.location.replace('./game/dashboard.html')
    }

    close.onclick = function () {
        modal.close()
    }


}