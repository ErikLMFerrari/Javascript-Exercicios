function Salario(){
    var Salario = parseInt(prompt("Qual o salário do funcionário?"))
    var Ajuste = parseInt(prompt("Quanto ele vai receber de aumento? (%)"))
    var Salario_Bonus = parseFloat(Salario * Ajuste) / 100
    var ToT_Salario = parseFloat(Salario + Salario_Bonus)

    alert("Parabéns seu salário agora é de " + ToT_Salario)
}