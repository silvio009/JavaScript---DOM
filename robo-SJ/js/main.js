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

const controle = document.querySelectoraAll(".controle-ajuste");

somar.addEventListener("click",function(evento){
    manipulaDados("somar")
})
subtrair.addEventListener("click", function(evento){
    manipulaDados("subtrair")
})

function manipulaDados(operacao){
        if(operacao === "subtrair"){
            braco.value = parseInt(braco.value) -1
        }else{
            braco.value = parseInt(braco.value) +1
        }

    
    
}