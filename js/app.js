const kilometres = parseInt(prompt('Ciao! Quanti chilometri vuoi percorrere?'));
console.log(kilometres);
const age = parseInt(prompt('Scrivi la tua età:'));
console.log(age);

const rateKm = 0.21;


if (age < 18) {
    discountTeen = 20;
    teenTicket = (ticketFullPrice * discountTeen) / 100;
    console.log(`Il costo del tuo biglietto è ${teenTicket}€`);
} else if (age >= 65) {
    discountSenior = 40;
    seniorTicket = (ticketFullPrice * discountSenior) / 100;
    console.log(`Il costo del tuo biglietto è ${seniorTicket}€`);
} else {
    ticketFullPrice = kilometres * rateKm;
    console.log(`Il costo del tuo biglietto è ${ticketFullPrice}€`);
}
