function Saldo(){
    let N = parseInt(prompt("Qual o número da sua conta?"))
    let Saldo = parseFloat(prompt("Qual seu saldo?"))
    let Debito = parseFloat(prompt("Qual o débito a pagar?"))
    let Crédito = parseFloat(prompt("Tem quanto de crédito?"))
    let Saldo_Atual = parseFloat()

    Saldo_Atual = (Saldo - Debito + Crédito)

    if (Saldo_Atual >= 0){
        alert("Seu saldo está positivo")
    }
    else{
        alert("Seu saldo está negativo")
    }

}