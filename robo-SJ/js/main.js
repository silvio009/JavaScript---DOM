 const roboSJ = document.querySelector("#roboSJ").addEventListener("click", function(){  
    console.log("modelo 2000")
 });

function apresentacao(nome){
    console.log("olá", nome );
}
apresentacao("visitante")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]")




controle.forEach((elemento) => {
    elemento.addEventListener("click", function(evento){
     manipulaDados(evento.target.dataset.controle , evento.target.parentNode)
     atualizaEstatiticas(evento.target.dataset.peca)
    })
});

function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]"); 
    if(operacao === "-"){
            peca.value = parseInt(peca.value) -1
        }else{
            peca.value = parseInt(peca.value) +1
        }   
}
 function atualizaEstatiticas(peca){

   estatisticas.forEach((elemento)=>{
         elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
   })
 }