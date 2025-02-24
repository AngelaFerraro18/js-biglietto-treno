//chiedere all'utente quanti km vuole percorrere
//il dato ottenuto sarà convertito in tipo: numero
const kilometres = parseInt(prompt('Ciao! Quanti chilometri vuoi percorrere?'));
console.log(kilometres + ' km');

//chiedere all'utente quanti anni ha
//il dato ottenuto sarà convertito in tipo: numero
const age = parseInt(prompt('Scrivi la tua età:'));
console.log(age + ' anni');

//il prezzo del biglietto è = km determinati dall'utente per 0.21 € al km (1km = 0.21€)
const rateKm = 0.21;
let ticketPrice = kilometres * rateKm;

if (age < 18) {
    //se l'utente è minorenne, allora avrà uno sconto del 20%
    const rateKm = 0.21;
    let ticketPrice = kilometres * rateKm;
    const discount = 20;
    ticketPrice = ticketPrice - ((ticketPrice * discount) / 100);
    //il prezzo finale sarà stampato con massimo due decimali
    console.log(`Il costo del tuo biglietto è ${ticketPrice.toFixed(2)}€`);
} else if (age >= 65) {
    //se l'utente è over 65, allora avrà uno sconto del 40%
    const rateKm = 0.21;
    let ticketPrice = kilometres * rateKm;
    const discount = 40;
    ticketPrice = ticketPrice - ((ticketPrice * discount) / 100);
    //il prezzo finale sarà stampato con massimo due decimali
    console.log(`Il costo del tuo biglietto è ${ticketPrice.toFixed(2)}€`);
} else {
    //se nessuna delle condizioni precedenti è vera, l'utente pagherà il prezzo pieno
    //il prezzo finale sarà stampato con massimo due decimali
    console.log(`Il costo del tuo biglietto è ${ticketPrice.toFixed(2)}€`);
}
