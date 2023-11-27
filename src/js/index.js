function validarForm() {
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const telefoneInput = document.getElementById("telefone");
    const mensagemInput = document.getElementById("mensagem");
    const nomeError = document.getElementById("nome-error");
    const emailError = document.getElementById("email-error");
    const telefoneError = document.getElementById("telefone-error");
    const mensagemError = document.getElementById("mensagem-error");

    nomeError.textContent = "";
    emailError.textContent = "";
    telefoneError.textContent = "";
    mensagemError.textContent = ";"

    if (nomeInput.value === "") {
        nomeInput.style.border = "1px solid red";
        nomeError.textContent = "Campo obrigatório";
        nomeError.style.display = "block";
    } else {
        nomeInput.style.border = "1px solid green";
    }

    if (emailInput.value === "") {
        emailInput.style.border = "1px solid red";
        emailError.textContent = "Campo obrigatório";
        emailError.style.display = "block";
    } else {
        emailInput.style.border = "1px solid green";
    }

    if (telefoneInput.value === "") {
        telefoneInput.style.border = "1px solid red";
        telefoneError.textContent = "Campo obrigatório";
        telefoneError.style.display = "block";
    } else {
        telefoneInput.style.border = "1px solid green";
    }

    if (mensagemInput.value === "") {
        mensagemInput.style.border = "1px solid red";
        mensagemError.textContent = "Campo obrigatório";
        mensagemError.style.display = "block";
    } else {
        mensagemInput.style.border = "1px solid green";
    }
}