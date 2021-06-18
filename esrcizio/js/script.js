// ES5:

// Array oggetti bici:
var bici = [
    {
        nome : 'razzo',
        peso : 20
    },
    {
        nome : 'scheggia',
        peso : 30
    },
    {
        nome : 'pinnarello',
        peso : 10
    }
];

// Per vedere qual'è la bici che pesa meno : 
var biciLeggera;
var LapiùLeggera;

for (var x = 0; x < bici.length; x++) {
    var weight = bici[x].peso;
    var n = bici[x].nome;
    if (typeof LapiùLeggera === 'undefined' || weight < LapiùLeggera) {
        biciLeggera = bici[x];
        LapiùLeggera = weight;   
    }
}
console.log(n)
console.log(LapiùLeggera)
document.getElementById('result').innerHTML = `La Bici con il peso minore è: ${n} con un peso di: ${LapiùLeggera} `;
