function Caixa(){
    var Compri = parseInt(prompt("Qual o comprimento da caixa?"))
    var Alt = parseInt(prompt("Qual a altura da caixa?"))
    var Larg = parseInt(prompt("Qual a largura da caixa"))
    var Vol = parseFloat(Compri * Alt * Larg) 

    alert("O volume da caixa é: " + Vol)
}