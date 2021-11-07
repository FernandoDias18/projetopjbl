function validarpagamentoaluno(){
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
    else{
        if (nome.length >= 3){
            document.getElementById('erronome').innerHTML = `<p></p>`
            document.getElementById("nome").style.border = "none"
            document.getElementById("iconerronome").style.display = "none"
        } 
    }
    if (cpf.length != 11){
        document.getElementById('errocpf').innerHTML = `<p>ERRO! CPF inválido</p>`
        document.getElementById("cpf").style.border = "solid 1px red"
        document.getElementById("iconerrocpf").style.display = "block"
    }
    else{
        if (cpf.length == 11){
            document.getElementById('errocpf').innerHTML = `<p></p>`
            document.getElementById("cpf").style.border = "none"
            document.getElementById("iconerrocpf").style.display = "none"
        } 
    }
    if (email == ""){
        document.getElementById('erroemail').innerHTML = `<p>ERRO! E-mail inválido</p>`
        document.getElementById("email").style.border = "solid 1px red"
        document.getElementById("iconerroemail").style.display = "block"
    }
    else{
        if (email != ""){
            document.getElementById('erroemail').innerHTML = `<p></p>`
            document.getElementById("email").style.border = "none"
            document.getElementById("iconerroemail").style.display = "none"
        } 
    }
    if (nomecartao.length < 3){
        document.getElementById('erronomecartao').innerHTML = `<p>ERRO! Nome do Cartão inválido</p>`
        document.getElementById("nomecartao").style.border = "solid 1px red"
        document.getElementById("iconerronomecartao").style.display = "block"
    }
    else{
        if (nomecartao.length >= 3){
            document.getElementById('erronomecartao').innerHTML = `<p></p>`
            document.getElementById("nomecartao").style.border = "none"
            document.getElementById("iconerronomecartao").style.display = "none"
        } 
    }
    if (numerocartao.length != 12){
        document.getElementById('erronumerocartao').innerHTML = `<p>ERRO! Número do Cartão inválido</p>`
        document.getElementById("numerocartao").style.border = "solid 1px red"
        document.getElementById("iconerronumerocartao").style.display = "block"
    }
    else{
        if (numerocartao.length == 12){
            document.getElementById('erronumerocartao').innerHTML = `<p></p>`
            document.getElementById("numerocartao").style.border = "none"
            document.getElementById("iconerronumerocartao").style.display = "none"
        } 
    }
    if (validade.length != 7){
        document.getElementById('errovalidade').innerHTML = `<p>ERRO! Validade inválida</p>`
        document.getElementById("validade").style.border = "solid 1px red"
        document.getElementById("iconerrovalidade").style.display = "block"
    }
    else{
        if (validade.length == 7){
            document.getElementById('errovalidade').innerHTML = `<p></p>`
            document.getElementById("validade").style.border = "none"
            document.getElementById("iconerrovalidade").style.display = "none"
        } 
    }
    if (cvc.length != 3){
        document.getElementById('errocvc').innerHTML = `<p>ERRO! Número do CVC inválido</p>`
        document.getElementById("cvc").style.border = "solid 1px red"
        document.getElementById("iconerrocvc").style.display = "block"
    }
    else{
        if (cvc.length == 3){
            document.getElementById('errocvc').innerHTML = `<p></p>`
            document.getElementById("cvc").style.border = "none"
            document.getElementById("iconerrocvc").style.display = "none"
        } 
    }
    if (valordoacao == ""){
        document.getElementById('errovalordoacao').innerHTML = `<p>ERRO! Valor da doação inválido</p>`
        document.getElementById("valordoacao").style.border = "solid 1px red"
        document.getElementById("iconerrovalordacao").style.display = "block"
    }
    else{
        if (valordoacao != ""){
            document.getElementById('errovalordoacao').innerHTML = `<p></p>`
            document.getElementById("valordoacao").style.border = "none"
            document.getElementById("iconerrovalordacao").style.display = "none"
        } 
    }
    if (nome.length >= 3 && cpf.length== 11 && email != "" && nomecartao.length >= 3 && numerocartao.length == 12 &&
        validade.length == 7 && cvc.length == 3 && valordoacao != ""){
        alert("DOAÇÃO REALIZADA COM SUCESSO")
        window.location.href = "paginadoacoes.html"
    }

}
function validarpagamentoempresa(){
    var nome = document.getElementById("nome").value.trim();
    var cnpj = document.getElementById("cnpj").value.trim();
    var email= document.getElementById("email").value.trim();
    var nomecartao = document.getElementById("nomecartao").value.trim();
    var numerocartao = document.getElementById("numerocartao").value.trim();
    var validade = document.getElementById("validade").value.trim();
    var cvc = document.getElementById("cvc").value.trim();
    var valordoacao= document.getElementById("valordoacao").value.trim();

    
    if (nome == ""){
        document.getElementById('erronome').innerHTML = `<p>ERRO! Nome inválido</p>`
        document.getElementById("nome").style.border = "solid 1px red"
        document.getElementById("iconerronome").style.display = "block"
    }
    else{
        if (nome != ""){
            document.getElementById('erronome').innerHTML = `<p></p>`
            document.getElementById("nome").style.border = "none"
            document.getElementById("iconerronome").style.display = "none"
        } 
    }
    if (cnpj.length != 14){
        document.getElementById('errocnpj').innerHTML = `<p>ERRO! CNPJ inválido</p>`
        document.getElementById("cnpj").style.border = "solid 1px red"
        document.getElementById("iconerrocnpj").style.display = "block"
    }
    else{
        if (cnpj.length == 14){
            document.getElementById('errocnpj').innerHTML = `<p></p>`
            document.getElementById("cnpj").style.border = "none"
            document.getElementById("iconerrocnpj").style.display = "none"
        } 
    }
    if (email == ""){
        document.getElementById('erroemail').innerHTML = `<p>ERRO! E-mail inválido</p>`
        document.getElementById("email").style.border = "solid 1px red"
        document.getElementById("iconerroemail").style.display = "block"
    }
    else{
        if (email != ""){
            document.getElementById('erroemail').innerHTML = `<p></p>`
            document.getElementById("email").style.border = "none"
            document.getElementById("iconerroemail").style.display = "none"
        } 
    }
    if (nomecartao.length < 3){
        document.getElementById('erronomecartao').innerHTML = `<p>ERRO! Nome do Cartão inválido</p>`
        document.getElementById("nomecartao").style.border = "solid 1px red"
        document.getElementById("iconerronomecartao").style.display = "block"
    }
    else{
        if (nomecartao.length >= 3){
            document.getElementById('erronomecartao').innerHTML = `<p></p>`
            document.getElementById("nomecartao").style.border = "none"
            document.getElementById("iconerronomecartao").style.display = "none"
        } 
    }
    if (numerocartao.length != 12){
        document.getElementById('erronumerocartao').innerHTML = `<p>ERRO! Número do Cartão inválido</p>`
        document.getElementById("numerocartao").style.border = "solid 1px red"
        document.getElementById("iconerronumerocartao").style.display = "block"
    }
    else{
        if (numerocartao.length == 12){
            document.getElementById('erronumerocartao').innerHTML = `<p></p>`
            document.getElementById("numerocartao").style.border = "none"
            document.getElementById("iconerronumerocartao").style.display = "none"
        } 
    }
    if (validade.length != 7){
        document.getElementById('errovalidade').innerHTML = `<p>ERRO! Validade inválida</p>`
        document.getElementById("validade").style.border = "solid 1px red"
        document.getElementById("iconerrovalidade").style.display = "block"
    }
    else{
        if (validade.length == 7){
            document.getElementById('errovalidade').innerHTML = `<p></p>`
            document.getElementById("validade").style.border = "none"
            document.getElementById("iconerrovalidade").style.display = "none"
        } 
    }
    if (cvc.length != 3){
        document.getElementById('errocvc').innerHTML = `<p>ERRO! Número do CVC inválido</p>`
        document.getElementById("cvc").style.border = "solid 1px red"
        document.getElementById("iconerrocvc").style.display = "block"
    }
    else{
        if (cvc.length == 3){
            document.getElementById('errocvc').innerHTML = `<p></p>`
            document.getElementById("cvc").style.border = "none"
            document.getElementById("iconerrocvc").style.display = "none"
        } 
    }
    if (valordoacao == ""){
        document.getElementById('errovalordoacao').innerHTML = `<p>ERRO! Valor da doação inválido</p>`
        document.getElementById("valordoacao").style.border = "solid 1px red"
        document.getElementById("iconerrovalordacao").style.display = "block"
    }
    else{
        if (valordoacao != ""){
            document.getElementById('errovalordoacao').innerHTML = `<p></p>`
            document.getElementById("valordoacao").style.border = "none"
            document.getElementById("iconerrovalordacao").style.display = "none"
        } 
    }
    if (nome != "" && cnpj.length == 14 && email != "" && nomecartao.length >= 3 && numerocartao.length == 12 &&
        validade.length == 7 && cvc.length == 3 && valordoacao != ""){
        alert("DOAÇÃO REALIZADA COM SUCESSO")
        window.location.href = "paginadoacoes.html";
    }

}
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
    else{
        if (nome.length >= 3){
            document.getElementById('erronome').innerHTML = `<p></p>`
            document.getElementById("nome").style.border = "none"
            document.getElementById("iconerronome").style.display = "none"
        } 
    }
    if (cpf.length != 11){
        document.getElementById('errocpf').innerHTML = `<p>ERRO! CPF inválido</p>`
        document.getElementById("cpf").style.border = "solid 1px red"
        document.getElementById("iconerrocpf").style.display = "block"
    }
    else{
        if (cpf.length == 11){
            document.getElementById('errocpf').innerHTML = `<p></p>`
            document.getElementById("cpf").style.border = "none"
            document.getElementById("iconerrocpf").style.display = "none"
        } 
    }
    if (email == ""){
        document.getElementById('erroemail').innerHTML = `<p>ERRO! E-mail inválido</p>`
        document.getElementById("email").style.border = "solid 1px red"
        document.getElementById("iconerroemail").style.display = "block"
    }
    else{
        if (email != ""){
            document.getElementById('erroemail').innerHTML = `<p></p>`
            document.getElementById("email").style.border = "none"
            document.getElementById("iconerroemail").style.display = "none"
        } 
    }
    if (nomecartao.length < 3){
        document.getElementById('erronomecartao').innerHTML = `<p>ERRO! Nome do Cartão inválido</p>`
        document.getElementById("nomecartao").style.border = "solid 1px red"
        document.getElementById("iconerronomecartao").style.display = "block"
    }
    else{
        if (nomecartao.length >= 3){
            document.getElementById('erronomecartao').innerHTML = `<p></p>`
            document.getElementById("nomecartao").style.border = "none"
            document.getElementById("iconerronomecartao").style.display = "none"
        } 
    }
    if (numerocartao.length != 12){
        document.getElementById('erronumerocartao').innerHTML = `<p>ERRO! Número do Cartão inválido</p>`
        document.getElementById("numerocartao").style.border = "solid 1px red"
        document.getElementById("iconerronumerocartao").style.display = "block"
    }
    else{
        if (numerocartao.length == 12){
            document.getElementById('erronumerocartao').innerHTML = `<p></p>`
            document.getElementById("numerocartao").style.border = "none"
            document.getElementById("iconerronumerocartao").style.display = "none"
        } 
    }
    if (validade.length != 7){
        document.getElementById('errovalidade').innerHTML = `<p>ERRO! Validade inválida</p>`
        document.getElementById("validade").style.border = "solid 1px red"
        document.getElementById("iconerrovalidade").style.display = "block"
    }
    else{
        if (validade.length == 7){
            document.getElementById('errovalidade').innerHTML = `<p></p>`
            document.getElementById("validade").style.border = "none"
            document.getElementById("iconerrovalidade").style.display = "none"
        } 
    }
    if (cvc.length != 3){
        document.getElementById('errocvc').innerHTML = `<p>ERRO! Número do CVC inválido</p>`
        document.getElementById("cvc").style.border = "solid 1px red"
        document.getElementById("iconerrocvc").style.display = "block"
    }
    else{
        if (cvc.length == 3){
            document.getElementById('errocvc').innerHTML = `<p></p>`
            document.getElementById("cvc").style.border = "none"
            document.getElementById("iconerrocvc").style.display = "none"
        } 
    }
    if (valordoacao == ""){
        document.getElementById('errovalordoacao').innerHTML = `<p>ERRO! Valor da doação inválido</p>`
        document.getElementById("valordoacao").style.border = "solid 1px red"
        document.getElementById("iconerrovalordacao").style.display = "block"
    }
    else{
        if (valordoacao != ""){
            document.getElementById('errovalordoacao').innerHTML = `<p></p>`
            document.getElementById("valordoacao").style.border = "none"
            document.getElementById("iconerrovalordacao").style.display = "none"
        } 
    }
    if (nome.length >= 3 && cpf.length == 11 && email != "" && nomecartao.length >= 3 && numerocartao.length == 12 &&
        validade.length == 7 && cvc.length == 3 && valordoacao != ""){
        alert("DOAÇÃO REALIZADA COM SUCESSO")
        window.location.href = "paginadoacoes.html";
    }

}