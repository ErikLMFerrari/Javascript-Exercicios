function Combustivel(){
    let ConfG = (prompt("Vai comprar galosina? (s/n)"))
    let ConfA = (prompt("Vai comprar alcool? (s/n)"))


    if (ConfA = "s"){
        let A = parseInt(prompt("Quantos Litros de alcool?"))
        if (A > 20){
            ValA = parseFloat()
            ValA = (A * 2.90) - ((A * 2.90) * 0.03)
            alert("Fica" + ValA + " reais o alcool")
        }
        else{
            ValA = parseFloat()
            ValA = (A * 2.90) - ((A * 2.90) * 0.03)
        }
    }

    if (ConfG = "s"){
        let G = parseInt(prompt("Quantos Litros de gasolina?"))
        if (G > 20){
            ValG = parseFloat()
            ValG = (G * 2.90) - ((G * 2.90) * 0.03)
            alert("Fica" + ValG + " reais a gasolina")
        }
        else{
            ValG = parseFloat()
            ValG = (G * 2.90) - ((G * 2.90) * 0.03)
        }
    }

}