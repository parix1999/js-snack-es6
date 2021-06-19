/**
]]Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
Svilupparlo in ES6.
 */

// Array con oggetti, delle squadre di calcio :
// Inizio flusso => controlla le array con gli oggetti:
const teams = [
    {
        nome : 'Liverpool',
        punti : 0,
        falli : 0
    },
    {
        nome : 'juventus',
        punti : 0,
        falli : 0
    },
    {
        nome : 'Barcellona',
        punti : 0,
        falli : 0
    }
];

// =>  Qui c'è la funzione e il flusso entrerà solo se sarà chiamata in causa:
// Funzione per generare i numeri random fatta con ES6:
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const newArray = [];
// => Inizia il for che prende tutti quanti gli elementi dentro alla array oggetti per inserire il valore ovunque richiesto:
for (let i = 0; i < teams.length; i++) {
    // Si inseriscono i numeri random dentro agli oggetti punti e falli:
    teams[i].punti = randomNumber(1, 50);
    teams[i].falli = randomNumber(1, 20);
    console.log(teams[i]);

    const {nome, falli} = teams[i];
    newArray.push(nome);
    newArray.push(falli);
    console.log(newArray);


}
console.log(teams);
console.log(newArray);

//Prova di stampa tabellare:
tableHtml = document.querySelector('.table-container');

let penalty; // qui ci va l'oggetto falli
let falliMax = 0; // i falli maggiori 

for (let x = 0; x < teams.length; x++) {
    const {falli} = teams[x];
    if (falli > falliMax) {
        penalty = teams[x];
        falliMax = falli;
    }
}
console.log(falliMax)
for (let i = 0; i < teams.length; i++) {
    // Scrittura tableRow a livello di stringa:
    let tableRow = '<ul class="yellow">'; // Una variabile locale: 
    var lista = teams[i];
    
    
    tableRow += '<li>' + lista.nome + '</li>';
    if (lista.falli === falliMax){
        tableRow += '<li class="prova">' + lista.falli + '</li>';

    }else{
        tableRow += '<li>' + lista.falli + '</li>';
    }
    
    
    tableRow += '<li>' + lista.punti + '</li>';

    tableRow += '</ul>';
    tableHtml.innerHTML += tableRow;
}




