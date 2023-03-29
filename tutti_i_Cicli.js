
//              TUTTI I CICLI IN JAVASCRIPT

const numbers = [9, 8, 7, 1, 2, 3];

//  While
let i = 0
while (i < numbers.length) {
    const element = numbers[i];
    console.log(element);
    i++;
}

//  For
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);

}
//  Do While

let j = 0
do {
    const element = numbers[j];
    console.log(element);
    j++;
} while (j < numbers.length);

//  For Of
for (const element of numbers) {
    console.log(element);
}

//  For Each
numbers.forEach((element) => console.log(element))

// Map
numbers.map((element) => element * 2)

//  Filter
numbers.filter((element) => element % 2 === 0)

//  Reduce
numbers.reduce((previosElement, currentElement) => previosElement + currentElement, 0)

//  For IN per ciclare gli oggetti
const simone = {
    name:'Simone',
    surname:'Maccarone',
    NickName:'Coder-Monkey',
    yob: 2003
}

for (const key in simone) {
    if (Object.hasOwnProperty.call(simone, key)) {
        const value = simone[key];
        
        console.log(`simone ha la proprioeta ${key} associata al valore ${value}`)
    }
}