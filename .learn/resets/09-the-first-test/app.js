// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yen
    let valueInYen = valueInDollar * 156.5;
    // Retornamos el valor en yen
    return valueInYen;
}




// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };


// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }