function Vendas(){
    
    let Valor = parseFloat(prompt("Qual o valor das vendas do mês?"))
    let ToTValor = parseFloat()

    if (Valor > 1500){
        Valor = Valor - 1500
        ToTValor = 45 + (Valor * 0.05)
        alert("Seu salário é de: " + ToTValor + " Reais")
    }
    else{
        ToTValor = Valor * 0.03
        alert("Seu salário é de: " + ToTValor + " Reais")
    }

}