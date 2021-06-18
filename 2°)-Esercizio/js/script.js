/* TRACCIA:
Creare un array di oggetti di squadre di calcio.

Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.

Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i 
cui elementi contengono solo nomi e falli subiti 
e stampiamo tutto in console.
Svilupparlo in ES6.
 */

// Funzione per generare il numero random da 1 a 50:
function randomNumber (){
    return Math.floor(Math.random() * 50 + 1);
}
console.log(randomNumber());
// Array di oggetti:

let teams = [
    {
        nome : 'Liverpool',
        puntiFatti : 0,
        falliSubiti : 0 
    },
    {
        nome : 'Juventus',
        puntiFatti : 0,
        falliSubiti : 0 
    },
    {
        nome : 'PSG',
        puntiFatti : 0,
        falliSubiti : 0 
    }
];

// Iterazione per gli elementi contenuti nella array di oggetti,
for (let i = 0; i < teams.length; i++) {
    // prendo il teams [i] quindi il singolo elemento e ci metto dentro punti fatti e falli con random number
    teams[i].puntiFatti = randomNumber();
    teams[i].falliSubiti = randomNumber();
}

console.log(teams)

// Nuova array :
let newArray = [];

for (let x = 0; x <teams.length; x++) {
    const {nome, falliSubiti} = teams[x];
    newArray[x] = {
        nome,
        falliSubiti
    };

}
console.log(newArray);