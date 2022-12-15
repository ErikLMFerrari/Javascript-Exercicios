function Nu() {
    let Menor = parseFloat()
    let Maior = parseFloat()
    let Cont = parseFloat()

    Maior = 0

    while (Menor >= 0) {
        Cont = prompt("Escreva um número")

        if (Cont > Maior){
            Maior = Cont
        }

        if (Cont < 0) {
            Menor = Cont
        }
    }

    alert("O Maior número apresentado foi: " + Maior)
    alert("E o menor número apresentado foi: " + Menor)
}