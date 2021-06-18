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

    const {nome, falli} = teams[i];
    newArray.push(nome);
    newArray.push(falli);


}
console.log(teams);
console.log(newArray);

//Prova di stampa tabellare:
tableHtml = document.querySelector('.table-container');

for (let i = 0; i < teams.length; i++) {
    // Scrittura tableRow a livello di stringa:
    let tableRow = '<ul>'; // Una variabile locale: 
    var lista = teams[i];

    tableRow += '<li>' + lista.nome + '</li>';
    tableRow += '<li>' + lista.falli + '</li>';
    tableRow += '<li>' + lista.punti + '</li>';

    tableRow += '</ul>';
    tableHtml.innerHTML += tableRow;
}


