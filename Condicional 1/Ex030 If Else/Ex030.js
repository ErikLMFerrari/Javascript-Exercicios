function Crescente(){
    let N1 = parseFloat(prompt("Digite um número"))
    let N2 = parseFloat(prompt("Digite outro"))
    let N3 = parseFloat(prompt("Agora o último"))
    
    if (N1 >= N2){
        if (N2 >= N3){
            alert("Ordem Crescente:" + N3 + N2 + N1)
        }
    }

    if (N1 >= N2){
        if (N3 >= N2){
            alert("Ordem Crescente:" + N2 + N3 + N1)
        }
    }

    if (N2 >= N1){
        if (N3 >= N1){
            alert("Ordem Crescente:" + N1 + N3 + N2)
        }
    }
}