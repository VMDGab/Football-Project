
function Verificar(){
    const nome = inputNome.value
    const email = inputEmail.value
    const password = inputSenha.value
    const confirm = inputConfirmar.value
    
    const modal = error
    const successModal = success
    const msgModal = msg
    
    const close = btnClose
    const login = btnLogin

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isEmailValido = emailRegex.test(email);

    console.log(email)
    if(nome == "" || email == "" || password == "" || confirm == ""){
        modal.showModal();
        msgModal.innerHTML = "Preencha todos os campos!"
    } else if(!isEmailValido){
        modal.showModal();
        msgModal.innerHTML = "É necessário informar um e-mail válido!"
    }else if(password.length < 6){
        modal.showModal();
        msgModal.innerHTML = "A senha precisa de no mínimo 6 caracteres"
    }else if(password != confirm){
        modal.showModal();
        msgModal.innerHTML = "As senhas informadas são diferentes!"
    }
    else{
        successModal.showModal();
    }

    close.onclick = function(){
        modal.close()
    }
    login.onclick = function(){
        successModal.close()
        window.location.replace('./login.html')
    }

}