const containerPrincipal = document.getElementById("container");
const form = document.getElementById("form");
const adicioneTexto = document.getElementById("adicioneTarefa");
const etiqueta = document.getElementById("inputEtiqueta");
const botaoRoxo = document.getElementById("btn-roxa");
const tabela = document.getElementById("Tabela");
const botaoCheck = document.getElementById("btn-checar");

form.addEventListener("click", function(evento){
    evento.preventDefault();
    if (adicioneTexto.value.trim() == ""){
        adicioneTexto.getAttribute("placeholder","Por favor, digite a sua tarefa:");

    }   
    // } else if (etiqueta.value.trim() == ""){};    
    else {
        const tabelaFin = document.createElement("p");
        tabelaFin.classList.add("Tabela");
        tabelaFin.textContent = adicioneTexto.value;
        tabela.appendChild(tabelaFin);
        tabelaFin.setAttribute("contentEditable", true);
        form.reset();
        
        tabelaFin.addEventListener("click", function(){
            tabelaFin.getElementById.contains("adicioneTarefa");
            tabelaFin.getElementById.remove("adicioneTarefa");
        })
        
        let buttonFin = document.createElement("button");
        buttonFin.textContent = "X";
        tabelaFin.appendChild(buttonFin);
        
        buttonFin.addEventListener("dblclick", function (evento){
            if (buttonFin.parentNode) {
                tabela.removeChild(tabelaFin);
            }
        })
        
        tabelaFin.addEventListener("dblclick", function(){
            console.log(tabelaFin.classList)
            if (tabelaFin.classList.contains("tarefas-completo")){
                tabelaFin.classList.remove("tarefas-completo");
            }else{
                tabelaFin.classList.add("tarefas-completo");
                }
        })

        tabela.setAttribute("draggable", true);
        tabelaFin.setAttribute("draggable", true);
        buttonFin.setAttribute("draggable", true);

        let divDrag

        tabela.addEventListener("dragstart", function (ev) {
            divDrag = ev.target.closest(".Tabela");
        })

        tabelaFin.addEventListener("dragover", function (ev) {
            ev.preventDefault();
            const posicao = ev.target.closest(".Tabela");
            this.parentNode.insertBefore(divDrag, posicao);

        })

        tabelaFin.addEventListener("dragend", function () {
            divDrag = null;
        })
    
    const botaoCheck = document.getElementById("btn-checar");
    botaoCheck.addEventListener("click", function (){
        (tabela.classList.add("tarefas-completo"));
    })  
    
    const botaoRemover = document.getElementById("btn-remover");
    botaoRemover.addEventListener("click", function (){
        if (Tabela.parentNode) {
            tabela.parentNode.removeChild(Tabela);
        }
    }) 

    const botaoRemoverTarefas = document.getElementById("btn-remover-tarefas");
    botaoRemoverTarefas.addEventListener("click", function (){
        if (tabelaFin.classList.contains("tarefas-completo")) {
            tabelaFin.remove();
        }
    }) 
} 
})
