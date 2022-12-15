function Idade(){
    let H1 = parseInt(prompt("Digite a idade do primeiro Homem"))
    let H2 = parseInt(prompt("Digite a idade do segundo Homem"))
    let M1 = parseInt(prompt("Digite a idade da primeira mulher"))
    let M2 = parseInt(prompt("Digite a idade da segunda mulher"))
    let R1 = parseInt()
    let R2 = parseInt()


    if (H1 > H2){
        if (M1 > M2){
            R1 = H1 + M2
            R2 = H2 + M1
            alert("A soma da idade do homem mais velho e da mulher mais nova é" + R1 + (" Anos"))
            alert("A soma da idade da mulher mais velha e do homem mais novo é" + R2 + (" Anos"))
        }
        else{
            R1 = H1 + M1
            R2 = H2 + M2
            alert("A soma da idade do homem mais velho e da mulher mais nova é" + R1 + (" Anos"))
            alert("A soma da idade da mulher mais velha e do homem mais novo é" + R2 + (" Anos"))
        }
    }


}