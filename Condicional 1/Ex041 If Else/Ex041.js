function Notas(){
    let N1 = parseFloat(prompt("Primeira nota"))
    let N2 = parseFloat(prompt("Segunda nota"))
    let N3 = parseFloat(prompt("Terceira nota"))
    let Ex = parseFloat(prompt("Agora a nota dos exercicios"))
    let ToT = parseFloat()

    ToT = (N1 + (N2 * 2) + (N3 * 3) + Ex) / 7

    if (ToT >= 9){
        alert("Conceito A")
    }

    if (ToT >= 7.5){
        if (ToT < 9){
        alert("Conceito B")
        }
    }

    if (ToT >= 6){
        if (ToT < 7.5){
            alert("Conceito C")
        }
    }

    if (ToT < 6){
        alert("Conceito D")
    }

}

