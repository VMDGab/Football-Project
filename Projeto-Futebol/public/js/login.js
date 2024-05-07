
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
        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                senha: password
            })
        }).then(function (resposta) {
            if (resposta.ok) {
              resposta.json().then(json => {
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nomeUsuario;
                    sessionStorage.ID_USUARIO = json.idUsuario;
                               
                    setTimeout(function () {
                        window.location.replace('../dashboard/home.html')
                    }, 1000); 

                });

            } else {
                    resposta.text().then(text => {
                        modal.showModal();
                        msgModal.innerHTML = text;
                  });
            }

        }).catch(function (erro) {
            console.log(erro);
        })
      }
    close.onclick = function () {
        modal.close()
    }
}