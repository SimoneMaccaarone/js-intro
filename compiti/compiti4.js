// 1) scrivere una funzione che prende come parametro un array di numeri e fa console.log dei numeri con la logica fizzbuzz

//2) scrivere una funzione che prende come parametri le stringhe e logga quelle piu piccole di 5 caratteri

//3) scrivere una funzione che come parametro una stinga composta dai primi 5 caratteri convertiti in maiscoli

//4) scrivere una funzione che prende come parametro una stringa e restituisce la lunchezza della stringa senza spazi

//5) scrivere una funzione che prende come parametro una stringa e restituisce il numero degli spazi

//--------------------------------------------------------------------------------------------------------

// 1) scrivere una funzione che prende come parametro un array di numeri e fa console.log dei numeri con la logica fizzbuzz

const scatola = [3, 15, 10, 8, 4, 321, 34];

function printArrayFizzBuzzLogic(arrayOfNumber) {
    for (let i = 0; i < arrayOfNumber.length; i++) {
        const element = arrayOfNumber[i];

        if (element % 3 === 0 && element % 5 === 0) {
            console.log('FizzBuzz');
        } else if (element % 5 === 0) {
            console.log('Buzz');
        } else if (element % 3 === 0) {
            console.log('Fizz')
        } else {
            console.log(element);
        }
    }
}
printArrayFizzBuzzLogic(scatola);

//2) scrivere una funzione che prende come parametri le stringhe e logga quelle piu piccole di 5 caratteri

const pluto = ['casa', 'armadio', 'gatto', 'perfetto', 'mano'];

function printShorterThan5Chars(arrayOfStrings) {
    for (let i = 0; i < arrayOfStrings.length; i++) {
        const element = arrayOfStrings[i];

        if (element.length < 5) {
            console.log(element);
        }
    }
}
printShorterThan5Chars(pluto);



//3) scrivere una funzione che come parametro una stinga composta dai primi 5 caratteri convertiti in maiscoli

function pickFirst5CharsAndMakeUpperCase(text) {
        let resultText = '';
        for (let i = 0; i <= text.length; i++) {
            if (i < 5) {
                const char=text[i];
                resultText+= char;
            }
        }
        return resultText.toUpperCase();
    }
    console.log(pickFirst5CharsAndMakeUpperCase('deltaplano')) //DELTA
    

//4) scrivere una funzione che prende come parametro una stringa e restituisce la lunchezza della stringa senza spazi


function lengthOfTextWithoutSpaces(text) {
    let str = text.replace(/\s/g, '');
    let stringNumb = str
    stringNumb = stringNumb.length;
    return stringNumb;

}
console.log(lengthOfTextWithoutSpaces(' il nano enorme ')) //12
//----------------------------------------------------------------------

function lengthOfTextWithoutSpaces2(text) {
    const lengthOfTextWithoutSpaces2 = text.replaceAll(' ','');
    return lengthOfTextWithoutSpaces2.length;
}
console.log(lengthOfTextWithoutSpaces2(' la mia nonna in cariola ')) //12




//5) scrivere una funzione che prende come parametro una stringa e restituisce il numero degli spazi

function countSpaces(text) {
    let nunberOfSpaces=0;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if(char===' '){
            nunberOfSpaces++;
        }
    }
    return countSpaces();
}

// console.log(countSpaces('il nano enorme')) //2
