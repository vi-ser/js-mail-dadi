/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// creo l'array con le facce del dado
const dieSides = ["1", "2", "3", "4", "5", "6"];
console.log(dieSides);

// genero un numero casuale
let randomNumber = Math.random();

// creo un indice casuale tra gli elementi dell'array
let randomIndex = Math.floor(dieSides.length * randomNumber);

// scelgo l'elemento dell'array con indice generato casualmente
let playerScore = dieSides[randomIndex];

//stampa punteggio giocatore
console.log("Ti è uscito", playerScore);

// ripeto le operazioni per il computer
randomNumber = Math.random();
randomIndex = Math.floor(dieSides.length * randomNumber);
cpuScore = dieSides[randomIndex];

// stampa punteggio computer
console.log("Al computer è uscito", cpuScore);





