const bottone = document.getElementById('genera');
bottone.addEventListener('click', function()
{
let text = document.getElementById("myText").value;
let biglietto_1;
let km = document.getElementById('text-km').value;
let eta = document.getElementById('text-age').value;

if ( eta == 'over65' ){
    biglietto_1 = (0.21 * km * 0.6).toFixed(2);
}
else if ( eta == 'minorenne' ){
    biglietto_1 = (0.21 * km * 0.8).toFixed(2);
} 
else{
    biglietto_1 =  (0.21 * km).toFixed(2);
}    

document.getElementById('nome-cognome').innerText = text
document.getElementById('costo-biglietto').innerHTML = biglietto_1;
} );

const bottone_2 = document.getElementById('annulla')
bottone_2.addEventListener('click', function()
{
let text = document.getElementById('myText');
text.value= "";
let km = document.getElementById('text-km');
km.value="";
let eta = document.getElementById('text-age');
eta.value="";
let nome = document.getElementById('nome-cognome');
nome.innerHTML="";
let costo = document.getElementById('costo-biglietto');
costo.innerHTML = "";
})