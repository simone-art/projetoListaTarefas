
const livros = {
    1: {
        "titulo": "Javascript Eloquente",
        "quemEscreveu": "Marijn Haverbeke",
        "link": "https://github.com/braziljs/eloquente-javascript"
    },
    2: {
        "titulo": "Você não sabe JS",
        "quemEscreveu": "Kyle Simpson",
        "link": "https://github.com/cezaraugusto/You-Dont-Know-JS"
    },
    3: {
        "titulo": "Calibã e a Bruxa: mulheres, corpo e acumulação primitiva",
        "quemEscreveu": "Silvia Federici",
        "link": "http://coletivosycorax.org/wp-content/uploads/2019/09/CALIBA_E_A_BRUXA_WEB-1.pdf"
    }
}

const livrosCatalogo = document.getElementById ("lista-do-catalogo")


 for  (let propiedade in livros) {
    // livros [propiedade]
    let livro = document.createElement ("h2");
    livro.textContent = livros[propiedade]["titulo"];
    livrosCatalogo.appendChild (livro);
    livro.classList.add ("livro__titulo");
    

    let nomeEscritor = document.createElement ("p");
    nomeEscritor.textContent= livros [propiedade] ["quemEscreveu"];
    livrosCatalogo.appendChild (nomeEscritor);


    let linksLivros = document.createElement ("a");
    livrosCatalogo.appendChild (linksLivros);
    linksLivros.setAttribute ("href", livros[propiedade]["link"]);
    linksLivros.setAttribute ("target", "_blank");
    linksLivros.textContent = "Leia aquí";
    // livrosCatalogo.appendChild (linksLivros);
    livro.classList.add ("livro__link");

    // linksLivros.textContent = livros [propiedade] ["link"];
    

    let botones = document.createElement ("button");
    botones.textContent = "Marcar como lido";
    livrosCatalogo.appendChild (botones);
    botones.classList.add ("botao-lido");


    botones.addEventListener ("click", function () {
        if (livro.classList.contains ("livro__titulo--lido") ) {
            livro.classList.remove ("ivro__titulo--lido");
            botones.textContent = "Marcar como lido";
            botones.classList.remove ("botao-vermelho");  
        } else {
        livro.classList.contains ("livro__titulo--lido") 
        botones.textContent = "Marcar como nao lido";
        botones.classList.add ("botao-vermelho");  
        };
    });
}

    // botones.addEventListener ("click", function () {
    //     if (livro.classList.contains ("livro__titulo--lido") ) {
    //         livro.classList.remove ("livro__titulo--lido");
    //     } else {
    //         livro.classList.add ("livro__titulo--lido");
    //     };
       
    // });

    // botones.addEventListener ("click", function () {
    //     livro.classList.add ("livro__titulo--lido")
    // })

    // let botonNoLei = document.createElement ("button");
    // botonNoLei.textContent = "Nao li";
    // livrosCatalogo.appendChild (botonNoLei);
    // botonNoLei.classList.add ("botao-desfazer");

    // botonNoLei.addEventListener ("click", function () {
    //     livro.classList.remove ("livro__titulo--lido")
    // })



// NO ES NECESARIO DEFINIR UNA VARIABLE POR CADA LIBRO. 
//PARA ESO, USAS EL FOR LET PROPIEDADE IN OBJETO PARA 
//QUE EL MISMO PROCESO SE REPITA PARA CADA ELEMENTO.
//


//     let livro2 = document.createElement ("p");
//     livro2.textContent = livros[propiedade]["titulo"];
//     let nomeEscritor2 = document.createElement ("h2");
//     nomeEscritor2.textContent= livros [propiedade] ["quemEscreveu"];
//     let linksLivros2 = document.createElement ("a");
//     linksLivros2.textContent = livros [propiedade] ["link"];
//     linksLivros2.setAttribute = ("href", livros[propiedade] ["link"]);
//     livrosCatalogo.appendChild (livro2);
//     livrosCatalogo.appendChild (nomeEscritor2);
//     livrosCatalogo.appendChild (linksLivros2);
//     livro2.classList.add ("livro2");


//     let livro3 = document.createElement ("p");
//     livro3.textContent = livros[propiedade]["titulo"];
//     let nomeEscritor3 = document.createElement ("h2");
//     nomeEscritor3.textContent= livros [propiedade] ["quemEscreveu"];
//     let linksLivros3 = document.createElement ("a");
//     linksLivros3.textContent = livros [propiedade] ["link"];
//     linksLivros3.setAttribute = ("href", livros[propiedade] ["link"]);
//     livrosCatalogo.appendChild (livro3);
//     livrosCatalogo.appendChild (nomeEscritor3);
//     livrosCatalogo.appendChild (linksLivros3);
//     livro3.classList.add ("livro3");

// }

// let livro1 = document.createElement (li);
// livro1.textContent = (livros.titulo);
// let nomeEscritor = document.createElement (p);
// nomeEscritor.textContent= ("Marijn Haverbeke");
// let linksLivros = document.createElement ("a");
// linksLivros.textContent = ("https://github.com/braziljs/eloquente-java");


// livrosCatalogo.appendChild (livro1);
// livro1.classlist.add ("livro1");

// let nomeEscritor = document.create (p);
// nomeEscritor.textContent= ("Marijn Haverbeke");
// livrosCatalogo.appendChild (nomeEscritor);




// const meuSite = document.createElement ("a")
// meuSite.textContent = "acessar meu site";
// meuSite.setAttribute = ("href", objeto.meuSite);
// meuSite.getAttribute = ("target", "_blank");
// descricaoFinal.appendChild (meuSite);