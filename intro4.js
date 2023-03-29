// --------------------------   Objects and Arrays  ---------------------------------
//  Arrays

// let pippo = [15, 3, 23, 34, 21];
// let pluto = [1, 'ciao', false]; // MALISSIMO!!!!!!


/*
pippo.push(100);           // [15, 3, 23, 34, 21, 100];

const pluto= pippo.pop();        //  [15, 3, 23, 34, 21];
const paperino = pippo.pop();    //  [15, 3, 23, 34];

console.log(pippo); // [15, 3, 23, 34]
console.log(pluto); // 100
console.log(paperino); // 21
*/

// pippo.unshift(200); // [200, 15, 3, 23, 34, 21]

// const paperone = pippo.shift(); [15, 3, 23, 34, 21]
// const paperina = pippo.shift(); [3, 23, 34, 21]

// console.log(pippo);     //[3, 23, 34, 21]
// console.log(paperone);  //200
// console.log(paperina);  //15


// console.log(pippo);
// pippo.pop();
// console.log(pippo); // a volte il log non + affidabile

// const arrayOfStrings = ['andrea', 'jing', 'valentina', 'vlad'];

// for (let i = 0; i < arrayOfStrings.length; i++) {
//     const element = arrayOfStrings[i];
//     console.log(element);
// }

// const indexOfJing = arrayOfStrings.indexOf('Jing');
// console.log(indexOfJing);
// const indexOfSimone = arrayOfStrings.indexOf('simone');
// console.log(indexOfSimone);
// arrayOfStrings[0] = 'pietro';
// console.log(arrayOfStrings);

// --------------------------   Objects and Arrays  ---------------------------------
// Objects // oggetto

// const andrea = {
//     name: 'Andrea',
//     surname: 'Asioli',
//     yob: 1978,
//     isMarried: false,
//     pupils: ['Simone', 'jing', 'valentina', 'vlad'],
//     dog: {
//         name: 'ariel',
//         breed: 'border-collie'
//     },
//     'cool car': 'bmw'
// }

// console.log(andrea);
// console.log(andrea.surname);
// console.log(andrea['yob']);
// console.log(andrea['coool car']);

//--------------------------------------------------------------------------------------------
//  DA ARRAY A OGGETTI E VICEVERSA

// const arielloArrey = ['ariel', 'border-collie', 'maschio', 'bianco e nero'];

// console.log(arielloArrey);

// const arielloObj = {
//     name: arielloArrey[0],
//     breed: arielloArrey[1],
//     gender: arielloArrey[2],
//     color: arielloArrey[3]
// }
// console.log(arielloObj);

// const newArielloArray = Object.values(arielloObj);

// console.log(newArielloArray);

// const newKeysArray = Object.keys(arielloObj);

// console.log(newKeysArray);

//---------------------------------------------------------------------------------------------
//                       VALUE TYPES(array) AND REFERECE TYPES(oggetti)
// let pippo = 5;
// let pluto = pippo;
// pippo = 7;

// console.log(pippo); // 7   pippo diventato da 5 a 7
// console.log(pluto); // 5   pluto  è rimasto "indietro" e resta a 5

// let topolino = { yob: 1930, name: 'micky mouse' };
// let newTopolino = topolino;
// topolino.yob = 1950;

// console.log(topolino.yob);          // entrambi sono cambiati
// console.log(newTopolino.yob);


// function sum2(selectedNumber) {
//     return selectedNumber + 2;
// }

// let paperino = 5;

// let basettoni = sum2(paperino);

// console.log(paperino);
// console.log(basettoni);

// function make2YearsOlder(person) {
//     person.yob = person.yob + 2;
//     return person;
// }

// let simone = { name: 'Simone', yob: 1978 }

// let olderSimone = make2YearsOlder(simone);

// console.log(simone);
// console.log(olderSimone);



// function make2YearsOlderWithClone(person) {
//     // let clone = {name: person.name, yob: person.yob};    //CLONAZIONE LENTA
//     let clone = { ...person };                                 //CLONAZIONE VELOCE
//     clone.yob = clone.yob + 2;
//     return clone;
// }

// let andrea = { name: 'andrea', yob: 2003 };
// let olderAndrea = make2YearsOlderWithClone(andrea);

// console.log(andrea);
// console.log(olderAndrea);

//---------------------------------------------------------------------------------------------
//                       DESTRUTTURARE

// const libro = {
//     titolo: 'la divina commedia',
//     autore: 'dante alighieri',
//     anno: 2019,
//     paese:'italia',
//     casaEditrice:'einaudi'
// }

// // const titolo = libro.autore;
// // const autore= libro.autore;

// const  {titolo, autore} = libro;

// console.log(titolo, autore);

//---------------------------------------------------------------------------------------------
//          JSON

// const libro = {
//     titolo: 'la divina commedia',
//     autore: 'dante alighieri',
//     anno: 2019,
//     paese: 'italia',
//     casaEditrice: 'einaudi'
// }

// const libroInStringa = JSON.stringify(libro);

// console.log(libro);
// console.log(libroInStringa);



// const libroInStringa2 = '{"titolo":"iliade","autore":"omero","anno":2010,"paese":"italia","casaEditrice":"giunti"}'

// const libro2 = JSON.parse(libroInStringa2);

// console.log(libroInStringa2);
// console.log(libro2);

//---------------------------------------------------------------------------------------------
//FILTER
// 1) scrivere una funzioneche dato un array  di numeri restituisce un array con i numeri maggiori o uguali a 0

// const arrayNumbers = [100, -23, 0, -234, 1001, 1, 34, -12];

// function filterNegative(array) {
//     const tempArray =[];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//         if(element >= 0){
//             tempArray.push(element);
//         }    
//     }
//     return tempArray;
// }
// console.log(filterNegative(arraynumber)) // [100, 0, 1001, 1, 34]

// MAP
// 2) SCRIVERE UNA FIMZIONE CHE DATO IM ARRAY DI NUMERI LI MOLTIPLICA TUTTI  PER DUE

// const arrayNumbers1 = [100, -23, 0, -234, 1001, 1, 34, -12];

// function multiplyAllElementsby2(array){
//     const tempArray=[];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//         const result = element*2;
//         tempArray.push(result);
//     }
//     return tempArray;
// }
// console.log(multiplyAllElementsby2(arrayNumbers)) // [200, -46, 0, 468, 2002,2,68, -24]

//REDUCE
//3) CREARE UNA FUNZIONE CHE SOMMA TUTTI GLI ELEMENTI DI UN ARRAY DI NUMERI

// const arrayNumbers = [100, -23, 0, -234, 1001, 1, 34, -12];

// function sumAllElements(array){
//     let tempNumber=0;
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//         tempNumber= tempNumber+element;        
//     }
//     return tempNumber;
// }
// console.log(sumAllElements(arrayNumbers)) // 867


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
    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];

    let result = Math.max(...numbers3)
    tempArray.push(result)
    // }
    return tempArray
}

console.log('ESERCIZIO (math.max) 7.1', maxElement2(numbers3)) //15



//-----------   esercizio   ------------------
/*
const simone = {
    name: 'Simone',
    surname: 'Maccarone',
    yob: 2003,
    nickname: 'Coder Monkey',
    email: 'superpippo@gmail.com'
}
const davide = {
    name: 'Davide',
    surname: 'Consigliere',
    yob: 1989,
    nickname: 'Dave',
    email: 'Dave89pippo@gmail.com'
}

const pietro = {
    name: 'Pietro',
    surname: 'Viglino',
    yob: 1988,
    nickname: 'Pepo999',
    email: 'Pepo999@gmail.com'
}
const francesco = {
    name: 'Francesco',
    surname: 'Badile',
    yob: 1993,
    nickname: 'Sushine Mocha',
    email: 'SushineMocha@gmail.com'
}
const jing = {
    name: 'Jing',
    surname: 'Wang',
    yob: 1993,
    nickname: 'MadeInCina',
    email: 'miticacina@gmail.com'
}
const valentina = {
    name: 'valentina',
    surname: 'Cherubini',
    yob: 2001,
    nickname: 'memedesima',
    email: 'memedesima2001@gmail.com'
}
const vlad = {
    name: 'Vlad',
    surname: 'Scacchiera',
    yob: 1997,
    nickname: 'Giallo&Blue',
    email: 'shhhacchhhiera@gmail.com'
}
const daniele = {
    name: 'Daniele',
    surname: 'Bugioni',
    yob: 1999,
    nickname: 'sekio',
    email: 'secchiello@gmail.com'
}
const luis = {
    name: 'Luis',
    surname: 'Alberto',
    yob: 1993,
    nickname: 'Equadorrrr',
    email: 'elmessicanoporfavor@gmail.com'
}
const davideC = {
    name: 'Davide',
    surname: 'Cresta',
    yob: 19,
    nickname: 'Crestinainina',
    email: 'crestinainina@gmail.com'
}


const myClass = [simone, davide, pietro, francesco, jing, valentina, daniele, luis, vlad, davideC];

for (let i = 0; i < myClass.length; i++) {
    let superClass = myClass[i];

    // console.log('NOME:', + superClass.name +' ' + superClass.surname +' ' + `(${superClass.nickname})`)
    // console.log('ETA:', superClass.yob);
    // console.log('EMAIL:', superClass.email);

    console.log('NOME: ', superClass.name +' ' + superClass.surname + ' ' +  `(${superClass.nickname})`+ '\n'
    +'ETA: ', superClass.yob + '\n'
    +'EMAIL: ', superClass.email);

//     const description =
//     `NOME: ${superClass.name} ${superClass.surname} (${superClass.nickname})
// ETA': ${2023-superClass.yob}
// EMAIL:${superClass.email}`
//     console.log(description);
}*/

//----------------------------------------