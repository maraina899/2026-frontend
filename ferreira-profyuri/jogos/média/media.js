function media(){
let nome = window.prompt(`qual o nome do aluno?`);
let nota1= Number(window.prompt(`Insira a primeira nota de${nome}`))
let nota2= Number(window.prompt(`Além da nota ${nota1}, qual foi a segunda nota?`))
// calcular a média das duas notas
med = (nota1 + nota2) / 2

let msg //criar uma variavel e deixar ela vazia
if(med >=6){ // se por acaso a media for 6.0 ou mais...
 msg='meus parabéns! aprovado!!'
 }else {
    msg ="Estude um pouco mais!Reprovado"
 }
 // o if é uma estrutura que cria uma Condição, que execulta um bloco de comandos ou outro, dependendo do resulatado de um teste logico.
 let res= document.getElementById('situacao')
 res.innerHTML = `<p> Calculando a média final de <mark>${nome}</mark>.</p>`
 res.innerHTML += `<p> As notas obtidas foram <mark>${nota1} e ${nota2}</mark>.</p>`
 res.innerHTML += `<p> Amédia final será <mark>${med}</mark>.</p>`
 res.innerHTML += `<p> A mensagem que temos é: <strong style='color:blue'>${msg}</strong>.</p>`
 

}
