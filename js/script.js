let biglietto_1;
let km = document.getElementById('text-km').value;
let eta = document.getElementById('text-age').value;

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

function myFunction() {
    var x = document.getElementById("biglietto_1").value;
    document.getElementById("costo-biglietto").innerHTML = x;
}


function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("nome-cognome").innerHTML = x;
}
