
function Verificar() {
    const nome = inputNome.value
    const email = inputEmail.value
    const password = inputSenha.value
    const confirm = inputConfirmar.value

    const modal = error
    const successModal = success
    const msgModal = msg

    const close = document.querySelector('#btnClose')
    const login = document.querySelector('#btnLogin')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isEmailValido = emailRegex.test(email);

    console.log(email)
    if (nome == "" || email == "" || password == "" || confirm == "") {
        modal.showModal();
        msgModal.innerHTML = "Preencha todos os campos!"
    } else if (!isEmailValido) {
        modal.showModal();
        msgModal.innerHTML = "É necessário informar um e-mail válido!"
    } else if (password.length < 6) {
        modal.showModal();
        msgModal.innerHTML = "A senha precisa de no mínimo 6 caracteres"
    } else if (password != confirm) {
        modal.showModal();
        msgModal.innerHTML = "As senhas informadas são diferentes!"
    }
    else {
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
                senha: password,
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                successModal.showModal();
                
            } else {
                resposta.text().then(text => {
                    modal.showModal();
                    msgModal.innerHTML = text
                })
                    .catch(function (resposta) {
                        console.log(`#ERRO: ${resposta}`);
                    });

            }
        })


    }
    close.onclick = function () {
        modal.close()
    }
    login.onclick = function () {
        successModal.close()
        window.location.replace('./login.html')
    }
}