function Nota(){
    let nota1 = parseFloat(prompt("Qual sua primeira nota?"))
    let nota2 = parseFloat(prompt("Qual sua segunda nota?"))
    let media = parseInt
    media = nota1 + nota2 / 2

    if (media >= 6){
        alert("Aprovado")
    }
    else {
        alert("Reprovado")
    }
}