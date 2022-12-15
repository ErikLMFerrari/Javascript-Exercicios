function Valor(){
    let n1 = parseFloat(prompt("Digite um número"))
    let n2 = parseFloat(prompt("Digite outro número"))

    if (n1 > n2){
        alert("O maior dos valores é " + n1)
    }
    else {
        alert("O maior dos valores é " + n2)
    }
}