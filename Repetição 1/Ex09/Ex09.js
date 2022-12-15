function Div10(){
    let Cont = parseInt()
    let Guarda = parseInt()
    let N1 = parseInt()
    let ToT = parseFloat()

    Cont = 1
    while (Cont <= 10) {
        N1 = prompt("Escreva um número")
        Guarda = Guarda + N1
        Cont = Cont + 1
    }

    ToT = Guarda / 10
    alert("A soma de todos os números dividos por 10 é: " + ToT)
}