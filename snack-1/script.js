const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

let nameString = ''

names.forEach(function(name){
 nameString += `${name} `
}) 
console.log(nameString);