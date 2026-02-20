const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

let nameArr = [];

names.forEach(function (name) {
    nameArr.push(`'${name}'`);
});

console.log(nameArr.join(', '));