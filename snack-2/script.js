const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'



/* let namePeople = ''
for (let i = 0; i < people.length; i++) {
  const element = people[i];
//console.log(element.name); 
  

let obj = element.name
let space = `'${obj}' `

namePeople += space
}
console.log(namePeople); */



/* let namePeople = [];

people.forEach(function (obj) {
  namePeople.push(`${obj.name}`)
  console.log(obj.name);

});
console.log(namePeople.join(', ')); */


const namePeople = people.map(function(name){
  return name.name
})

console.log(namePeople);
