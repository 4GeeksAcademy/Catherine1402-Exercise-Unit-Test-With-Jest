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
    let valueInYen = valueInDollar * 1 / 1.07 * 156.5;
    // Retornamos el valor en yen
    return valueInYen.toFixed(2);
}


// Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a pound
    let valueInPound = valueInYen * 1 / 156.5 * 0.87;
    // Retornamos el valor en Pound
    return valueInPound.toFixed(4);
}


// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))



// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

