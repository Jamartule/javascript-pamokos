// uzduotys 1

//1
// Skaicių nuo 1 iki 100 suma

let suma = 0;
for (let i = 1; i <= 100; i++) {
  suma += i;
  {
    console.log(`Suma nuo 1 iki 100: ${suma}`);
  }
}

let start = 1;
let end = 100;

let sum = 0;
for (let i = start; i <= end; i++) {
  sum += i;
}
console.log(sum);
// 2
// Lyginių skaičių suma nuo 20 iki 50
let suma2 = 0;

for (let i = 20; i <= 50; i++) {
  if (i % 2 === 0) {
    // Patikriname, ar skaičius yra lyginis
    suma2 += i;
  }

  {
    console.log(`Lyginių skaičių suma nuo 20 iki 50: ${suma2}`);
  }
}

//3

// Nelyginių skaičių suma nuo 30 iki 60
// let suma3 = 2;

// for (let i = 30; i <= 60; i++) {
//   if (i % 2 !== 0) {
//     // Patikriname, ar skaičius yra nelyginis
//     suma3 += i;
//   }
//   {
//     console.log(`Nelyginių skaičių suma nuo 30 iki 60: ${suma3}`);
//   }
// }
let sumaNelyginiai = 0;

for (let i = 30; i <= 60; i++) {
  if (i % 2 !== 0) {
    sumaNelyginiai += i;
  }
}

console.log(sumaNelyginiai);

//4

let suma4 = 0;

for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    suma += i;
  }
}
console.log(suma);
