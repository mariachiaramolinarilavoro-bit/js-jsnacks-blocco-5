const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]


const incrementNumb = numbers.map(function (numb) {
    return numb + 1
});

console.log(incrementNumb.join(', '));

/* const incrementNumb2 = numbers.map(numb => numb + 1);
console.log(incrementNumb2); */