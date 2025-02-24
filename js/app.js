//chiedere all'utente quanti km vuole percorrere
//il dato ottenuto sarà convertito in tipo: numero
const kilometres = parseInt(prompt('Ciao! Quanti chilometri vuoi percorrere?'));
console.log(kilometres);

//chiedere all'utente quanti anni ha
//il dato ottenuto sarà convertito in tipo: numero
const age = parseInt(prompt('Scrivi la tua età:'));
console.log(age);

//il prezzo del biglietto è = km determinati dall'utente per 0.21 € al km (1km = 0.21€)
const rateKm = 0.21;
let ticketFullPrice = kilometres * rateKm;

if (age < 18) {
    //se l'utente è minorenne, allora avrà uno sconto del 20%
    discountTeen = 20;
    teenTicket = (ticketFullPrice * discountTeen) / 100;
    //il prezzo finale sarà stampato con massimo due decimali
    console.log(`Il costo del tuo biglietto è ${teenTicket.toFixed(2)}€`);
} else if (age >= 65) {
    //se l'utente è over 65, allora avrà uno sconto del 40%
    discountSenior = 40;
    seniorTicket = (ticketFullPrice * discountSenior) / 100;
    //il prezzo finale sarà stampato con massimo due decimali
    console.log(`Il costo del tuo biglietto è ${seniorTicket.toFixed(2)}€`);
} else {
    //se nessuna delle condizioni precedenti è vera, l'utente pagherà il prezzo pieno
    //il prezzo finale sarà stampato con massimo due decimali
    console.log(`Il costo del tuo biglietto è ${ticketFullPrice.toFixed(2)}€`);
}
