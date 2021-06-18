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
    console.log(bici[x])
    var weight = bici[x].peso;
    if (typeof LapiùLeggera === 'undefined' || weight < LapiùLeggera) {
        biciLeggera = bici[x];
        biciLeggera = weight;
    }
}
console.log(LapiùLeggera)
