function jogarJokenpô(escolhaUsuario){
//pegar os elementos do HTML onde os textos serão Exibidos
let divEscolhas = document.getByElementByld("texto-escolhas");
let divResultado = document.getElementByld("texto-resultado");

//Gerando a escolha do computador usando apenas if e else
let numeroAleatorio = Math.random();
let escolhasComputador = "";

if(numeroAleatorio < 0.33){
  escolhaComputador="pedra";

}else if(numeroAleatorio< 0.66){
    escolhaComputador="papel";
}else{
    escolhaComputador="tesoura";
}

//mostrar na tela o que cada um escolheu

divEscolhas.innerHTML ="Você:" + escolhaUsuario + "| Computador:" + escolhaComputador;

//Logica de Determinação do vencedor
if(escolhaUsuario===escolhaComputador){
    divResultado.innerText="empate!"

}else if(escolhaUsuario==="pedra"&& escolhaComputador==="tesoura"){
   divResultado.innerText=" Jogador Venceu! (pedra amassa a Tesoura)"

}else if(escolhaUsuario==="papel"&& escolhaComputador==="pedra"){
    divResultado.innerText="Jogador Venceu! (papel embrulha pedra)"

}else if(escolhaUsuario==="tesoura"&& escolhaComputador==="papel"){
    divResultado.innerText="Jogador Venceu! (tesoura corta papel)"

}else if (escolhaUsuario==="papel"&& escolhaComputador==="tesoura"){
    divResultado.innerText==="Compuatador Venceu! (tesoura corta papel)"

}else if (escolhaUsuario==="pedra"&& escolhaComputador==="papel"){
    divResultado.innerText==="Computador Venceu!(papel embrulha pedra)"
    
}else if (escolhaUsuario==="tesoura"&& escolhaComputador==="pedra"){
    divResultado.innerText==="Computador Venceu!(pedra amassa tesoura)"
}


}