//esercizi sulle funzioni

//scrivo sintassi normale e lambda per ogni esercizio

//1. scrivere una funzione che dato un numero se è positivo lo  moltiplichi per due, se è negativo no

//2. scrivere una funzione che data una stringa restituisca la sua versione maiuscola

//3. scrivere una funzione che data una stringa mi restituisca 'vero' se è più lunga di 10 caratteri altrimenti restituisca 'falso'

//4. scrivere una funzione pura che restituisca la scacchiera

//5. scrivere una funzione che dato un numero restituisca una stringa con la logica FizzBuzz

//6. scrivere una funzione che data una stringa resituisca una stringa composta solo dai caratteri dispari dell'originale PARSEINT

//----esercizio1----

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

//  ----esercizio2----

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
// 3) scirvere una funzione che mi restituisca vero se è piu lunga di 10 caratteri alrimenti restituisca falsa

// funzione normale

function trueFalse(string) {
    let pippo = '';
    if (string.lenght > 10) {
        pippo = 'true';
        return pippo;
    } else {
        pippo = 'false';
        return pippo;
    }
}
console.log(trueFalse('asdaadadasdasdadd'));

funzione lambda

const trueFalseLambda = (string) => {
    let pippo=''
        if(string.lenght >10){
            pippo='true';
            return pippo;
        }else{
            pippo='false';
            return pippo;
        }

}
console(trueFalseLambda(ljljl));
