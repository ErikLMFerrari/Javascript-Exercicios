function CF(){
    let C = parseFloat()
    let F = parseFloat()

    C = 10

    while (C <= 100) {
        F = ((9 * C + 160) / 5)
        alert(C + " Celsius em Fahrenheit fica " + F + " Graus Fahrenheit")
        C = C + 10
    }
}