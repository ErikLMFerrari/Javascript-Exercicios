function Comodo(){
    let Nome 
    let Conf 
    let Largura = parseInt()
    let Comprimento = parseInt()
    let Result = parseFloat()
    let Area = parseFloat()

    do {
        Nome = prompt("Escreva um comodo")
        Largura = prompt("Qual a largura desse comodo")
        Comprimento = prompt("Qual o comprimento desse comodo")

        Area = Largura * Comprimento
        alert("A area do(a) " + Nome + " é " + Area)
        Conf = prompt("Deseja calcular mais algum comodo? [s/n]")

    } while (Conf == "n");
}