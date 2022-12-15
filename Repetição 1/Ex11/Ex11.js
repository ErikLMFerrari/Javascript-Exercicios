function Casa(){
    let Cont
    let Nome
    let Tamanho = parseInt()
    let Guarda = parseInt()
    let ToT = parseFloat()

    while (Cont != "n") {
        Nome = prompt("Digite o nome do Comodo")
        Tamanho = prompt("Digite o tamanho do Comodo (M2)")
        alert(Nome + " Tem de tamanho " + Tamanho + " Metros Quadrados")
        Guarda = Guarda + Tamanho
        Cont = prompt("Deseja descrever outro comodo? [s/n]")
    }

    ToT = Guarda
    alert("O tamanho total da casa é: " + ToT + " Metros Quadrados")
}