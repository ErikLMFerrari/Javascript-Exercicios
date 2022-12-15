function Numbers(){
    let N1 = parseInt(prompt("Digite um número"))
    let N2 = parseInt(prompt("Digite outro número"))

    if (N1 == N2){
        alert("São números iguais")
    }

    if (N1 > N2){
        alert(N1 + " é maior que " + N2)
    }

    if (N2 > N1){
        alert(N2 + " é maior que " + N1)
    }
}