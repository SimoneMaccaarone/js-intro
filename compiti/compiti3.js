//                                                  esercizi sulle funzioni

//scrivo sintassi normale e lambda per ogni esercizio

//1. scrivere una funzione che dato un numero se è positivo lo  moltiplichi per due, se è negativo no

//2. scrivere una funzione che data una stringa restituisca la sua versione maiuscola

//3. scrivere una funzione che data una stringa mi restituisca 'vero' se è più lunga di 10 caratteri altrimenti restituisca 'falso'

//4. scrivere una funzione pura che restituisca la scacchiera

//5. scrivere una funzione che dato un numero restituisca una stringa con la logica FizzBuzz

//6. scrivere una funzione che data una stringa resituisca una stringa composta solo dai caratteri dispari dell'originale PARSEINT

//--------------------------------------------------------------------------------------------------------------------------------



//1. scrivere una funzione che dato un numero se è positivo lo  moltiplichi per due, se è negativo no
//------------------funzione normale----------------------------
function multiplyTwo(numero) {
    if (numero >= 0) {
        return numero * 2;
    }
    return numero;
}

console.log(multiplyTwo(50))
//-------------------funzione Lambda----------------------------

const multiplyTwoLambda = (numero) => {
    if (numero >= 0) {
        numero = numero * 2;
    } else {
        return numero;
    }
    return numero;
}
console.log(multiplyTwoLambda(-3))


//2. scrivere una funzione che data una stringa restituisca la sua versione maiuscola
//------------------funzione normale-----------------------

function superToUpperCase(minuscola) {
    let maiuscola = minuscola.toUpperCase();
    return maiuscola;
}
console.log(superToUpperCase('funzione normale '));

//------------------funzione Lamba-------------------------

const superToUpperCaseLambda = (minuscola) => {
    let maiuscola = minuscola.toUpperCase();
    return maiuscola;
}
console.log(superToUpperCaseLambda('funzione blanda'));

// -----------------funzione di Vlad------------------------
function convertTextToUpperCase(text) {
    if (typeof text === 'string') {
        let textUpperCase = text.toUpperCase();
        return textUpperCase;
    } else {
        return '';
    }
}
console.log(convertTextToUpperCase('funzione di vlad'));


//3) scirvere una funzione che mi restituisca vero se è piu lunga di 10 caratteri alrimenti restituisca falsa
//------------------funzione normale-----------------------

function trueFalse1(stringa) {
    let pippo = '';
    if (stringa.length > 10) {
        pippo = 'True';
        return pippo;
    } else {
        pippo = 'False';
        return pippo;
    }
}
console.log(trueFalse1('as ad'));

//------------------funzione Lamba-------------------------

const trueFalseLambda = (stringa) => {
    let pippo = '';
    if (stringa.length > 10) {
        pippo = 'True';
        return pippo;
    } else {
        pippo = 'False';
        return pippo;
    }
}
console.log(trueFalseLambda('kasnjoancona'));

//------------------funzione di Andrea-----------------------

function trueFalse2(stringa) {
    if (stringa.length > 10) {
        stringa = True;
    }
    return false;
}
//------------------funzione abbreviata----------------------

function trueFalse3(stringa) {
    return stringa.length > 10;
}


//4. scrivere una funzione pura che restituisca la scacchiera
//------------------funzione normale-----------------------

function chessboard(size) {
    let scacchiera = "";
    for (let riga = 0; riga < size; riga++) {
        if (riga % 2 !== 0) {
            scacchiera += " #".repeat(size / 2);
        } else if (riga % 2 === 0) {
            scacchiera += "# ".repeat(size / 2);
        };

        scacchiera += "\n";
    } return scacchiera;
}

console.log(chessboard(8));

//------------------funzione Lamba-------------------------

const chessboardLambda = (size) => {
    let scacchiera = "";
    for (let riga = 0; riga < size; riga++) {
        if (riga % 2 !== 0) {
            scacchiera += " #".repeat(size / 2);
        } else if (riga % 2 === 0) {
            scacchiera += "# ".repeat(size / 2);
        };

        scacchiera += "\n";
    } return scacchiera;
}
console.log(chessboardLambda(4));



//5. scrivere una funzione che dato un numero restituisca una stringa con la logica FizzBuzz
//------------------funzione normale-----------------------
function fizzBuzz(pippo) {
    if (pippo % 3 === 0 && pippo % 5 === 0) {
        console.log('FizzBuzz' + pippo);
    } else if (pippo % 5 === 0) {
        console.log('Buzz' + pippo);
    } else if (pippo % 3 === 0) {
        console.log('Fizz' + pippo)
    } else {
        console.log(pippo);
    } return pippo;
}
console.log(fizzBuzz(3));

//------------------funzione Lamba-------------------------

const fizzBuzzLambda = (pippo) => {
    if (pippo % 3 === 0 && pippo % 5 === 0) {
        console.log('FizzBuzz' + pippo);
    } else if (pippo % 5 === 0) {
        console.log('Buzz' + pippo);
    } else if (pippo % 3 === 0) {
        console.log('Fizz' + pippo)
    } else {
        console.log(pippo);
    } return pippo;
}
console.log(fizzBuzzLambda(9));


//6. scrivere una funzione che data una stringa resituisca una stringa composta solo dai caratteri dispari dell'originale
//------------------funzione normale-----------------------
function superCharAt1(stringa) {
    let newWord = ''
    for (let i = 1; i < stringa.length; i += 2) {
        newWord += stringa.CharAt(i);
    }
    return newWord;
}
console.log(superCharAt1('supercalifragi'))
//------------------funzione di Andrea-----------------------

function superCharAt2(stringa) {
    let newWord = ''
    for (let i = 1; i < stringa.length; i++) {
        if ( i%2===0){
            result+=text[i];
        }
        
    }
    return newWord;
}
console.log(superCharAt2('ipersuadaih1b'))


//7. funzione che dato 2 numeri restituisce il più piccolo
// --------------funzione normale---------------
function numeroMinore(numero1, numero2) {
    if (numero1 < numero2) {
        return numero1;
    } else {
        return numero2;
    }
}

console.log(numeroMinore(42348, 23450))

//------------------funzione Lamba-------------------------

const numeroMinoreLambda = (numero1, numero2) => {
    if (numero1 < numero2) {
        return numero1;
    }
    return numero2;
}
console.log(numeroMinoreLambda(322342344, 92342))

//8. Scrivere una funzione che sommi tutti i numeri in un range prestabilito
function sumRange(startNumber, endNumber) {
    let sum = 0;
    for (let i = startNumber; i <= endNumber; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumRange(0, 3)) //6
console.log(sumRange(1, 3)) //6
console.log(sumRange(1, 5)) //15
console.log(sumRange(2, 6)) //20
console.log(sumRange(6, 6)) //6



