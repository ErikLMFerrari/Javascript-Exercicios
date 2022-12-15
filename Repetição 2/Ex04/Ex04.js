function Grao(){
    let Cont = parseFloat()
    let ToTGrao = parseFloat()
    let Somador = parseFloat()
    let ToT = parseFloat()

    Cont = 0
    ToTGrao = 1
    do {
        ToT = ToTGrao
        ToTGrao = ToTGrao * 2
        Cont = Cont + 1
    } while (Cont == 64);

    alert("O total de grãos do tabuleiro são: " + ToT)
}