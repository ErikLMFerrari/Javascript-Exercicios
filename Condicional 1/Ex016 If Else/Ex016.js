function Compra(){
    let macas = parseFloat(prompt("Deseja comprar quantas maçãs?"))
    let preco = parseFloat

    if (macas >= 12){
       preco = macas * 1
       alert("O total fica" + preco + " Reais") 
    }
    else {
        preco = macas * 1.3
        alert("O total fica" + preco + " Reais") 
    }
}