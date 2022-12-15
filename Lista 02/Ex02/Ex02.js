function votos(){
    var VotosB = parseInt(prompt("Quantas pessoas votaram em branco?"))
    var VotosN = parseInt(prompt("Quantas pessoas votaram nulo?"))
    var VotosV = parseInt(prompt("Quantas pessoas votaram de forma valida?"))
    var ToTVB = parseFloat (VotosB * 100 / ToTV)
    var ToTVN = parseFloat (VotosN * 100 / ToTV)
    var ToTVV = parseFloat (VotosV * 100 / ToTV)
    var ToTV =  parseInt(VotosB = VotosN + VotosV)

    alert("De " + ToTV + " Votos")
    alert(ToTVB + "% das pessoas votaram em branco")
    alert(ToTVN + "% das pessoas votaram nulo")
    alert(ToTVV + "% das pessoas votaram em candidatos válidos")
}