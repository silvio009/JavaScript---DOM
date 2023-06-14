 const roboSJ = document.querySelector("#roboSJ").addEventListener("click", function(){  
    console.log("modelo 2000")
 });

function apresentacao(nome){
    console.log("olá", nome );
}
apresentacao("visitante")




const controle = document.querySelectorAll("[data-controle]");

controle.forEach((elemento) => {
    elemento.addEventListener("click", function(evento){
     manipulaDados(evento.target.dataset.controle , evento.target.parentNode)
     
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