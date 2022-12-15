function Nnovo(){
    let Cont = parseInt()
    let NNovo = parseInt()
    let NAntigo = parseInt()
    let ContFB = parseInt()

    while (Cont <= 15) {
        ContFB = NAntigo + NNovo
        NAntigo =  NNovo
        NNovo = ContFB
        alert(ContFB)
        Cont = Cont + 1
    }
}