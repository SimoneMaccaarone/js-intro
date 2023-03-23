//esercizi sulle funzioni

//scrivo sintassi normale e lambda per ogni esercizio

//1. scrivere una funzione che dato un numero se è positivo lo  moltiplichi per due, se è negativo no

//2. scrivere una funzione che data una stringa restituisca la sua versione maiuscola

//3. scrivere una funzione che data una stringa mi restituisca 'vero' se è più lunga di 10 caratteri altrimenti restituisca 'falso'

//4. scrivere una funzione pura che restituisca la scacchiera

//5. scrivere una funzione che dato un numero restituisca una stringa con la logica FizzBuzz

//6. scrivere una funzione che data una stringa resituisca una stringa composta solo dai caratteri dispari dell'originale PARSEINT

//--------------------------------------------------------------------------------------------------------------------------------

//1. scrivere una funzione che dato un numero se è positivo lo  moltiplichi per due, se è negativo no

// funzione normale
function multiplyTwo(numero) {
    if (numero > 0) {
        numero = numero * 2;
    } else {
        numero = undefined;
    }
    return numero;
}

console.log(multiplyTwo(5))
// funzione Lambda

const multiplyTwoLambda = (numero) => {
    if (numero > 0) {
        numero = numero * 2;
    } else {
        numero = undefined;
    }
    return numero;
}
console.log(multiplyTwoLambda(-3))

//2. scrivere una funzione che data una stringa restituisca la sua versione maiuscola

// funzione normale

function superToUpperCase(minuscola) {
    let maiuscola = minuscola.toUpperCase();
    return maiuscola;
}
console.log(superToUpperCase('ciao'));

//funzione Lamba

const superToUpperCaseLambda = (minuscola) => {
    let maiuscola = minuscola.toUpperCase();
    return maiuscola;
}
console.log(superToUpperCaseLambda('superiper'));

//----esercizio3----
//3) scirvere una funzione che mi restituisca vero se è piu lunga di 10 caratteri alrimenti restituisca falsa

//  funzione normale

function trueFalse(stringa) {
    let pippo = '';
    if (stringa.length > 10) {
        pippo = 'True';
        return pippo;
    } else {
        pippo = 'False';
        return pippo;
    }
}
console.log(trueFalse('asdaad'));



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
console.log(trueFalseLambda('yguiyguyguyguyguytuytuytuyt'));
//----esercizio4----

//4. scrivere una funzione pura che restituisca la scacchiera

//  funzione normale

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

//  funzione lambda

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


//  funzione normale
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
//  funzione lambda

const fizzBuzzLambda = (pippo) => {
    if(pippo % 3 === 0 && pippo % 5 === 0) {
        console.log('FizzBuzz' + pippo);
  }  else if (pippo % 5 === 0) {
    console.log('Buzz' + pippo);
} else if (pippo % 3 === 0) {
    console.log('Fizz' + pippo)
} else {
    console.log(pippo);
} return pippo;
}
console.log(fizzBuzzLambda(9));

//6. scrivere una funzione che data una stringa resituisca una stringa composta solo dai caratteri dispari dell'originale PARSEINT



