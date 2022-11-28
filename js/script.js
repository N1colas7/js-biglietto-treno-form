let biglietto_1;
let km;
let eta;

if ( eta >= 18 && eta <= 63 ) {
    biglietto_1 =  (km * 0.21)   
}else if ( eta <= 17 ){
    biglietto_1 = km*0.21
    biglietto_1 -= (biglietto_1/100)*20
}else{
    biglietto_1 = km*0.21
    biglietto_1 -= (biglietto_1/100)*40
}

const biglietto_1_readable = biglietto_1.toFixed(2)
console.log( biglietto_1 );
