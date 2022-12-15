function Soma(){
    let N1 = parseFloat(prompt("Escreva um npumero"))
    let N2 = parseFloat(prompt("Escreva outro número"))
    let N3 = parseFloat(prompt("O último agora"))
    let V = parseFloat()


    if (N1 > N2){
        if (N1 > N3){
            if (N2 > N3)
            V = N1 + N2
            alert("A soma de:" + N1 + " &" + N2 + " é" + V)
        }
        else{
            V + N1 + N3
            alert("A soma de:" + N1 + " &" + N2 + " é" + V)
        }
    }

    if (N2 > N1){
        if (N2 > N3){
            if (N1 > N3)
            V = N2 + N1
            alert("A soma de:" + N2 + " &" + N1 + " é" + V)
        }
        else{
            V + N2 + N3
            alert("A soma de:" + N2 + " &" + N3 + " é" + V)
        }
    }

    if (N3 > N1){
        if (N3 > N2){
            if (N1 > N2)
            V = N3 + N1
            alert("A soma de:" + N3 + " &" + N1 + " é" + V)
        }
        else{
            V + N3 + N2
            alert("A soma de:" + N3 + " &" + N2 + " é" + V)
        }
    }
}