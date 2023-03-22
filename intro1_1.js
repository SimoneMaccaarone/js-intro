
//------------------------------------------------------------
//  OPERATORI MATEMATICI

console.log('this is a string','hello world');  // stringe = ('parola')
console.log('this is a number',13.34);         //  number = (13)
console.log('this is a bulea\'C',false);      //   bulean = (false) 

console.log('somma',10+5);                  //somma
console.log('sottrazione',10-5);           //sottrazione
console.log('moltiplicazione',10*5);      //moltiplicazione
console.log('divisione', 10/5);          //divisione

console.log('modulo(resto nella divisione)', 10%3);

console.log('il numero 11 è pari?', 11%2 ===0);

console.log('potenza', 10**2);

console.log('senza parentesi', 10+5*2);
console.log('con parentesi', (10+5)*2);
console.log('radice quadrata(usando Math)', Math.sqrt (81));

//------------------------------------------------------------

console.log('la casa di mia nonna' + ' è molto bella'); // concatenazione

console.log(`la somma di 5 e 10 è ${10+5}`);          // stringa interpolata

//------------------------------------------------------------
//  OPERATORI DI CONFRONTO

console.log(10==10);

console.log('ugualianza con conversione','10'==10);      //sbagliato
console.log('ugualianza senza conversione','10'===10);  //giusto
console.log('ugualianza tra numeri',10===10);
console.log('ugualianza tra stringhe','ciao'==='ciao');     //key sensetive
console.log('ugualianza tra stringhe','CIAO'==='ciao');    //key sensetive

console.log('disugualianza tra numeri',10 !=10);
console.log('disugualianza tra stringhe','pippo' !== 'pluto');
console.log('disugualianza tra numeri',true !==false);

console.log('maggiore', 10>5);
console.log('maggiore o uguale', 10>=10);
console.log('minore', 10>10);
console.log('minore o uguale', 10<=10);

//------------------------------------------------------------
//  OPERATORI LOGICI

console.log('operatore NOT (true)', !true);
console.log('operatore NOT (false)', !false);

console.log('operatoer AND (ture true)', true && true);       // true
console.log('operatoer AND (true false)', true && false);    // false
console.log('operatoer AND (false true)', false && true);   //  false
console.log('operatoer AND (false false)', false && false); //  false

console.log('operatoer OR (true true)', true || true);      //  true
console.log('operatoer OR (true false)', true || false);    //  true
console.log('operatoer OR (false true)', false || true);    //  true
console.log('operatoer OR (false false)', false || false);  //  false

//------------------------------------------------------------
//  OPERATORE UNARIO (typeof)

console.log('typeof 12',typeof 12);
console.log('typeof Hello Word',typeof 'Hello Word');
console.log('typeof true', typeof true);

//------------------------------------------------------------

console.log('infinito positivo', Infinity);
console.log('infinito negativo', -Infinity);
console.log('Not a Number', NaN);
console.log('0 diviso 0', 0/0);


console.log('undefined,',undefined);
console.log('null', null);

