function validarcontato(){
    var nome = document.getElementById("nome").value.trim();
    var email = document.getElementById("email").value.trim();
    var assunto = document.getElementById("assunto").value.trim();
    var mensagem = document.getElementById("mensagem").value.trim();

    if (nome.length < 3){
        document.getElementById('erronome').innerHTML = `<p>ERRO! Nome inválido</p>`
        document.getElementById("nome").style.border = "solid 1px red"
    }
    else{
        if (nome.length >= 3){
            document.getElementById('erronome').innerHTML = `<p></p>`
            document.getElementById("nome").style.border = "none"
        } 
    }
    if (email == ""){
        document.getElementById('erroemail').innerHTML = `<p>ERRO! E-mail inválido</p>`
        document.getElementById("email").style.border = "solid 1px red"
    }
    else{
        if (email != ""){
            document.getElementById('erroemail').innerHTML = `<p></p>`
            document.getElementById("email").style.border = "none"
        } 
    }
    if (assunto == ""){
        document.getElementById('erroassunto').innerHTML = `<p>ERRO! Assunto inválido</p>`
        document.getElementById("assunto").style.border = "solid 1px red"
    }
    else{
        if (assunto != ""){
            document.getElementById('erroassunto').innerHTML = `<p></p>`
            document.getElementById("assunto").style.border = "none"
        } 
    }
    if (mensagem == ""){
        document.getElementById('erromensagem').innerHTML = `<p>ERRO! Mensagem inválida</p>`
        document.getElementById("mensagem").style.border = "solid 1px red"
    }
    else{
        if (mensagem != ""){
            document.getElementById('erromensagem').innerHTML = `<p></p>`
            document.getElementById("mensagem").style.border = "none"
        } 
    }
    if (nome.length >= 3 && email != "" && assunto != "" && mensagem != ""){
        alert("Mensagem enviada com sucesso!")
        window.location.href = "pag-contato.html"
    }
}