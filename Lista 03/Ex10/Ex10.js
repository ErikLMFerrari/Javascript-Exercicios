function Eleição(){
    var Presida1 = parseInt(prompt("Quantos votaram no primeiro candidato?"))
    var Presida2 = parseInt(prompt("Quantos votaram no segundo candidato?"))
    var Presida3 = parseInt(prompt("Quantos votaram no terceiro candidato?"))
    var branco = parseInt(prompt("Quantos votaram em branco"))
    var nulo = parseInt(prompt("Quantos votaram nulo"))
    var ToTV = parseInt(Presida1 + Presida2 + Presida3 + branco + nulo)
    var ToTVV = parseInt(Presida1 + Presida2 + Presida3)
    var VvP = parseInt( ToTV / ToTVV * 100)
    var Presida1P = (Presida1 * ToTVV / 100)
    var Presida2P = (Presida2 * ToTVV / 100)
    var Presida3P = (Presida3 * ToTVV / 100)

    alert("Nessa eleição " + ToTV + " pessoas votaram")
    alert(VvP + "% das pessoas votaram em candidatos")
    alert(Preisda1P + "% das pessoas votaram no primeiro candidato")
    alert(Preisda2P + "% das pessoas votaram no segundo candidato")
    alert(Preisda3P + "% das pessoas votaram no terceiro candidato")
}