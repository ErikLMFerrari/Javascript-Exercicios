function Partida(){
    let start = parseFloat(prompt("Que horas começou a partida?"))
    let fim = parseFloat(prompt("Que horas terminou?"))
    let Sub = parseFloat()

    Sub = fim - start

    if (Sub <= 0){
        Sub = Sub + 24
        alert("A partida durou " + Sub + " horas" )
    }
    else {
        alert("A partida durou " + Sub + " horas" ) 
    }
}