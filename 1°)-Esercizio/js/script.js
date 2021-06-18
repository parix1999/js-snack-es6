/* Traccia Snack 1:
Creare un array di oggetti: //
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: 
nome e peso.// Stampare a schermo la bici con peso minore utilizzando 
destructuring e template literal. Risolvetelo prima in versione ES5, 
poi commentate la versione in ES5 e fatelo in ES6. 
 */

// Array:
var bici = [
    {
        nome : 'scheggia',
        peso : 80
    },
    {
        nome : 'tornado',
        peso: 70
    },
    {
        nome : 'saetta',
        peso: 40
    }
];

// Versione ES5:

// var biciLeggera;
// var biciPiùLeggera;

// for (var i = 0; i < bici.length; i++) {
    
//     var weight = bici[i].peso;
    
//     if (typeof biciPiùLeggera === 'undefined' || weight < biciPiùLeggera) {
//         biciLeggera = bici[i];
//         biciLeggera = weight;
//     }

// }

// console.log(biciLeggera);

// Versione ES6:

let biciLeggera;
let biciPiùLeggera;

for (let i = 0; i < bici.length; i++) {
    
    const { peso } = bici[i];
    
    if (typeof biciPiùLeggera === 'undefined' || weight < biciPiùLeggera) {
        biciLeggera = bici[i];
        biciLeggera = peso;
    }

}
const { nome } = biciLeggera;

console.log(biciLeggera)
;
document.getElementById('result').innerHTML = `La bici più leggera è: ${nome} con un peso di : ${biciLeggera} `;



