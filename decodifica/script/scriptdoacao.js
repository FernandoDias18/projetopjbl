function validarpagamento(){
    var nome = document.getElementById("nome").value.trim();
    var cpf = document.getElementById("cpf").value.trim();
    var email= document.getElementById("email").value.trim();
    var nomecartao = document.getElementById("nomecartao").value.trim();
    var numerocartao = document.getElementById("numerocartao").value.trim();
    var validade = document.getElementById("validade").value.trim();
    var cvc = document.getElementById("cvc").value.trim();
    var valordoacao= document.getElementById("valordoacao").value.trim();

    
    if (nome.length < 3 ){
        document.getElementById('erronome').innerHTML = `<p>ERRO! Nome inválido</p>`
        document.getElementById("nome").style.border = "solid 1px red"
        document.getElementById("iconerronome").style.display = "block"
    }
    if (cpf == 11){
        document.getElementById('errocpf').innerHTML = `<p>ERRO! CPF inválido</p>`
        document.getElementById("cpf").style.border = "solid 1px red"
        document.getElementById("iconerrocpf").style.display = "block"
    }
    if (email == ""){
        document.getElementById('erroemail').innerHTML = `<p>ERRO! E-mail inválido</p>`
        document.getElementById("email").style.border = "solid 1px red"
        document.getElementById("iconerroemail").style.display = "block"
    }
    if (nomecartao.length < 3 || nomecartao == ""){
        document.getElementById('erronomecartao').innerHTML = `<p>ERRO! Nome do Cartão inválido</p>`
        document.getElementById("nomecartao").style.border = "solid 1px red"
        document.getElementById("iconerronomecartao").style.display = "block"
    }
    if (numerocartao.length < 12 || numerocartao.length > 12){
        document.getElementById('erronumerocartão').innerHTML = `<p>ERRO! Número do Cartão inválido</p>`
        document.getElementById("numerocartao").style.border = "solid 1px red"
        document.getElementById("iconerronumerocartao").style.display = "block"
    }
    if (validade.length < 7 || validade.length > 7){
        document.getElementById('erronumerocartão').innerHTML = `<p>ERRO! Número do Cartão inválido</p>`
        document.getElementById("numerocartao").style.border = "solid 1px red"
        document.getElementById("iconerrovalidade").style.display = "block"
    }
    if (cvc.length < 3 || cvc.length > 3){
        document.getElementById('errocvc').innerHTML = `<p>ERRO! Número do Cartão inválido</p>`
        document.getElementById("cvc").style.border = "solid 1px red"
        document.getElementById("iconerrocvc").style.display = "block"
    }
    if (valordoacao == ""){
        document.getElementById('errovalordoacao').innerHTML = `<p>ERRO! Número do Cartão inválido</p>`
        document.getElementById("valordoacao").style.border = "solid 1px red"
        document.getElementById("iconerrovalordacao").style.display = "block"
    }
    if (nome.length > 3 && cpf == 11 && email != "" && nomecartao > 3 && numerocartao.length > 12 &&
        validade.length == 7 && cvc.length == 3 && valordoacao != ""){
        alert("DOAÇÃO REALIZADA COM SUCESSO")
        window.location.href = "paginadoacoes.html";
    }

}
