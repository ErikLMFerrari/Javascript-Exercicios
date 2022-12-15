function Preco(){
    let Nome = (prompt("Qual o nome do produto?"))
    let Quant = parseInt(prompt("Quantas unidades que você comprou?"))
    let Preco = parseFloat(prompt("Qual o valor unitário de cada um?"))
    let ToT = Quant * Preco

    if (Quant <= 5){
        ToT = ToT - (ToT * 0.02)
    }

    if (Quant > 5){
        if(Quant <= 10){
            ToT = ToT - (ToT * 0.03)
        }
    }

    if (Quant > 10){
        ToT = ToT - (ToT * 0.05)
    }

    alert("O total a pagar é: " + ToT)
}