const containerPrincipal = document.getElementById("container");
const form = document.getElementById("form");
const adicioneTexto = document.getElementById("adicioneTarefa");
const botaoRoxo = document.getElementById("btn-roxa");
const tabela = document.getElementById("Tabela");
const botaoCheck = document.getElementById("btn-checar");

form.addEventListener("click", function(evento){
    evento.preventDefault();
    if (adicioneTexto.value.trim() == ""){
        adicioneTexto.getAttribute("placeholder","Por favor, digite a sua tarefa:");
        
    } else {
        const tabelaFin = document.createElement("p");
        tabelaFin.classList.add("Tabela");
        tabelaFin.textContent = adicioneTexto.value;
        tabela.appendChild(tabelaFin);
        form.reset();
        
        let buttonFin = document.createElement("span");
        buttonFin.textContent = "X";
        tabelaFin.appendChild(buttonFin);
        
        buttonFin.addEventListener("click", function (evento){
            if (buttonFin.parentNode) {
                tabela.removeChild(tabelaFin);
            }
        })
        tabelaFin.addEventListener("click", function(){
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
    }
    const botaoCheck = document.getElementById("btn-checar");
    botaoCheck.addEventListener("click", function (){
        if (tabela.classList.add("tarefas-completo"));
    })         
})
