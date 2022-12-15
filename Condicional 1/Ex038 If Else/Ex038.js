function Verif(){

   let Codigo = 1234
   let CodigoDigit = prompt("Escreva o código de usuário")

   if (CodigoDigit == Codigo){
      alert("Acesso permitido")
   }

   else{
     alert("Acesso negado")
   }

}