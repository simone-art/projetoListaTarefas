const containerPrincipal = document.getElementById("container");
const form = document.getElementById("form");



// Adicionar texto no campo adicioneTarefas 
const adicioneTexto = document.getElementById("adicioneTarefa");

// adicionar click no botao ADD 
const botaoRoxo = document.getElementById("btn-roxa");
const tabela = document.getElementById("Tabela");
botaoRoxo.addEventListener("click", function(evento){
    evento.preventDefault();
    if (adicioneTexto.value.trim()== ""){
        let valorMensagem = text.value;
        adicioneTexto.getAttribute("placeholder","Digite tarefa!");
    } else
        const tabelaFin = document.createElement("li");
    tabelaFin.textContent = adicioneTexto.value;
    console.log ("clickou");
    tabela.appendChild(tabelaFin);
    form.reset();
    }

//     if (document.getElementById ("btn-roxa").innerHTML = "desaparece input") {}
    
})

// Aparecer o texto no campo Tarefa 1 (criar tabela)

//Dar check na tarefa e tambén excluí-las

// Validar campo de texto para nao incluir texto vacío


// Limpar o campo de texto depoís que incluir texto na lista






// const tabla = document.getElementById("Tarefas");
// let tarefas = document.createElement("tr");
// let mensagemTarefa = texto.value;
// tarefas.textContent = mensagemTarefa;
