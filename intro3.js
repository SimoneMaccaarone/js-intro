/*
//  Scope

const pippo = 'ciao'


if (true) {

    console.log(pippo);
    const pluto = 'javascript';
    if (true) {
        console.log(pluto);
        const paperino = 'pizza';
    }
    // console.log(pluto);    NON E' POSSIBILE LEGGERE LA VARIABILE DI UNO SCOPE INTERNO
}

// const pippo =' pippo'; NON E' POSSIBILE DICHIARARE DUE VARIABILI CON LO STESSO NOME NELLO STESSO SCOPE

for (let i = 0; i < 3; i++) {
    console.log('mondo');
}
for (let i = 0; i < 3; i++) {
    console.log('mondo');
}

for (let i = 0; i < 10; i++) {
    for (let i = 0; i < 10; i++) {

        console.log(i);     //shadowweb variabile
    }

}

for (let i = 0; i < 10; i++) {
    for (let J = 0; J < 10; J++) {

        console.log(i);
        console.log(J);

    }

} */

//------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  FUNZIONI

function elevaAlQuadrato(numero) {                       //  ----- FUNZIONE NORMALE  -----
    const risultato = numero * numero;
    return risultato;                               // funzione che eleva al quadrato
}

const dueAlQuadrato = elevaAlQuadrato(2);

console.log(dueAlQuadrato);

const cinqueAlQuadrato = elevaAlQuadrato(5);

console.log(cinqueAlQuadrato);

console.log(elevaAlQuadrato(50));   // richiama la funziuone direttamente


const elevaAlQuadrato2 = function (numero) {     // ------   FUNZIONE ANONIMA    -----
    const risultato = numero * numero;            // altro modo per creare una funzione
    return risultato;
}
console.log(elevaAlQuadrato2(3));



const elevaAlQuadrato3 = (numero) => numero * numero;               //  ------  FUNZIONE LAMBDA ------
console.log(elevaAlQuadrato3(12));

/*const elevaAlQuadrato4 = (numero) => {
    const risultato = numero* numero;
    return risultato; 
}*/

function elevaAPotenza(base, esponente) {
    const risultato = base ** esponente;
    return risultato;
}

console.log(elevaAPotenza(3, 4));

//--------------------------------------------------------------------------------------------------------------------------------------------------------
//  FUNZIONI PURE E IMPURE

function scriviNellaConsole(messaggio) {         //  ----- FUNZIONE IMPURA   -----
    console.log(messaggio)
}
scriviNellaConsole('scemo chi legge');


let pluto = 7;
function doplicaPluto() {    // impura
    pluto = pluto * 2;
}



function sommaUno(numero) {
    return numero + 1;
}

function log(messaggio) {            //  esempio di FUNZIONE che abbrevia il comando 'console.log'
    console.log(messaggio);
}


/*function sommaDueELogga(numero){        //NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
    const risultato = numero + 2;
    console.log(risultato);
    return risultato;
} */


function elevazioneAPotenza(base, esponente) {
    if (esponente === undefined) {
        const risultato = base ** 2;
        return risultato;
    } else {
        const risultato = base ** esponente;
        return risultato;
    }
}

function elevazioneAPotenzaConDefault(base, esponente = 2) {
    const risultato = base ** esponente;
    return risultato;
}
console.log(elevazioneAPotenzaConDefault(3));
//--------------------------------------------------------------------------------------------------------------------------------------------------------

//  LE FUNZIONI POSSONO USARE ALTRE FUNZIONI

function doubleAndPow3(selectedNumber) {
    // const double = selectedNumber * 2;
    // const pow3 = double ** 3;
    // return pow3;
    //---------------------------------------
    // const double = makeDouble(selectedNumber);
    // const pow3= makePow3(double);
    // return pow3;
    //---------------------------------------
    return makePow3(makeDouble(selectedNumber));
}

function makeDouble(selectedNumber){
    return selectedNumber*2;
}

function makePow3(selectedNumber){
    return selectedNumber**3;
}

console.log(doubleAndPow3(2));  //64
console.log(doubleAndPow3(3));  //232


function ifMoreThan10CharUpperCase(text){

    function isMoreThan10CharInside(textToCheck){
        return textToCheck.length>10;
    }

    if (isMoreThan10CharInside(text)){
        return text.toUpperCase();
    }else{
        return text;
    }
}

console.log(ifMoreThan10CharUpperCase('il mio cane reosa non è in forma'));
//------------------------------------------------------------------------
//  RICORSIONE
