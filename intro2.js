
console.log('intro2')

let pippo=5;            // assegnare = mettere oggetto nella scatola (=)
// pippo = 10;         //scatola che si può sovrascrivere più volte
console.log(pippo);

// var pluto = 10;
// pluto=23;
// console.log(pluto);  IL MALE!!!

const paperino = 20;    //costante che non può essere cambiata
//paperino = 17 -> non si può fare
console.log(paperino);

// console.log(clarabella);
// var clarabella=10;

const topolino = 12+80;
console.log(topolino);

const basettoni =56;
const gambaDiLegno = basettoni;
console.log(gambaDiLegno);

const trudy= gambaDiLegno + basettoni;
console.log(trudy);

let qui = 12, quo = 12, qua = 12;
console.log(qui, quo, qua);

let paperoga;
console.log(paperoga);

//const zioPaperone; non è possibile una costante vuota

let macchiNera = 12;
console.log(macchiaNera);
macchiNera = 27;
console.log(macchiaNera);




//  --------- INCREMENTI-----------

let index = 5;

index = index + 5;

index+=5;


let counter = 0;
// ---------------------
counter = counter +1; 

counter+=1;          // SONO LA STESSA COSA

counter++;
// --------------------- 

//  ------- IF, ELSE, ELSE IF ----------

let pippo = true;

if (pippo) {
    console.log('var merda!');
}
else {
    console.log('viva var!');
}

let pluto = 3;
if (pluto !== 3) {
    console.log('viva javascript!!!');
}

let paperino = 5;

if (paperino === 3) {
    console.log('qui');
}
else if (paperono === 5) {
    console.log('quo');
}
else if (paperino === 1) {
    console.log('qua');
}
else {
    console.log('sticazzi');
}

let paperone = 5;
if (paperone < 10) {
    console.log('dollari');
}
else if (paperone < 6) 
{ console.log('euro') }
else { console.log('bitcoin') } 
// ---------------------------------------------

// ------- CICLO WHILE --------

/* while(true){
    console.log('ciao');
} */

// ------------------

/*
let index = 0;

while(index <10){
    index++;
    console.log(index);
}

while(index < -1){
    index--;
    console.log(index);
} */

// --------  FOR    ---------

for (let index = 0; index < 10; index++) {
    console.log(index);
    
}

// -------  ESERCIZI    ------------- 
//  1)    numeri dispari minori di 300
/*
let index =1;
while (index < 300){
    console.log(index);
    index+=2;
}
*/
//  2)    da 10 a 0 e viceversa

//  soluzione 1
for (let ciccio = 10; ciccio >=0 ; ciccio--){
    console.log(ciccio);
}
for(let ciccio= 1; ciccio<=10; ciccio++){
    console.log(ciccio);
}
// ----------

for (let lello = 10; lello >=0 ; lello--){
    console.log(lello);

if(lello>11){
    lello++;
    console.log(lello);
}
}

//  soluzione 3
/*
let pippo=0;
let ciccio=11;

while(pippo<10){
    pippo++;
    console.log(pippo);
if(ciccio>0){
    ciccio--;
    console.log(ciccio);
}
console.log
} */

//  3)     triangolo di cancelletti

