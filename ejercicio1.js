const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);

function esPar(numero) {
    const resto = numero % 2
    if (resto == 0)  {
        return "si el numero " + numeroRandom + " es par"
    } else {
        return "no el numero " + numeroRandom + " es impar"   
    }
}

let resultado = esPar(numeroRandom)
console.log(resultado);