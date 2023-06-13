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

somar.addEventListener("click",function(evento){
  braco.value = parseInt(braco.value) +1
})
subtrair.addEventListener("click", function(evento){
  braco.value = parseInt(braco.value) -1
})