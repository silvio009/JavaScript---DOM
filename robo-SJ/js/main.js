 const roboSJ = document.querySelector("#roboSJ").addEventListener("click", function(){  
    console.log("modelo 2000")
 });

function apresentacao(nome){
    console.log("olá", nome );
}
apresentacao("visitante")




const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((elemento) => {
    elemento.addEventListener("click", function(evento){
     manipulaDados(evento.target.textContent, evento.target.parentNode)
     
    })
});

function manipulaDados(operacao, controle){
    const peca = controle.querySelector(".controle-contador"); 
    if(operacao === "-"){
            peca.value = parseInt(peca.value) -1
        }else{
            peca.value = parseInt(peca.value) +1
        }   
}