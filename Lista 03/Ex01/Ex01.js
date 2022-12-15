function MeuBeus(){
    var A = parseInt(prompt("Digite um número"))
    var B = parseInt(prompt("Outro número"))
    var C = parseInt(prompt("Another"))
    var D = parseInt(prompt("O último prometo"))

    var AmB = (A + B)
    var AmC = (A + C)
    var AmD = (A + D)
    var BmC = (B + C)
    var BmD = (B + D)
    var CmD = (C + D)

    var AxB = (A * B)
    var AxC = (A * C)
    var AxD = (A * D)
    var BxC = (B * C)
    var BxD = (B * D)
    var CxD = (C * D)

    alert("Os números somados & Multiplicados entre si ficam")

    alert(A + " + " + B + " = " + AmB)
    alert(A + " + " + C + " = " + AmC)
    alert(A + " + " + D + " = " + AmD)
    alert(B + " + " + C + " = " + BmC)
    alert(B + " + " + D + " = " + BmD)
    alert(C + " + " + D + " = " + CmD)

    alert(A + " x " + B + " = " + AxB)
    alert(A + " x " + C + " = " + AxC)
    alert(A + " x " + D + " = " + AxD)
    alert(B + " x " + C + " = " + BxC)
    alert(B + " x " + D + " = " + BxD)
    alert(C + " x " + D + " = " + CxD)

}