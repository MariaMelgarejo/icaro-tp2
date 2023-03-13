// Escribir un programa que inicie un array vacío y luego vaya almacenando números aleatorios. Puede usar la variable "numeroRandom" del ejercicio 1.
let array = []

function almacenar() {
    for (let i = 0; i < 5; i++) {
        const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
        array.push(numeroRandom)

    } 
}

almacenar()
console.log(array);