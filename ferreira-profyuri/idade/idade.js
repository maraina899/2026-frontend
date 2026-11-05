function idade(){
    let mes = window.prompt(`Em que mês você nasceu?`)
    let ano = window.prompt(`E m que ano você nasceu?`)
    let anoAtual = new Date().getFullYear
    let idade = anoAtual - Number(anoNascimento);

    alert("Sua idade atual (ou a que você fará esse ano) é " + idade + "anos");


}