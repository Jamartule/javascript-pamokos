//6
// let studijos = ['Informatika', 'Vadyba', 'IT'];

// console.log(studijos[0]);
// console.log(studijos[1]);
// console.log(studijos[2]);
const studijuProgramos = ['IT', 'Verslas', 'Teisė'];

for (let i = 0; i < studijuProgramos.length; i++) {
  console.log(studijuProgramos[i]);
}

//7

// let salys = ['Gruzija', 'Graikja', 'Albanija'];

// console.log('Šalis:' + salys[0]);
// console.log('Šalis:' + salys[1]);
// console.log('Šalis:' + salys[2]);

const salys = ['Gruzija', 'Graikja', 'Albanija'];
for (let i = 0; i < salys.length; i++) {
  console.log(`Šalys: ${salys[i]}`);
}

//8

let projektas = ['Statybos', 'Renovacijos', 'Prevencijos', 'Stogo remonto'];

for (let i = 0; i < projektas.length; i++) {
  console.log(i + 1 + '-asis projektas ' + projektas[i]);
}

//9

let skaiciuMasyvas = [5, 6, 9, 8, 2, 1, 4];

for (let i = 0; i < skaiciuMasyvas.length; i++) {
  if (skaiciuMasyvas[i] > 5) {
    console.log(skaiciuMasyvas[i]);
  }
}

//10

let masyvoSuma = [5, 6, 9, 8, 2, 1, 4];
let sum = 0;

for (let i = 0; i < masyvoSuma.length; i++) {
  if (masyvoSuma[i] % 4 === 0) {
    sum += masyvoSuma[i];
  }
}
console.log('Suma, kurios skaičiai dalijasi iš 4: ' + sum);

//11

let pazymiuMasyvas = [8, 9, 6, 5, 4, 7];

let vidurkis = [];
