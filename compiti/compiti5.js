//---------------------------------------------------------------------------------------------
//          27/03 ESERCIZI DA FARE 
// 1) SCRIVERE UNA FUNZIONE CHE PRENDE OM INPUT UN ARRAY DI NUMERI E RESTITUISCE UN ARRAY DI STRINGHE IN LOGICA FIZZ BUZZ   (ARRAY DI STRINGHE)

const numbers = [3, 5, 15, 8, 12, 2];
function convertArrayInFizzBuzz(array) {

    let tempArray = []
    let num = ''
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element % 3 === 0 && element % 5 === 0) {
            tempArray.push('FizzBuzz')
        } else if (element % 5 === 0) {
            tempArray.push('Buzz');

        } else if (element % 3 === 0) {
            tempArray.push('Fizz');
        } else {
            num += element
            tempArray.push(num);
        }
    }
    return tempArray;
}
console.log('ESERCIZIO 1', convertArrayInFizzBuzz(numbers)) //['Fizz','buzz', 'fizzbuzz', '8', 'fizz','2']



// 2) SCRIVERE UNA FUNZIONE CHE PRENDE COME INPUT UN ARRAY DI NUMERI E RESTITUISCE UN ARRAY DI NUMERI IN CUI I POSITIVI SONO TRASFORMATI IN NEGATIVI E VICEVERSA

const numbers1 = [-3, 5, 15, -8, 12, 2, 0];
function invertElements(array) {

    let tempArray1 = [];
    let tempNumber1 = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        tempNumber1 = element * -1;
        tempArray1.push(tempNumber1);
    }
    return tempArray1;
}
console.log('ESERCIZIO 2', invertElements(numbers1))   //[3, -5, -15, 8, -12, -2, 0]


// 3) SCRIVERE UNA FUNZIONE CHE PRENDE COME INPUT UN ARRAY DI STRINGHE CON LA LUNGHEZZA DELLE STRINGHE

const strings = ['pippo', 'pluto', 'qui'];

function lengthOfElements(array) {
    let tempArray = [];
    let tempStings = ''

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        tempStings = element.length;
        tempArray.push(tempStings)
    }
    return tempArray;
}

console.log('ESERCIZIO 3', lengthOfElements(strings)) //[5, 5, 3]


// 4) SCRIVERE UNA FUNZIONE CHE PRENDE COME INPUT UN ARRAY DI STRINGHE E RESTITUISCE SOLO QUELLE CHE CONTENGONO LA LETTERA Z

const strings2 = ['pippo', 'pluto', 'qui', 'zapotec', 'zorro', 'zanzara', 'ciaiziano', 'zizizi'];

function onlyElementsWithZ(array) {
    let tempArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (!element.indexOf('z')) {
            tempArray.push(element);
        }
    }
    return tempArray;
}
console.log('ESERCIZIO 4', onlyElementsWithZ(strings2)) //['zapotec']


// 5) SCRIVERE UNA FUNZIONE CHE PRENDE COME INPUT UN ARRAY DI NUMERI E RESTITUISCE TUTTI I NUMERI PARI

const numbers2 = [-3, 5, 15, -8, 12, 2, 0];

function onlyEven(array) {
    let tempArray = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element % 2 === 0) {
            tempArray.push(element);
        }
    }
    return tempArray;
}

console.log('ESERCIZIO 5', onlyEven(numbers2)) //[-8, 12, -2, 0]


// 6) SCRIVERE UNA FUNZIONE CHE PRENDE COME INPUT UN ARRAY DI STRINGHE E RESTITUISCE UNA STRINGA COMPOSTA DALLE INIZIALI

const strings3 = ['pippo', 'osvaldo', 'paperino'];

function sumFirstChar(array) {
    let tempStings = ''
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const firstChar = element[0]
        tempStings += firstChar
    }
    return tempStings;
}
console.log('ESERCIZIO 6', sumFirstChar(strings3)) //'pop'

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

function sumFirstChar2(array) {
    let tempArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        element.split('')[0]
        let result = element.split('')[0]
        tempArray.push(result)
    }
    return tempArray.join('');
}
console.log('ESERCIZIO 6.1', sumFirstChar2(strings3)) //'pop'


// 7) SCRIVERE UNA FUNZIONE CHE PRENDE COME INPUT UN ARRAY DI NUMERI E RESTITUISCE IL MAGGIORE

const numbers3 = [-3, 5, 15, -8, 12, 2, 0];

function maxElement(array) {
    let tempNumber = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (tempNumber < element) {
            tempNumber = element;
        }
    }
    return tempNumber
}

console.log('ESERCIZIO 7', maxElement(numbers3)) //15
//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

function maxElement2(array) {
    let tempArray = []
    let result = Math.max(...numbers3)
    tempArray.push(result)
    // }
    return tempArray
}

console.log('ESERCIZIO (math.max) 7.1', maxElement2(numbers3)) //15