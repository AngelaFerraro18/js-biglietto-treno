const kilometres = parseInt(prompt('Ciao! Quanti chilometri devi percorrere?'));
console.log(kilometres);
const age = parseInt(prompt('Scrivi la tua età:'));
console.log(age);

const rateKm = 0.21;
let ticketFullPrice = kilometres * rateKm;
console.log(ticketFullPrice);

if (age < 18){
    discountTeen = 20; 
    teenTicket = (ticketFullPrice * discountTeen) / 100;
    console.log(`Il costo del tuo biglietto è ${teenTicket}€`);
} else if (age >= 65){
    discountSenior = 40; 
    seniorTicket = (ticketFullPrice * discountSenior) / 100;
    console.log(`Il costo del tuo biglietto è ${seniorTicket}€`);
}
