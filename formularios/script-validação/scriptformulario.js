function validar() {
    var nome = document.getElementById("nome").value.trim();
    var sobrenome = document.getElementById("sobrenome").value.trim();
    var email = document.getElementById("email").value.trim();
    var senha = document.getElementById("senha").value.trim();
    var confirmarsenha = document.getElementById("confirmarsennha").value.trim();
    if (nome.length < 3 || nome == ""){
        document.getElementById('enome').innerHTML = `<p>ERRO! Nome inválido</p>`
        document.getElementById("nome").style.border = "solid 1px red"
    }
    if (sobrenome == ""){
        document.getElementById('esobrenome').innerHTML = `<p>ERRO! Sobrenome inválido</p>`
        document.getElementById("sobrenome").style.border = "solid 1px red"
    }
    if (email == ""){
        document.getElementById('eemail').innerHTML = `<p>ERRO! E-mail inválido</p>`
        document.getElementById("email").style.border = "solid 1px red"
    }
    if (senha == "" || senha.length < 5){
        document.getElementById('esenha').innerHTML = `<p>ERRO! Senha inválida</p>`
        document.getElementById("senha").style.border = "solid 1px red"
    }
    if (confirmarsenha != senha){
        document.getElementById('econfirmarsenha').innerHTML = `<p>ERRO! Senhas diferentes</p>`
        document.getElementById("confirmarsennha").style.border = "solid 1px red"
    }
    document.getElementById("cadastro").style.height = "870px"
}
function validarempresa() {
    var nome = document.getElementById("nome").value.trim();
    var cnpj = document.getElementById("cnpj").value.trim();
    var email = document.getElementById("email").value.trim();
    var senha = document.getElementById("senha").value.trim();
    var confirmarsenha = document.getElementById("confirmarsenha").value;
    if (nome == ""){
        document.getElementById('enome').innerHTML = `<p>ERRO! Nome da empresa inválido</p>`
        document.getElementById("nome").style.border = "solid 1px red"
    }
    if (cnpj == "" || cnpj.length < 14 || cnpj.length > 14){
        document.getElementById('ecnpj').innerHTML = `<p>ERRO! CNPJ inválido</p>`
        document.getElementById("cnpj").style.border = "solid 1px red"
    }
    if (email == ""){
        document.getElementById('eemail').innerHTML = `<p>ERRO! E-mail inválido</p>`
        document.getElementById("email").style.border = "solid 1px red"
    }
    if (senha == "" || senha.length < 5){
        document.getElementById('esenha').innerHTML = `<p>ERRO! Senha inválida</p>`
        document.getElementById("senha").style.border = "solid 1px red"
    }
    if (confirmarsenha != senha){
        document.getElementById('econfirmarsenha').innerHTML = `<p>ERRO! Senhas diferentes</p>`
        document.getElementById("confirmarsennha").style.border = "solid 1px red"
    }
    document.getElementById("cadastro").style.height = "870px"

}