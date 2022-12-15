function MaiorN(){
    let N1 = parseFloat(prompt("Digite um número"))
    let N2 = parseFloat(prompt("Digite outro número"))
    let N3 = parseFloat(prompt("Agora o último"))

    if (N1 > N2){
        if (N1 > N3){
            alert("O maior número é: " + N1)
        }
    }

    if (N2 > N1){
        if (N2 > N3){
            alert("O maior número é: " + N2)
        }
    }

    if (N3 > N2){
        if (N3 > N1){
            alert("O maior número é: " + N3)
        }
    }
}