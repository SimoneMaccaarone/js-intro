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

function duplicaDue(2)


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


function elevazioneAPotenza(base, esponente){
    if(esponente===undefined){
        const risultato = base**2;
        return risultato;
    }else{
        const risultato = base**esponente;
        return risultato;
    }
}

function elevazioneAPotenzaConDefault(base,esponente=2){
    const risultato = base**esponente;
    return risultato;
}
console.log(elevazioneAPotenzaConDefault(3));

//////////////////////////////////////////////
//  esercizi

/*  1) scrivere una funzione che dato un numero se è positivo lo moltiplica per due se no NaN
    2) scrivere una funzione che data una stringa restituisca la sua versione maiuscola
    3) scirvere una funzione che mi restituisca vero se è piu lunga di 10 caratteri alrimenti restituisca falsa
    4) scrivere una funzione pura che restituisca la scacchiera
    5) scrivere una funzione che dato un numero restituisca una strunga con la logica fizz buzz
    6) scrivere una funzione che data una stringa restituisca una stringa composta solo dai caratteri dispari dell orginale 