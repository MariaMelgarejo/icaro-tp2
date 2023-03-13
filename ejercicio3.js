function tablaMultiplicar(numero) {
    for (let i = 1; i < 11; i++) {
        // console.log(numero + " X " + i + " = " + (numero * i));  // Multiplicacion concatenando texto 
        console.log(`${numero} X ${i} = ${numero * i}`);   // Multiplicación con Template String
    }
}

tablaMultiplicar(9);
