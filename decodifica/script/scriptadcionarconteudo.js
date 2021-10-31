function verificarconteudo(){
    var nomeprofessor = document.getElementById("nomeprofessor").value.trim();
    var nomemodulo = document.getElementById("nomemodulo").value.trim();
    var pdf = document.getElementById("arquivopdf");
    var video = document.getElementById("arquivovideo");

    if (nomeprofessor.length < 3){
        document.getElementById('erronomeprof').innerHTML = `<p>ERRO! Nome do Professor inválido</p>`
        document.getElementById("nomeprofessor").style.border = "solid 1px red"
        document.getElementById("iconerronomeprof").style.display = "block"
    }
    if (nomemodulo == ""){
        document.getElementById('erronomemodulo').innerHTML = `<p>ERRO! Nome do Módulo inválido</p>`
        document.getElementById("nomemodulo").style.border = "solid 1px red"
        document.getElementById("iconerronomemodulo").style.display = "block"
    }
    if (nomeprofessor.length >= 3 && nomemodulo != "")
    alert("Conteúdo adicionado com sucesso!")
    window.location.href = "pagcursos.html"
}
function verificarcurso(){
    var nomeprofessor = document.getElementById("nomeprofessor").value.trim();
    var nomecurso = document.getElementById("nomecurso").value.trim();
    var quantidademodulos = document.getElementById("quantidademodulos").value;
    var quantidadehoras = document.getElementById("quantidadehoras").value.trim();
    var descricao = document.getElementById("descricaocurso").value.trim();

    if (nomeprofessor.length < 3){
        document.getElementById('erronomeprof').innerHTML = `<p>ERRO! Nome do Professor inválido</p>`
        document.getElementById("nomeprofessor").style.border = "solid 1px red"
        document.getElementById("iconerronomeprof").style.display = "block"
    }
    if (nomecurso == ""){
        document.getElementById('erronomecurso').innerHTML = `<p>ERRO! Nome do Curso inválido</p>`
        document.getElementById("nomecurso").style.border = "solid 1px red"
        document.getElementById("iconerronomecurso").style.display = "block"
    }
    if (quantidadehoras == ""){
        document.getElementById('erroquantidadehoras').innerHTML = `<p>ERRO! Quantidade de Horas inválida</p>`
        document.getElementById("quantidadehoras").style.border = "solid 1px red"
        document.getElementById("iconerroquantidadehoras").style.display = "block"
    }
    if (quantidademodulos == 0){
        document.getElementById('erroquantidademodulo').innerHTML = `<p>ERRO! Quantidade de Módulos inválida</p>`
        document.getElementById("quantidademodulos").style.border = "solid 1px red"
        document.getElementById("iconerroquantidademodulo").style.display = "block"
    }
    if (descricao == ""){
        document.getElementById('errodescricao').innerHTML = `<p>ERRO! Descrição inválida</p>`
        document.getElementById("descricaocurso").style.border = "solid 1px red"
        document.getElementById("iconerrodescricao").style.display = "block"
    }
    if (nomeprofessor.length >= 3 && nomecurso != "" && quantidadehoras != "" && quantidademodulos > 0 && descricao != "") {
        alert("Curso criado com sucesso!")
        window.location.href = "adicionarcursonovo.html"
    }  
}
function verificarvaga(){
    var nomeempresa = document.getElementById("nomeempresa").value.trim();
    var cargo = document.getElementById("cargo").value.trim();
    var horario = document.getElementById("horariovaga").value;
    var salario = document.getElementById("salario").value.trim();
    var descricao = document.getElementById("descricaovaga").value.trim();

    if (nomeempresa == ""){
        document.getElementById('erronomeempresa').innerHTML = `<p>ERRO! Nome da Empresa inválida</p>`
        document.getElementById("nomeempresa").style.border = "solid 1px red"
        document.getElementById("iconerronomeempresa").style.display = "block"
    }
    if (cargo == ""){
        document.getElementById('errocargo').innerHTML = `<p>ERRO! Cargo inválido</p>`
        document.getElementById("cargo").style.border = "solid 1px red"
        document.getElementById("iconerrocargo").style.display = "block"
    }
    if (horario == ""){
        document.getElementById('errohoraiovaga').innerHTML = `<p>ERRO! Horário inválido</p>`
        document.getElementById("horariovaga").style.border = "solid 1px red"
        document.getElementById("iconerrohorariovaga").style.display = "block"
    }
    if (salario == ""){
        document.getElementById('errosalario').innerHTML = `<p>ERRO! Salário inválido</p>`
        document.getElementById("salario").style.border = "solid 1px red"
        document.getElementById("iconerrosalario").style.display = "block"
    }
    if (descricao == ""){
        document.getElementById('errodescricaovaga').innerHTML = `<p>ERRO! Descrição inválida</p>`
        document.getElementById("descricaovaga").style.border = "solid 1px red"
        document.getElementById("iconerrodescricaovaga").style.display = "block"
    }
    if (nomeempresa != "" && cargo != "" && horario != "" && salario != "" && descricao != "") {
        alert("Vaga publicada com sucesso!")
        window.location.href = "adicionarcursonovo.html"
    }
}