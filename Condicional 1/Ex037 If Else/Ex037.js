function Comida(){
    let Maca = parseFloat(prompt("Vai comprar quantos KG de Maçã?"))
    let Morango = parseFloat(prompt("Vai comprar quantos KG de Morango?"))
    let PrecoMor = parseFloat()
    let PrecoMa = parseFloat()
    let ToTFrut = parseFloat()
    let ToTPrecoFrut = parseFloat()

    if (Morango >= 5){
        PrecoMor = Morango * 1.50        
    }
    else{
        PrecoMor = Morango * 1.80
    }


    if (Maca >= 5){
        PrecoMa = Maca * 1.50
    }
    else{
        PrecoMa = Maca * 1.80
    }

    ToTFrut = Morango + Maca
    ToTPrecoFrut = PrecoMor + PrecoMa

    if (ToTFrut >= 8 || ToTPrecoFrut >= 25.00){
       ToTPrecoFrut = ToTPrecoFrut - (ToTPrecoFrut * 0.10)
    }

    alert("O preço total a se pagar é: " + ToTPrecoFrut)

}