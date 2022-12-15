function Prestação(){
    var Valor = parseFloat(prompt("Qual o valor da prestação?"))
    var Taxa = parseFloat(prompt("Quanto é a taxa de atraso?"))
    var Tempo = parseFloat(prompt("E está quantos meses atrasada?"))
    var ToT = parseFloat(Valor + (Valor * Taxa / 100) * Tempo)

    alert("Você está devendo" + ToT + "Reais")
}