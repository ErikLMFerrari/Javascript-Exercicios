function Vida(){
    var dias = parseInt(prompt("Digite o dia na qual você nasceu"))
    var mes = parseInt(prompt("Qual mês você nasceu? (Número)"))
    var ano = parseInt(prompt("Qual ano você nasceu"))

    ano = 2022- ano
    result = (ano * 365) + (mes * 30) + dias
    alert ("Você meu xuxu, possui" + result + " dias de vida")
}