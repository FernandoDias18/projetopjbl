function validarcontato(){
    var nome = document.getElementById("nome").value.trim();
    var email = document.getElementById("email").value.trim();
    var assunto = document.getElementById("assunto").value.trim();
    var mensagem = document.getElementById("mensagem").value.trim();

    if (nome.length < 3){
        document.getElementById('erronome').innerHTML = `<p>ERRO! Nome inválido</p>`
        document.getElementById("nome").style.border = "solid 1px red"
    }
    if (email == ""){
        document.getElementById('erroemail').innerHTML = `<p>ERRO! E-mail inválido</p>`
        document.getElementById("email").style.border = "solid 1px red"
    }
    if (assunto == ""){
        document.getElementById('erroassunto').innerHTML = `<p>ERRO! Assunto inválido</p>`
        document.getElementById("assunto").style.border = "solid 1px red"
    }
    if (mensagem == ""){
        document.getElementById('erromensagem').innerHTML = `<p>ERRO! Mensagem inválida</p>`
        document.getElementById("mensagem").style.border = "solid 1px red"
    }
    if (nome.length >= 3 && email != "" && assunto != "" && mensagem != ""){
        alert("Mensagem enviada com sucesso!")
        window.location.href = "pag-contato.html"
    }
}