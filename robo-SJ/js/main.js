 const roboSJ = document.querySelector("#roboSJ").addEventListener("click", function(){  
    console.log("modelo 2000")
 });

function apresentacao(nome){
    console.log("olá", nome );
}
apresentacao("visitante")

const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco"); 

const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((elemento) => {
    elemento.addEventListener("click", function(evento){
     manipulaDados(evento.target.textContent)
    })
});

function manipulaDados(operacao){
        if(operacao === "-"){
            braco.value = parseInt(braco.value) -1
        }else{
            braco.value = parseInt(braco.value) +1
        }   
}