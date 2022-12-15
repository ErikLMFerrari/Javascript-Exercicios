function Preço_Carro(){
    var Valor_Fabrica = parseFloat(prompt("Qual o valor de fábrica do carro?"))
    var Imposto = parseFloat((Valor_Fabrica * 45) / 100)
    var Valor_Distribuição = parseFloat ((Valor_Fabrica * 28) / 100)
    var ToT_Valor = parseFloat(Valor_Fabrica + Imposto + Valor_Distribuição)

    alert("O valor do carro para o consumidor é " + ToT_Valor)
}