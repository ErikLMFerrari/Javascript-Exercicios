function Viagem(){
     var Tempo = parseFloat(prompt("Você faz a viagem em quantas horas?"))
     var Velocidade = parseFloat(prompt("E qual a velocidade média?"))
     var Distância = parseFloat(Tempo * Velocidade)
     var Litros = parseFloat(Distância / 12)

     alert("Nesta viagem de " + Distância + "Km, você utilizou " + Litros + "De combustivel")
     alert("Você a percorreu em " + Tempo + "com uma velocidade média de " + Velocidade + "KM/H")
}