function Estoque(){
    let QuantMax = parseFloat(prompt("Qual o máximo de garrafas que podemos ter no estoque?"))
    let QuantMin = parseFloat(prompt("Qual o minimo de garrafas que temos que ter no estoque?"))
    let QuantAtual = parseFloat(prompt("Quantas garrafas temos no estoque agora?"))
    let QuantMedia = parseFloat()

    QuantMedia = ((QuantMax + QuantMin) / 2)

    if (QuantAtual >= QuantMedia){
        alert("Não precisa efetuar a compra, já temos o suficiente")
    }
    else{
        alert("Precisamos reestocar.")
    }
}