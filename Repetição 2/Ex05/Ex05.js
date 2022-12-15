function Fatorial() {
    let Cont = parseInt()
    let N1 = parseInt()
    let Result = parseFloat()

    Cont = 0
    do {
        N1 = prompt("Digite um número")
        do {
            if (N1 <= 1) {
                Result = Result + N1
            } else {
                Result = Result + ((N1) * (N1 - 1))
            }
            N1 = N1 - 1
        } while (N1 = 0);
        Cont = Cont + 1
    } while (Cont >= 15);

    alert("A soma total dos Fatoriais dos números apresentados são: " + Result)
}