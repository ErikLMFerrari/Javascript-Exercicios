function Sal(){
    var Sal = parseFloat(prompt("Qual seu salário?"))
    var Per = parseFloat(prompt("Qual o percentual de aumento?"))
    var NSal = parseFloat(Sal + (Sal * Per / 100))

    alert("Seu novo salário é: " + NSal)
}