function Repete(){
     let N1 = parseFloat(prompt("Digite um número"))
     let Cont = parseFloat()
     let ToT = parseFloat()

     Cont = 1
     
     while (Cont <= 10){
        ToT = N1 * Cont
        alert(N1 + " *" + Cont + " =" + ToT)
        Cont = Cont + 1
     }

}