function Vitória(){
    let TimeA = (prompt("Nome do primeiro time?"))
    let TimeB = (prompt("Qual o nome do segundo time?"))
    let GolsA = parseFloat(prompt("Quantos gols o(a) " + TimeA + " Marcou?"))
    let GolsB = parseFloat(prompt("Quantos gols o(a) " + TimeB + " Marcou?"))

    if(GolsA > GolsB){
        alert(TimeA + " Venceu")
        if (GolsB > GolsA){
            alert(TimeB + " Venceu")
        }
        else{
            alert("Tivemos um empate")
        }
    }
}