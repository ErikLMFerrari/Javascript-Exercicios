function Func(){
    let Codigo = parseInt(prompt("Qual seu código de funcionário?"))
    let Data = parseInt(prompt("Qual ano você nasceu?"))
    let DataIngress = parseInt(prompt("Em qual ano você entrou na empresa?"))
    let N1 = parseInt()

    Data = 2022 - Data
    DataIngress = 2022 - DataIngress

    if (Data >= 65){
        N1 = 1
    }

    if (DataIngress >= 30){
        N1 = 1
    }

    if (Data >= 60){
        if (DataIngress >= 25){
            N1 = 1
        }
    }

    if (N1 == 1){
        alert("Tem " + Data + " anos de idade")
        alert("Trabalhou " + DataIngress + " anos")
        alert("Requer Aposentadoria")
    }
    else{
        alert("Tem " + Data + " anos de idade")
        alert("Trabalhou " + DataIngress + " anos")
        alert(" Não requer Aposentadoria") 
    }

}