function Trabalho(){
    let Horas = parseFloat(prompt("Trabalhou quantas horas nesse mês?"))
    let HorasSal = parseFloat(prompt("Qual seu salário hora?"))
    let ToTSal = parseFloat()

    if (Horas >= 161) {
        Horas = Horas - 160
        ToTSal = (160 * HorasSal) + (Horas * HorasSal * 1.5)
        alert("Seu salário é: " + ToTSal)
    }
    else {
        ToTSal = (Horas * HorasSal)
        alert("Seu salário é: " + ToTSal)
    }
}