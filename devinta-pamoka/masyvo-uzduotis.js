//uzduotis 1/2
// pirma

// Sukuriame masyvą su maisto produktais
let maistoMasyvas = ['obuolys', 'bananas', 'morkos'];

// Išvedame pirmą ir paskutinį narį
console.log('Pirmas produktas: ' + maistoMasyvas[0]);
console.log('Paskutinis produktas: ' + maistoMasyvas[maistoMasyvas.length - 1]);

// Pasirenkame du produktus iš masyvo vidurio
let vidurioIndeksas = Math.floor(maistoMasyvas.length / 2); // Vidurio indeksas

// Jei masyvas turi lyginį skaičių elementų, pasirenkame du vidurinius produktus
if (maistoMasyvas.length % 2 === 0) {
  console.log(
    'Viduriniai produktai: ' +
      maistoMasyvas[vidurioIndeksas - 1] +
      ' ir ' +
      maistoMasyvas[vidurioIndeksas]
  );
} else {
  console.log('Vidurinis produktas: ' + maistoMasyvas[vidurioIndeksas]);
}

// Išvedame masyvo elementų kiekį
console.log('Masyve yra ' + maistoMasyvas.length + ' produktų.');

let skaiciai = [9, 7, 5, 3, 4, 6, 8];
console.log(skaiciai[0] + 'Pirmas skaicius');
console.log(skaiciai[skaiciai.length - 1] + 'Paskutinis skaicius');
console.log(skaiciai[(2, 3)] + '2 Skaiciai is vidurio');
console.log(skaiciai.length);

//2 uzduotis

const masyvas = [1, 2, 3];
console.log(masyvas);

masyvas[0] = 2;
masyvas[1] = 1;
masyvas[2] = 3;

// Sukuriame masyvą su automobilių objektais
let automobiliai = [
  { marke: 'Toyota', modelis: 'Corolla', metai: 2015, spalva: 'raudona' },
  { marke: 'Honda', modelis: 'Civic', metai: 2018, spalva: 'mėlyna' },
  { marke: 'Ford', modelis: 'Focus', metai: 2020, spalva: 'juoda' },
  { marke: 'BMW', modelis: 'X5', metai: 2021, spalva: 'balta' },
  { marke: 'Audi', modelis: 'A3', metai: 2019, spalva: 'sidabrinė' },
];

// Išvedame visą masyvo informaciją
console.log('Pradinė masyvo informacija:');
automobiliai.forEach((auto, index) => {
  console.log(
    `Automobilis ${index + 1}: Markė - ${auto.marke}, Modelis - ${
      auto.modelis
    }, Metai - ${auto.metai}, Spalva - ${auto.spalva}`
  );
});

// Pakeičiame trijų automobilių reikšmes
automobiliai[1] = {
  marke: 'Tesla',
  modelis: 'Model 3',
  metai: 2023,
  spalva: 'raudona',
}; // Pakeičiame 2-ą automobilį
automobiliai[3] = {
  marke: 'Mercedes',
  modelis: 'GLA',
  metai: 2022,
  spalva: 'pilka',
}; // Pakeičiame 4-ą automobilį
automobiliai[4] = {
  marke: 'Volkswagen',
  modelis: 'Golf',
  metai: 2021,
  spalva: 'žalia',
}; // Pakeičiame 5-ą automobilį

// Išvedame pakeistą masyvą
console.log('\nPakeista masyvo informacija:');
automobiliai.forEach((auto, index) => {
  console.log(
    `Automobilis ${index + 1}: Markė - ${auto.marke}, Modelis - ${
      auto.modelis
    }, Metai - ${auto.metai}, Spalva - ${auto.spalva}`
  );
});

//3 uzduotis

const masyvaspush = [];

masyvaspush.push('obuolys');
masyvaspush.push('bananas');
masyvaspush.push('kriause');
console.log(masyvaspush);

// Sukuriame tuščią masyvą
let tusciasMasyvas = [];

// Užpildome masyvą įvairiais duomenimis naudojant push()
tusciasMasyvas.push(42); // skaičius
tusciasMasyvas.push('Obuolys'); // tekstas
tusciasMasyvas.push(true); // loginė reikšmė (boolean)
tusciasMasyvas.push([1, 2, 3]); // masyvas (vidinis masyvas)
tusciasMasyvas.push({ name: 'Jonas', age: 30 }); // objektas
tusciasMasyvas.push(null); // `null` reikšmė
tusciasMasyvas.push(undefined); // `undefined` reikšmė

// Išvedame užpildyto masyvo informaciją
console.log('Užpildyto masyvo informacija:');
console.log(tusciasMasyvas);

//4

let produktas = [];

// Sukuriame atsitiktinius skaičius ir užpildome masyvą
for (let i = 0; i < 10; i++) {
  // Užpildysime masyvą 10 atsitiktinių skaičių
  let atsitiktinisSkaicius = Math.floor(Math.random() * 100) + 1; // Skaičiai nuo 1 iki 100
  produktas.push(atsitiktinisSkaicius);
}

// Išvedame užpildyto masyvo informaciją
console.log('Užpildyto masyvo informacija:', Math.random());
console.log(produktas);

// 5

let student1Grades = [];
let student2Grades = [];

//pirmas studentas
student1Grades.push(8); // Pirmas pažymys
student1Grades.push(9); // Antras pažymys
student1Grades.push(7); // Trečias pažymys

//antras studentas
student2Grades.push(6); // Pirmas pažymys
student2Grades.push(10); // Antras pažymys
student2Grades.push(8); // Trečias pažymys

//vidurkiu apskaiciavimas
function calculateAverage(grades) {
  let sum = grades.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum / grades.length;
}
let student1Average = calculateAverage(student1Grades);
let student2Average = calculateAverage(student2Grades);

console.log('Pirmo studento vidurkis: ' + student1Average);
console.log('Antro studento vidurkis: ' + student2Average);

//5 uzduotis su destytoju

let studentas1 = [8, 9, 10, 10];
let studentas2 = [8, 9, 10, 10];

let suma1 = studentas1[0] + studentas1[1] + studentas1[2] + studentas1[3];
let vidurkis1 = suma1 / studentas1.length;

let suma2 = studentas2[0] + studentas2[1] + studentas2[2] + studentas2[3];
let vidurkis2 = suma2 / studentas2.length;

if (vidurkis1 > vidurkis2) {
  console.log('Pirmas mokinys turi didesni vidurki');
} else if (vidurkis2 > vidurkis1) {
  console.log('Antras mokinys turi didesni vidurki');
} else {
  console.log('Abu vidurkiai lygus');
}

// su mokytoju
let skaicius = 1;
const masyvasss = [undefined, null, 1, 'string', {}, true, skaicius];

console.log(masyvasss);
