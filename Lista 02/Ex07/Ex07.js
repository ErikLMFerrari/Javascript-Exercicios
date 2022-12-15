function Volume_Lata(){
    var H = parseFloat(prompt("Qual a altura da lata de óleo?"))
    var Raio = parseFloat(prompt("Qual o raio da lata?"))
    var V = parseFloat(3.14 * (Raio * 2) * H)

    alert("O Volume da lata é " + V)
}