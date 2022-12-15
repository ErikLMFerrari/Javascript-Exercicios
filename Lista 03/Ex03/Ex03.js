function Quadrado_Diff(){
    var A = parseInt(prompt("Digite um número"))
    var B = parseInt(prompt("Digite outro número"))
    var aELEV = parseInt(A * A)
    var bELEV = parseInt(B * B)
    var Diff = parseInt(aELEV - bELEV)

    alert("A diferença do quadrado do primeiro número para o quadrado do segundo é " + Diff)
}