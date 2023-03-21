/*let result = prompt('digita un numero',0);

if(result<10)
{
    alert('minore di 10');
}
else if(result<=15)
{
    alert('minore ');
}
else{
    alert('magiore di 10');
} */


//-----------------------------------------------------------

/*
let counter = 0;
do
{
    console.log("ciclo");
    counter = counter + 1;
}
while(counter<=5)

var counter2 = 10;

while(counter2 <=5)
{
 console.log('ciclo2');   
 counter2= counter2 + 1;
}
console.log('fine ciclo 2!'); */

//------------------------------------------------------------
/*
let result = 10;

for (let counter = 0; ; counter=counter + 1)
{
    console.log('counter:'+ counter)
    result = result*3;

    if(counter ==5)
    {   
        console.log('break');
        break;
    }
}

console.log('fine ciclo result'+ result);
*/


// numero da indovinare

let tentativi= 0;
while(true)
{
    let giusto = Number(prompt('INDOVINA IL NUMERO da 1 a 10, HAI 3 TENTATIVI'));
    alert('riprova');
    if(giusto == 9)
    {
        alert('HAI INDOVINATO');
        console.log('HAI INDOVINATO!!!');

        break;
    }
    tentativi=tentativi+1;
    if(tentativi==3)
    {
        alert('hai finito i tentativi ricomincia');
        break;
    }
}



/* switch(result)
{
    case '81':
        alert('RISPOSTA CORRETTA!!!')
        break;
    default:
        alert('SEI STRONZO, RISPOSTA SBAGLIATA AHAHHAHAHAH... scemo')
        break;
} */