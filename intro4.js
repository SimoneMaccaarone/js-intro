// --------------------------   Objects and Arrays  ---------------------------------

let pippo = [15, 3, 23, 34, 21];
// let pluto = [1, 'ciao', false]; // MALISSIMO!!!!!!


/*
pippo.push(100);           // [15, 3, 23, 34, 21, 100];

const pluto= pippo.pop();        //  [15, 3, 23, 34, 21];
const paperino = pippo.pop();    //  [15, 3, 23, 34];

console.log(pippo); // [15, 3, 23, 34]
console.log(pluto); // 100
console.log(paperino); // 21
*/
/*
pippo.unshift(200); // [200, 15, 3, 23, 34, 21]

const paperone = pippo.shift(); [15, 3, 23, 34, 21]
const paperina = pippo.shift(); [3, 23, 34, 21]

console.log(pippo);     //[3, 23, 34, 21]
console.log(paperone);  //200
console.log(paperina);  //15
*/

// console.log(pippo);
// pippo.pop();
// console.log(pippo); // a volte il log non + affidabile

const arrayOfStrings =['andrea', 'jing', 'valentina', 'vlad'];

for (let i = 0; i < arrayOfStrings.length; i++) {
    const element = arrayOfStrings[i];
    console.log(element);

}

// 1) scrivere una funzione che prende come parametro un array di numeri e fa console.log dei numeri con la logica fizzbuzz

//2) scrivere una funzione che prende come parametri le stringhe e logga quelle piu piccole di 5 caratteri

//3) scrivere una funzione che come parametro una stinga composta dai primi 5 caratteri convertiti in maiscoli

//4) scrivere una funzione che prende come parametro una stringa e restituisce la lunchezza della stringa senza spazi
//--------------------------------------------------------------------------------------------------------

// 1) scrivere una funzione che prende come parametro un array di numeri e fa console.log dei numeri con la logica fizzbuzz

const scatola = [3, 15, 10, 8, 4];

function printArrayFizzBuzzLogic(arrayOfNumber){
    if (scatola % 3 === 0 && scatola % 5 === 0) {
        console.log('FizzBuzz' );
    } else if (scatola % 5 === 0) {
        console.log('Buzz');
    } else if (scatola % 3 === 0) {
        console.log('Fizz')
    } else {
        console.log(scatola);
 
    } return scatola;
}

printArrayFizzBuzzLogic(scatola);
//fizz
//fizzbuzz
//buzz
//8
//4