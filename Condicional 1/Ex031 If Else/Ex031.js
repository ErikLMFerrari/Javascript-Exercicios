function Triângulo(){
    let LadoA = parseFloat(prompt("Digite um lado do triângulo"))
    let LadoB = parseFloat(prompt("Outro lado"))
    let LadoC = parseFloat(prompt("Agora o último"))

    let LadoAB = parseFloat()
    let LadoAC = parseFloat()
    let LadoBC = parseFloat()

    LadoAB = LadoA + LadoB
    LadoAC = LadoA + LadoC
    LadoBC = LadoB + LadoC

    if(LadoA < LadoBC){
        if(LadoB < LadoAC){
            if(LadoC < LadoAB){
                alert("O triângulo pode sim ser formado")
            }
        }
    }

    if (LadoA > LadoBC){
        alert("Não é possivel formar a figura geométrica")
    }

    if (LadoB > LadoAC){
        alert("Não é possivel formar a figura geométrica")
    }

    if (LadoC > LadoAB){
        alert("Não é possivel formar a figura geométrica")
    }
}