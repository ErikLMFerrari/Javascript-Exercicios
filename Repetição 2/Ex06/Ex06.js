function Soma_Media(){
    let N1 = parseInt()
    let Soma = parseInt()
    let Media = parseInt()
    let Result = parseFloat()

    do {
        N1 = prompt("Digite um número")
        if (N1 >= 1) {
            Soma = Soma + N1
            Media = Media + 1
        }
    } while (N1 == 0);

    Result = Soma / Media
    alert("A soma dos números apresentados foi: " + Soma)
    alert("A média dos números apresentados foi: " + Media)
}