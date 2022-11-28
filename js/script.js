bottone = document.getElementById("genera");
 bottone.addEventListener('click', function()
{
let biglietto_1;
let km = document.getElementById('text-km').value;
let eta = document.getElementById('text-age').value;

if ( eta = 'maggiorenne' ) {
    biglietto_1 =  (km * 0.21)   
}else if ( eta = 'minorenne' ){
    biglietto_1 = km*0.21
    biglietto_1 -= (biglietto_1/100)*20
}else( eta = 'ovessr-65' ) {
    biglietto_1 = km*0.21
    biglietto_1 -= (biglietto_1/100)*40
}

console.log(biglietto_1);

const biglietto_1_readable = biglietto_1.toFixed(2)

    document.getElementById("costo-biglietto").innerHTML = biglietto_1;
    document.getElementById("myText").innerHTML = costo-biglietto;
} );