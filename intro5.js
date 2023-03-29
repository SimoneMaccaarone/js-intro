//      HIGHER-ORDER FUNCTION funzioni di ordine superiore
// una funzione puo avere come parametro un altra funzione. funzioni che creano altre funzioni
// puo avere come parametro o in INPUT o OUTPUT o ENTRAMBE una funzione

let a = 5
let b = 'ciao'

function square(num) {
    return num * num
}

console.log(square(a))

// funzione anonima
let f = function (n) {
    return n * n
}
// versione lambda / arrow
let f2 = (n) => n * n

console.log('F:' + f(5))

//-------------------------------------------------------------------------------------------------

// Ripetere un' operazione un certo numero di volte

for (let i = 0; i < 10; i++) {
    console.log(i);
}

//-----------------------------------------------------------------------------

function logNumbersFrom0To9() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}
//astraggo i dettagli dell' algoritmo all' interno di una funzione
logNumbersFrom0To9();

function logNumbersFrom0To(maxNum) {
    for (let i = 0; i < maxNum; i++) {
        console.log(i);
    }
}
console.log('\n')
// logNumbersFrom0To(10,logNumber)
//-----------------------------------------------------------------------------

console.log('\n')
logNumbersFrom0To(10, logDouble)

console.log('\n')
logNumbersFrom0To(10, LogHello)


function LogHello(string) {
    console.log('Hello')
}

function logDouble(n) {
    console.log(n * 2)
}







//----------------------------------------------------------------------------------------------------

function repeatFrom0To(maxNum, func) { // maxNum=15, func=LogDivisbleFromTree
    for (let i = 0; i < maxNum; i++)
        func(i) // Che operazione è func? Dipende...
} // func <- LogNumber
// func <- LogDouble            func (i) si trasfericse a alla funzione chiamata
//...

// Chiamare la funzione repeatFrom0To in modo che stampi per ogni nu,ero (i) se i è divisibile per 3

function LogDivisbleFromTree(num) {     // num = (i)
    if (num % 3 === 0) {
        console.log(('DIVISIBILE PER 5'), num, true);
    } else {
        console.log(false);
    }
}
console.log(repeatFrom0To(15, LogDivisbleFromTree))








//  -----------   FUNZIONE ANONIMA ----------------------

// UN ALTRO ESEMPIO TOPPEEEE

repeatFrom0To(15, function (n) {
    console.log('DIVISIBILE PER 5', n, (n % 5 === 0))
})

// funzioni anonime convengono scriverle in lambda
// chiamare una funzione(in questo caso anonima) che ripete l azione ogni intervallo di tempo che li diamo noi 
// ripetizione

// setInterval((function()) => console.log('Test'), 1000 /*(interval)*/);

//  -----------------   CLOSURE  e SCOPE  -----------------------

console.log('CLOSURE E FUNZIONI CH RESTITUISCONO ALTRE FUNZIONI')

let counter = 0

function printAndIncrementCounter() {
    console.log(counter)
    counter++
}

printAndIncrementCounter()
printAndIncrementCounter()
printAndIncrementCounter()

//  FUNZIONI CHE RITORNANO ALTRE FUNZIONI

function getRangeCheckFunction(min, max) {
    return function (n) {
        return n >= min && n <= max
    }
}

let isInRange = getRangeCheckFunction(0, 5)
console.log(isInRange(7)) //f
console.log(isInRange(1)) //t
console.log(isInRange(-8))// f

let isBetween10and20 = getRangeCheckFunction(10, 20)
console.log(isInRange(7)) //f
console.log(isInRange(1)) //f
console.log(isInRange(-8))// f

//  ARRAY E FUNZUIONI DI ORDINE SUPERIORE

console.log('ARRAY E FUNZIONI DI ORDINE SUPERIORE')

let numbers = [1, 2, 3, 4, 5];

// map

let squareNumbers = [];

for (let n of numbers) {
    squareNumbers.push(n * n)    // prendo TUTTI gli ELEMENTI di un certo array e li scorro
}

let doubleNumbers = []

for (let n of numbers) {
    doubleNumbers.push(n * 2)
}

/// scrivere una funzione... ESERCIZIO

function map(array, func) { // array=[3,2,1], func=multiplyBy3 (esempio)
    let tempArray1 = []

    for (let i = 0; i < array.length; i++) { // i=0
        const element = array[i]; // element=3

        tempArray1.push(func(element))      //gli elementi li mette dentro alla funzione e li sposta nell nuovo array
    }
    return tempArray1;
}

function multiplyBy3(n) {
    return n * 3
}

console.log(map([3, 2, 1], n => n * 3)) // [9,6,3]
console.log(map([3, 2, 1], multiplyBy3)) // [9,6,3]
console.log(map([2, 2, 2, 1], n => n * n * n)) // [8,8,8,1]

// funzione MAP, ecc...gia esistenti
console.log('MAP, FILTER, ecc...')

let testArray = [9, 9, 3]

console.log(testArray.map(n => n * 3))
console.log(testArray.filter(n => n < 5, true))

let sum = 0
testArray.forEach(n => sum += n)
console.log(sum)



let words = ['ciao', 'pippo', 'topolino', 'ciao mondo']
let res = words
    .filter(w => w.length > 5)
    .map(w => w.length)
    .forEach(numberOfChars => console.log(numberOfChars))

   console.log([1,2,3,4,5].reduce((n1,n2)=> n1+n2, 0))

//         
   // --------  APPUNTI --------
   // Le HIGHER ORDER FUNCTION sono abbastanza strane
   // La REDUCE è la piu strana in assoluto
   // esistono molti linguaggi di programmazione che ne fanno tranquillamente a meno
   // esistono molti programmatori che ne fanno tranquillamente a meno ( anche i programmatori molto bravi)
   // ogni volta che qualcuno dei ragazzi che lavora con me deve scrivere una reduce non banale e mi chiama per conforto
   // purtroppo dovete imparare almeno a leggere!!!

   