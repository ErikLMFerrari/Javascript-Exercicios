function Quin(){
    let N = parseFloat()
    let Cont = parseInt()
    let NAntigo = parseInt()
    let ToT = parseFloat()

    NAntigo = 1
    N = 1

    for(Cont = 1; Cont <= 15; Cont++){
        ToT = N + NAntigo
        NAntigo = N
        N = ToT

        alert(ToT)
    }
}