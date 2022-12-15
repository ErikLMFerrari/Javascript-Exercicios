function Maior_Menor(){

    let Maior_Valor = parseInt()
    let Menor_Valor = parseInt()
    let N1 = parseInt()

    do {
        N1 = prompt("Digite um valor")

        if (N1 >= Maior_Valor) {
            Maior_Valor = N1
        }

        if (N1 <= Menor_Valor) {
            Menor_Valor = N1
        }
        
    } while (N1 <= 0);

}