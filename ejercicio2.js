let palabra1 = "tren";
let palabra2 = "edificio";

//creau una funcion que reciba las dos palabras por parametro, las compare y devuelva cual de las dos es mas larga.
function compararPalabras(palabra1, palabra2) {
    if (palabra1.length > palabra2.length)  {
        return "la palabra " + palabra1 + " es mas larga"
    } else {
        return "la palabra " + palabra2 + " es mas larga"
    }
}
let resultado = compararPalabras(palabra1, palabra2)
console.log(resultado);
