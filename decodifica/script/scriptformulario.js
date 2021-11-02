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
    if (sobrenome == ""){
        document.getElementById('errosobrenome').innerHTML = `<p>ERRO! Sobrenome inválido</p>`
        document.getElementById("sobrenome").style.border = "solid 1px red"
        document.getElementById("iconerrosobren").style.display = "block"
    }
    if (email == ""){
        document.getElementById('erroemail').innerHTML = `<p>ERRO! E-mail inválido</p>`
        document.getElementById("email").style.border = "solid 1px red"
        document.getElementById("iconerroemail").style.display = "block"
    }
    if (senha.length < 5){
        document.getElementById('errosenha').innerHTML = `<p>ERRO! Senha inválida</p>`
        document.getElementById("senha").style.border = "solid 1px red"
        document.getElementById("iconerrosenha").style.display = "block"
    }
    if (termouso.checked == false){
        document.getElementById("errotermouso").innerHTML = `<p>Aceite os termos de uso para continuar</p>`
    }
   if (confirmarsenha != senha){
        document.getElementById('erroconfirmarsenha').innerHTML = `<p>ERRO! Senhas diferentes</p>`
        document.getElementById("confirmarsennha").style.border = "solid 1px red"
        document.getElementById("iconerroconfsenha").style.display = "block"
    }
    if(nome.length > 3 && sobrenome != "" && email != "" && senha.length > 5 &&
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
    if (cnpj == "" || cnpj.length < 14 || cnpj.length > 14){
        document.getElementById('errocnpj').innerHTML = `<p>ERRO! CNPJ inválido</p>`
        document.getElementById("cnpj").style.border = "solid 1px red"
        document.getElementById("iconerrocnpj").style.display = "block"
    }
    if (email == ""){
        document.getElementById('erroemail').innerHTML = `<p>ERRO! E-mail inválido</p>`
        document.getElementById("email").style.border = "solid 1px red"
        document.getElementById("iconerroemail").style.display = "block"
    }
    if (senha == "" || senha.length < 5){
        document.getElementById('errosenha').innerHTML = `<p>ERRO! Senha inválida</p>`
        document.getElementById("senha").style.border = "solid 1px red"
        document.getElementById("iconerrosenha").style.display = "block"
    }
    if (termouso.checked == false){
        document.getElementById("errotermouso").innerHTML = `<p>Aceite os termos de uso para continuar</p>`
    }    
    if (confirmarsenha != senha){
        document.getElementById('erroconfirmarsenha').innerHTML = `<p>ERRO! Senhas diferentes</p>`
        document.getElementById("confirmarsennha").style.border = "solid 1px red"
        document.getElementById("iconerroconfsenha").style.display = "block"
    }
    if(nome.length > 3 && email != "" &&  cnpj == 14 && senha.length > 5 &&
    confirmarsenha == senha && termouso.checked == true) {
        alert("CADASTRO REALIZADO COM SUCESSO")
        window.location.href = "login.html";
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
function validarprofessor() {
    var nome = document.getElementById("nome").value.trim();
    var sobrenome = document.getElementById("sobrenome").value.trim();
    var email = document.getElementById("email").value.trim();
    var curso = document.getElementById("cursograduacao").value.trim();
    var senha = document.getElementById("senha").value.trim();
    var confirmarsenha = document.getElementById("confirmarsenha").value.trim();
    var termouso = document.getElementById("termouso");
    document.getElementById("cadastro-professor").style.height = "1150px"

    if(nome == "" || nome.length < 3){
        document.getElementById("erronome").innerHTML = `<p>ERRO! Nome inválido</p>`
        document.getElementById("nome").style.border = "solid 1px red"
        document.getElementById("iconerronome").style.display = "block"
    }
    if (sobrenome == ""){
        document.getElementById("errosobrenome").innerHTML = `<p>ERRO! Sobrenome inválido</p>`
        document.getElementById("sobrenome").style.border = "solid 1px red"
        document.getElementById("iconerrosobren").style.display = "block"
    }
    if (email == ""){
        document.getElementById("erroemail").innerHTML = `<p>ERRO! E-mail inválido</p>`
        document.getElementById("email").style.border = "solid 1px red"
        document.getElementById("iconerroemail").style.display = "block"
    }
    if (curso == "") {
        document.getElementById("errocursograduacao").innerHTML = `<p>ERRO! Curso inválido</p>`
        document.getElementById("cursograduacao").style.border = "solid 1px red"
        document.getElementById("iconerrograduacao").style.display = "block"
    }
    if (senha == "" || senha.length < 5){
        document.getElementById("errosenha").innerHTML = `<p>ERRO! Senha inválida</p>`
        document.getElementById("senha").style.border = "solid 1px red"
        document.getElementById("iconerrosenha").style.display = "block"
    }
    if (termouso.checked == false){
        document.getElementById("errotermouso").innerHTML =`<p>Aceite os termos de uso para continuar</p>`
    }
    if (confirmarsenha != senha){
        document.getElementById("erroconfirmarsenha").innerHTML = `<p>ERRO! Senhas diferentes</p>`
        document.getElementById("confirmarsenha").style.border = "solid 1px red"
        document.getElementById("iconerroconfsenha").style.display = "block"
    }
    if (nome.length > 3 && sobrenome != "" && email != "" && curso != "" && senha.length > 5 &&
        confirmarsenha == senha && termouso.checked == true){
        var professor = JSON.parse(localStorage.getItem("usuarios") || "[]");
        professor.push({
            nomeprofessor: nome,
            sobrenoprofessor: sobrenome,
            emailprofessor: email,
            cursoprofessor: curso,
            senhaprofessor: senha
        })
        localStorage.setItem('usuarios', JSON.stringify(professor))
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
    if (senha == ""){
        document.getElementById("errosenha").innerHTML = `<p>ERRO! Senha inválida</p>`
        document.getElementById("senha").style.border = "solid 1px red"
        document.getElementById("iconerrosenha").style.display = "block"
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
    if (senha == "" || senha.length < 5){
        document.getElementById("errosenha").innerHTML = `<p>ERRO! Senha inválida</p>`
        document.getElementById("senha").style.border = "solid 1px red"
        document.getElementById("iconerrosenha").style.display = "block"
    }
    if (confirmarsenha != senha){
        document.getElementById("erroconfirmarsenha").innerHTML = `<p>ERRO! Senhas diferentes</p>`
        document.getElementById("confirmarsenha").style.border = "solid 1px red"
        document.getElementById("iconerroconfsenha").style.display = "block"
    }
    if (email != "" && senha.length > 5 && confirmarsenha == senha ){
        alert("SENHA ALTERADA COM SUCESSO")
        window.location.href = "login.html";
    }
}