//alert(" Você ganhou 1000 reais no tigrinho");

//Entrada de dados
//Variáveis servem para armazenar dados temporariamente
var nome = "Cleitinho Rodrigues";  //string
var idade = 22;                   //inteiro
var peso = 80.6;                 //decimal
var altura = 1.55;              //decimal
var salario = 2000.50;         //decimal
var votacao = true;           //booleano 
var documento = true;
var titulo = true;

if(idade >= 16){
    //alert("pode votar");
}

//estrutura condicional
if(idade >=16 && idade <=70 && documento == true && titulo == true){
    //alert("Pode votar!" +nome);
}else{
    //alert("Não pode votar! sua idade é" + idade);
}

if( (idade < 18 && idade > 15) || idade >=70){
    //alert("Seu voto é facultativo!");

}
//Estruturas de Repetição
//Lista - Arrays
//              0        1      2       3
candidatos = ['Augusto','Lula','Flavio','Renan'];

//imprimir
console.log(candidatos[0]);

//Estrutura de repetição
var posicao = 0;
while(posicao < 4 ){
   console.log("candidato: " + candidatos[posicao]);
   posicao = posicao + 1;
}
//  inicio      condição de parada           incrementador
for(contador=0; contador < candidatos.length; contador++){
console.log("testando for:" + candidatos[contador]);
}
 
//Trabalhando com funções
function baixarEstoque(){
    console.log("Abaixou o estoque");
}

function lancarCaixa(){
    console.log("Dinheiro entrando no caixa!");
}
function imprimirComprovante(){
    console.log("Imprimir comprovante");
}

function efetuarVenda(){
    console.log("Fazendo venda...");
    baixarEstoque();
    lancarCaixa();
    imprimirComprovante();
}
//Fazendo a chamada da função - normalmente estaria atrelado à um botão
efetuarVenda();

//Craindo objetos
var pessoa = {nome: "ricardo", idade: 20, altura: 1.75}
console.log(pessoa.nome);
console.log(pessoa.altura);