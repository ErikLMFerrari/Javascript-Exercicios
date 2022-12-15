function Divisão(){
    let N1 = parseInt()
    let N2 = parseInt()
    let Multi = parseInt()
    let Cont = parseInt()

    N1 = prompt("Digite o Dividendo")
    N2 = prompt("Digite o Divisor")

    do {
        Multi = Multi + N2
        Cont = Cont + 1
    } while (Multi >= N1);

    if (Cont == N2) {
        alert("O divisor cabe, " + Cont + " Vezes no dividendo")
    } else {
        alert("O divisor cabe, " + Cont + " Vezes no dividendo")
    }
}