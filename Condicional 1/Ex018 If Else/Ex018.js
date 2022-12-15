function Votação(){
    let idade = parseInt(prompt("Quantos ano você tem?"))

    if (idade > 16){
        alert("Você pode votar")
    }
    else {
        alert("Você não pode votar")
    }
}