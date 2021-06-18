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
        peso: 40
    },
    {
        nome : 'saetta',
        peso: 70
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
let pesoBiciLeggera = 100;
debugger
for (let i = 0; i < bici.length; i++) {
    
    const { peso } = bici[i];
    console.log(peso);
    if (peso < pesoBiciLeggera) {
        biciLeggera = bici[i];
        pesoBiciLeggera = peso;
        
        console.log(biciLeggera);
        console.log(pesoBiciLeggera);
    }
    
}

console.log(biciLeggera);
document.getElementById('result').innerHTML = `La bici più leggera è: ${biciLeggera.nome}, con un peso di : ${biciLeggera.peso} `;



