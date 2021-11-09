function mostrarsenha(){
    var senha = document.getElementById("senha")
    var confirmarsenha = document.getElementById("confirmarsenha")
    if(senha.getAttribute("type") == "password") {
        senha.setAttribute("type", "text");
        confirmarsenha.setAttribute("type", "text");
    }else {
        senha.setAttribute("type", "password");
        confirmarsenha.setAttribute("type", "password");
    }
}
function validaraluno(){
    var nome = document.getElementById("nome").value.trim();
    var sobrenome = document.getElementById("sobrenome").value.trim();
    var email= document.getElementById("email").value.trim();
    var senha = document.getElementById("senha").value.trim();
    var confirmarsenha = document.getElementById("confirmarsenha").value.trim();
    var termouso = document.getElementById("termouso");
    document.getElementById("tela-cadastro").style.height = "1020px"
    
    if (nome.length < 3){
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
    if (sobrenome == ""){
        document.getElementById('errosobrenome').innerHTML = `<p>ERRO! Sobrenome inválido</p>`
        document.getElementById("sobrenome").style.border = "solid 1px red"
        document.getElementById("iconerrosobren").style.display = "block"
    }
    else{
        if (sobrenome != ""){
            document.getElementById('errosobrenome').innerHTML = `<p></p>`
            document.getElementById("sobrenome").style.border = "none"
            document.getElementById("iconerrosobren").style.display = "none"
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
    if (senha.length < 5){
        document.getElementById('errosenha').innerHTML = `<p>ERRO! Senha inválida</p>`
        document.getElementById("senha").style.border = "solid 1px red"
        document.getElementById("iconerrosenha").style.display = "block"
    }
    else{
        if (senha.length >= 5){
            document.getElementById('errosenha').innerHTML = `<p></p>`
            document.getElementById("senha").style.border = "none"
            document.getElementById("iconerrosenha").style.display = "none"
        } 
    }
    if (termouso.checked == false){
        document.getElementById("errotermouso").innerHTML = `<p>Aceite os termos de uso para continuar</p>`
    }
    else{
        if (termouso.checked == true){
            document.getElementById("errotermouso").innerHTML  = `<p></p>`
        } 
    }
   if (confirmarsenha != senha){
        document.getElementById('erroconfirmarsenha').innerHTML = `<p>ERRO! Senhas diferentes</p>`
        document.getElementById("confirmarsenha").style.border = "solid 1px red"
        document.getElementById("iconerroconfsenha").style.display = "block"
    }
    else{
        if (confirmarsenha == senha){
            document.getElementById('erroconfirmarsenha').innerHTML = `<p></p>`
            document.getElementById("confirmarsenha").style.border = "none"
            document.getElementById("iconerroconfsenha").style.display = "none"
        } 
    }
    if(nome.length > 3 && sobrenome != "" && email != "" && senha.length >= 5 &&
    confirmarsenha == senha && termouso.checked == true) {
        var alunos = JSON.parse(localStorage.getItem("usuarios") || "[]");
        alunos.push({
            nomealuno: nome,
            sobrenomealuno: sobrenome,
            emailaluno: email,
            senhaaluno: senha
        })
        localStorage.setItem('usuarios', JSON.stringify(alunos))
        alert("CADASTRO REALIZADO COM SUCESSO")
        window.location.href = "login.html";
    }
}
function validarempresa() {
    var nome = document.getElementById("nome").value.trim();
    var cnpj = document.getElementById("cnpj").value.trim();
    var email = document.getElementById("email").value.trim();
    var senha = document.getElementById("senha").value.trim();
    var confirmarsenha = document.getElementById("confirmarsenha").value.trim();
    var termouso = document.getElementById("termouso");
    document.getElementById("tela-empresa").style.height = "1000px"
    
    if (nome == ""){
        document.getElementById('erronome').innerHTML = `<p>ERRO! Nome da empresa inválido</p>`
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
    if (senha.length < 5){
        document.getElementById('errosenha').innerHTML = `<p>ERRO! Senha inválida</p>`
        document.getElementById("senha").style.border = "solid 1px red"
        document.getElementById("iconerrosenha").style.display = "block"
    }
    else{
        if (senha.length >= 5){
            document.getElementById('errosenha').innerHTML = `<p></p>`
            document.getElementById("senha").style.border = "none"
            document.getElementById("iconerrosenha").style.display = "none"
        } 
    }
    if (termouso.checked == false){
        document.getElementById("errotermouso").innerHTML = `<p>Aceite os termos de uso para continuar</p>`
    }    
    else{
        if (termouso.checked == true){
            document.getElementById("errotermouso").innerHTML  = `<p></p>`
        } 
    }
    if (confirmarsenha != senha){
        document.getElementById('erroconfirmarsenha').innerHTML = `<p>ERRO! Senhas diferentes</p>`
        document.getElementById("confirmarsenha").style.border = "solid 1px red"
        document.getElementById("iconerroconfsenha").style.display = "block"
    }
    else{
        if (confirmarsenha == senha){
            document.getElementById('erroconfirmarsenha').innerHTML = `<p></p>`
            document.getElementById("confirmarsenha").style.border = "none"
            document.getElementById("iconerroconfsenha").style.display = "none"
        } 
    }
    if(nome.length > 3 && email != "" &&  cnpj.length == 14 && senha.length >= 5 &&
        confirmarsenha == senha && termouso.checked == true) {
        var empresa = JSON.parse(localStorage.getItem("usuarios") || "[]");
        
        empresa.push({
            nomeempresa: nome,
            cnpj: cnpj,
            emailempresa: email,
            senhaempresa: senha
        })

        localStorage.setItem('usuarios', JSON.stringify(empresa))
        alert("CADASTRO REALIZADO COM SUCESSO")
        window.location.href = "login.html";
    }
    
}
function professor() {
    var nome = document.getElementById("nome").value.trim();
    var sobrenome = document.getElementById("sobrenome").value.trim();
    var email = document.getElementById("email").value.trim();
    var curso = document.getElementById("cursograduacao").value.trim();
    var senha = document.getElementById("senha").value.trim();
    var confirmarsenha = document.getElementById("confirmarsenha").value.trim();
    var termouso = document.getElementById("termouso");
    document.getElementById("cadastro-professor").style.height = "1150px"

    if(nome.length < 3){
        document.getElementById("erronome").innerHTML = `<p>ERRO! Nome inválido</p>`
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
    if (sobrenome == ""){
        document.getElementById("errosobrenome").innerHTML = `<p>ERRO! Sobrenome inválido</p>`
        document.getElementById("sobrenome").style.border = "solid 1px red"
        document.getElementById("iconerrosobren").style.display = "block"
    }
    else{
        if (sobrenome != ""){
            document.getElementById('errosobrenome').innerHTML = `<p></p>`
            document.getElementById("sobrenome").style.border = "none"
            document.getElementById("iconerrosobren").style.display = "none"
        } 
    }
    if (email == ""){
        document.getElementById("erroemail").innerHTML = `<p>ERRO! E-mail inválido</p>`
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
    if (curso == "") {
        document.getElementById("errocursograduacao").innerHTML = `<p>ERRO! Curso inválido</p>`
        document.getElementById("cursograduacao").style.border = "solid 1px red"
        document.getElementById("iconerrograduacao").style.display = "block"
    }
    else{
        if (curso != ""){
            document.getElementById('errocursograduacao').innerHTML = `<p></p>`
            document.getElementById("cursograduacao").style.border = "none"
            document.getElementById("iconerrograduacao").style.display = "none"
        } 
    }
    if (senha.length < 5){
        document.getElementById("errosenha").innerHTML = `<p>ERRO! Senha inválida</p>`
        document.getElementById("senha").style.border = "solid 1px red"
        document.getElementById("iconerrosenha").style.display = "block"
    }
    else{
        if (senha.length >= 5){
            document.getElementById('errosenha').innerHTML = `<p></p>`
            document.getElementById("senha").style.border = "none"
            document.getElementById("iconerrosenha").style.display = "none"
        } 
    }
    if (termouso.checked == false){
        document.getElementById("errotermouso").innerHTML =`<p>Aceite os termos de uso para continuar</p>`
    }
    else{
        if (termouso.checked == true){
            document.getElementById("errotermouso").innerHTML  = `<p></p>`
        } 
    }
    if (confirmarsenha != senha){
        document.getElementById("erroconfirmarsenha").innerHTML = `<p>ERRO! Senhas diferentes</p>`
        document.getElementById("confirmarsenha").style.border = "solid 1px red"
        document.getElementById("iconerroconfsenha").style.display = "block"
    }
    else{
        if (confirmarsenha == senha){
            document.getElementById('erroconfirmarsenha').innerHTML = `<p></p>`
            document.getElementById("confirmarsenha").style.border = "none"
            document.getElementById("iconerroconfsenha").style.display = "none"
        } 
    }
    if (nome.length >= 3 && sobrenome != "" && email != "" && curso != "" &&
        confirmarsenha == senha && termouso.checked == true){

         var professor = JSON.parse(localStorage.getItem("usuarios") || "[]");
        
         professor.push({
            nomeprofessor: nome,
            sobrenoprofessor: sobrenome,
            emailprofessor: email,
            cursoprofessor: curso,
            senhaprofessor: senha
        })

        localStorage.setItem("usuarios", JSON.stringify(professor))
        alert("CADASTRO REALIZADO COM SUCESSO")
        window.location.href = "login.html";
    }
}
function validarlogin() {
    var email = document.getElementById("email").value.trim();
    var senha = document.getElementById("senha").value.trim();
    document.getElementById("tela-login").style.height = "630px"

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
    if (senha.length < 5){
        document.getElementById("errosenha").innerHTML = `<p>ERRO! Senha inválida</p>`
        document.getElementById("senha").style.border = "solid 1px red"
        document.getElementById("iconerrosenha").style.display = "block"
    }
    else{
        if (senha.length >= 5){
            document.getElementById('errosenha').innerHTML = `<p></p>`
            document.getElementById("senha").style.border = "none"
            document.getElementById("iconerrosenha").style.display = "none"
        } 
    }
    if (email != "" && senha != ""){
        var usuario = [];

        var validar = {
            email: '',
            senha: ''

        }

        usuario = JSON.parse(localStorage.getItem("usuarios"))
        var alunoemail = "";
        var empresaemail = ""
        var professoremail = ""
        usuario.forEach((item) => {
        if(email == item.emailaluno && senha == item.senhaaluno){
            validar = {
                email: item.emailaluno,
                senha: item.senhaaluno
            }
            alunoemail = item.emailaluno
            
        }else if(email == item.emailempresa && senha == item.senhaempresa){
            validar = {
                email: item.emailempresa,
                senha: item.senhaempresa
            }
            empresaemail = item.emailempresa
        }else if(email == item.emailprofessor && senha == item.senhaprofessor){
            validar = {
                email: item.emailprofessor,
                senha: item.senhaprofessor
            }
            professoremail = item.emailprofessor
        }
        })
            
        if(email == validar.email && senha == validar.senha){
            if(validar.email == empresaemail){
                window.location.href = "../usuariologado/empresa/paghomeempresa.html";
            }
            else if(validar.email == alunoemail){
                window.location.href = "../usuariologado/aluno/paghomealuno.html";
            }
            else if(validar.email == professoremail){
                window.location.href = "../usuariologado/professor/paghomeprof.html";
            }
        }else{
            document.getElementById("email").style.border = "solid 1px red"
            document.getElementById("iconerroemail").style.display = "block"
            document.getElementById("errosenha").innerHTML = `<p>ERRO! E-mail ou senha inválidos</p>`
            document.getElementById("senha").style.border = "solid 1px red"
            document.getElementById("iconerrosenha").style.display = "block"
        }
    }   

}
function validarsenhanova(){
    var email = document.getElementById("email").value.trim();
    var senha = document.getElementById("senha").value.trim();
    var confirmarsenha = document.getElementById("confirmarsenha").value.trim();
    document.getElementById("tela-recuperarsenha").style.height = "680px"

    if (email == ""){
        document.getElementById("erroemail").innerHTML = `<p>ERRO! E-mail inválido</p>`
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
    if (senha == "" || senha.length < 5){
        document.getElementById("errosenha").innerHTML = `<p>ERRO! Senha inválida</p>`
        document.getElementById("senha").style.border = "solid 1px red"
        document.getElementById("iconerrosenha").style.display = "block"
    }
    else{
        if (senha.length >= 5){
            document.getElementById('errosenha').innerHTML = `<p></p>`
            document.getElementById("senha").style.border = "none"
            document.getElementById("iconerrosenha").style.display = "none"
        } 
    }
    if (confirmarsenha != senha){
        document.getElementById("erroconfirmarsenha").innerHTML = `<p>ERRO! Senhas diferentes</p>`
        document.getElementById("confirmarsenha").style.border = "solid 1px red"
        document.getElementById("iconerroconfsenha").style.display = "block"
    }
    else{
        if (confirmarsenha == senha){
            document.getElementById('erroconfirmarsenha').innerHTML = `<p></p>`
            document.getElementById("confirmarsennha").style.border = "none"
            document.getElementById("iconerroconfsenha").style.display = "none"
        } 
    }
    if (email != "" && senha.length >= 5 && confirmarsenha == senha ){
        alert("SENHA ALTERADA COM SUCESSO")
        window.location.href = "login.html";
    }
}