
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


    console.log(email)
    if(nome == "" || email == "" || password == "" || confirm == ""){
        modal.showModal();
        msgModal.innerHTML = "Preencha todos os campos!"
    } else if(email.indexOf("@") == -1 || email.indexOf(".") == -1 ){
        modal.showModal();
        msgModal.innerHTML = "É necessário informar um e-mail válido!"
    }else if(password != confirm){
        modal.showModal();
        msgModal.innerHTML = "As senhas informadas são diferentes!"
    } else{
        successModal.showModal();
    }

    close.onclick = function(){
        modal.close()
    }
    login.onclick = function(){
        successModal.close()
    }

}