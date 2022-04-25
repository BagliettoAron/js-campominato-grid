// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// 1. ottengo array dei numeri da 1 a 100
const maxLength = 100;

const randomNumbersArray = generateIncrementalIntegerNumbers (maxLength)

console.log(randomNumbersArray);

2. 



// FUNCTIONS :

// genero array numeri da 1 a 100 
/**
 * Description
 * @param {any} maxLimit -> numero massimo entro il quale generare l'array
 * @returns {any} -> array di numeri consecutivi compresi tra 1 e 100 (estremi compresi)
 */
function generateIncrementalIntegerNumbers (maxLimit) {
    const array = [];

    for (let i = 1; i <= maxLimit; i++) {
        thisNumber = [i];
        array.push(parseInt(thisNumber));
    }

    return array;
}










