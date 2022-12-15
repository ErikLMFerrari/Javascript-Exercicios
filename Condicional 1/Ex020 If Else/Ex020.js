function Valor(){
    let n1 = parseFloat(prompt("Digite um valor"))
    let n2 = parseFloat(prompt("Digite outro valor"))

    if (n1 > n2){
        alert("Os valores são " + n1 + n2)
    }
    else {
        alert("Os valores são " + n2 + n1)
    }
}