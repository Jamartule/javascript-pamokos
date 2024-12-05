//1 uzduotis

// Sukuriame masyvą su žodžiais
const produktai = [
  'pienas',
  'jogurtas',
  'varškė',
  'grietinė',
  'sūris',
  'kefyras',
];

for (let produktas in produktai) {
  console.log(`${produktas} - ${produktai[produktas]}`);
}

// 1 uzduotis
let zodziai = ['medis', 'tvora', 'namas', 'kede', 'stalas'];

for (let indeksas in zodziai) {
  console.log(`${Number(indeksas) + 1} - ${zodziai[indeksas]}`);
}

//2 uzduotis

let produktai2 = ['batonas', 'duona', 'sviestas', 'limonadas'];

// kiek pirkinių yra šiame sąraše
console.log(`Pirkinių sąraše yra ${produktai2.length} prekių.`);

for (let produktas of produktai2) {
  console.log(`- ${produktas}`);
}

//3 uzduotis

let studentoPazymiai = [7, 8, 6, 5, 9, 10];

//pazymiu suma
let suma = 0;
for (let pazymys of studentoPazymiai) {
  suma += pazymys;
}

// vidut pazymiu rezultatas
let vidurkis = suma / studentoPazymiai.length;

// visi pazymiai
console.log('Visi pažymiai:');
for (let pazymys of studentoPazymiai) {
  console.log(`- ${pazymys}`);
}

// gautas viduris
console.log(`Vidutinis pažymių rezultatas: ${vidurkis.toFixed(0)}`);

//4

let kelionės = [120, 145, 90, 320];

console.log('Nuvažiuoti kilometrai per dieną:');
for (let kelione of kelionės) {
  console.log(`- ${kelione} km`);
}

console.log('Kelionės, kurių nuvažiuota daugiau nei 150 km:');
for (let kelione of kelionės) {
  if (kelione > 150) {
    console.log(`- ${kelione} km`);
  }
}
//444444
const kilometrai = [100, 150, 50, 40, 200, 300];
const kilometraiVirs150 = [];

for (let km of kilometrai) {
  if (km > 150) {
    kilometraiVirs150.push(km);
  }
}

console.log(kilometraiVirs150);

//5

const failai = [
  'failas.json',
  'failas.js',
  'failas.html',
  'failmas.txt',
  'failas.css',
];

// Išvedame tik tuos failus, kurių galūnė yra .txt arba .json
console.log('Failai, su kuriais galima dirbti:');
for (let failas of failai) {
  if (failas.endsWith('.txt') || failas.endsWith('.json')) {
    console.log(`- ${failas}`);
  }
}

//5

let failai2 = [
  'ataskaita.txt',
  'duomenys.json',
  'nuotrauka.png',
  'apskaita.csv',
];

for (let failas of failai2) {
  if (failas.endsWith('.txt') || failas.endsWith('.json')) {
    console.log(failas);
  }
}

//22

const automobiliuMarkes = ['bmw', 'audi', 'toyota', 'ford'];

for (let marke of automobiliuMarkes) {
  console.log(`${marke.toUpperCase()} - ${marke.length} raidės`);
}

//23

//23
const kodai = ['404', '401', '500', '501'];
const koduZinutes = [
  'Sasajos klaida',
  'Serverio klaida',
  'Nera duomenu',
  'Dingo internetas',
];

for (let indeksas in kodai) {
  console.log(`${kodai[indeksas]} - ${koduZinutes[indeksas]}`);
}

//24

// Sukuriame masyvą su prekių likučiais
let sandėliolikučiai = [74, 54, 32];

// Išvedame prekių likučius ir per kiek dienų jie bus išpirkti
console.log('Prekės likučiai ir per kiek dienų jie bus išpirkti:');
for (let likutis of sandėliolikučiai) {
  // Apskaičiuojame dienų skaičių, per kurį bus išpirktas likutis
  let dienos = likutis / 5;

  let suapvalintosDienos = Math.round(dienos);

  //  prekių likutis ir dienos
  console.log(
    `${likutis} vnt prekės užteks maždaug ${suapvalintosDienos} dienų`
  );
}

//25

let pažymiaiStudento = [1, 2, 6, 9, 8, 7, 5];

// Apskaičiuojame pažymių vidurkį
let suma4 = 0;
let neigiamiPažymiai = 0; // Kiek neigiamų pažymių
let teigiamiPažymiai = []; // Teigiami pažymiai

// Apskaičiuojame sumą ir suskirstome pažymius į teigiamus ir neigiamus
for (let pazymys of pažymiaiStudento) {
  suma4 += pazymys;

  if (pazymys < 5) {
    neigiamiPažymiai++; // Jei pažymys mažesnis nei 5, didiname neigiamų pažymių skaičių
  } else {
    teigiamiPažymiai.push(pazymys); // Jei pažymys 5 arba daugiau, pridedame prie teigiamų
  }
}

// Apskaičiuojame vidurkį
let vidurkis4 = suma4 / pažymiaiStudento.length;

// Išvedame rezultatus
console.log('Teigiami pažymiai:', teigiamiPažymiai);
console.log('Pažymių vidurkis:', vidurkis4.toFixed(0));
console.log('Neigiamų pažymių kiekis:', neigiamiPažymiai);

//lektoriaus pavyzdys

let RandomSk = Array.from(
  { length: 3 },
  () => Math.floor(Math.random() * 10) + 1
);

let suma9 = 0;
let neigiamuKiekis = 0;

for (let pazymys of RandomSk) {
  suma9 += pazymys;
  if (pazymys < 5) {
    neigiamuKiekis++;
  }
}

let vidurkis9 = suma9 / RandomSk.length;

console.log('Vidurkis:', vidurkis9.toFixed(0));
console.log('Neigiamiu pazymiu kiekis:', neigiamuKiekis);

//26 uzduotis

let pirmasStudentas = [9, 8, 6, 5, 7];
let antrasStudentas = [5, 7, 8, 6, 9, 5];
// Funkcija, apskaičiuojanti vidurkį
function skaiciuotiVidurki(masyvas) {
  let suma = 0;
  for (let i = 0; i < masyvas.length; i++) {
    suma += masyvas[i];
  }
  return suma / masyvas.length;
}

// Apskaičiuojame vidurkius
let pirmasVidurkis = skaiciuotiVidurki(pirmasStudentas);
let antrasVidurkis = skaiciuotiVidurki(antrasStudentas);

// Išvedame studentų pažymius ir vidurkius
console.log('Pirmo studento pažymiai: ', pirmasStudentas);
console.log('Antro studento pažymiai: ', antrasStudentas);
console.log('Pirmo studento vidurkis: ', pirmasVidurkis);
console.log('Antro studento vidurkis: ', antrasVidurkis);

// Nustatome, kuris studentas turi didesnį vidurkį
if (pirmasVidurkis > antrasVidurkis) {
  console.log('Pirmas studentas turi didesnį vidurkį.');
} else if (pirmasVidurkis < antrasVidurkis) {
  console.log('Antras studentas turi didesnį vidurkį.');
} else {
  console.log('Abu studentai turi tą patį vidurkį.');
}

// letoriaus pavyzdys

// //let studentoPazymiai1 = [8, 7, 8, 9, 10];
// let studentoPazymiai2 = [5, 7, 8, 9, 4];

// // Pirmo studento vidurkis
// let suma1 = 0;
// for (let pazymys of studentoPazymiai1) {
//     suma1 += pazymys;
// }

// let vidurkis1 = suma1 / studentoPazymiai1.length;

// console.log('Pirmo studento vidurkis', vidurkis1);

// // Antro studento vidurkis
// let suma2 = 0;
// for (let pazymys of studentoPazymiai2) {
//   suma2 += pazymys;
// }

// let vidurkis2 = suma2 / studentoPazymiai2.length;

// console.log('Antro studento vidurkis', vidurkis2);

// if (vidurkis1 > vidurkis2) {
//   console.log('Pirmo studento vidurkis didesnis')
// } else if (vidurkis2 > vidurkis1) {
//   console.log('Antro studento vidurkis didesnis')
// } else {
//   console.log('Abieju studentu vidurkiai vienodi');
// }

//27 uzduotis

const zodziaii = ['meds', 'namas', 'tortas', 'masi'];
const trumpiZodziai = ['abc'];

for (let zodis of zodziaii) {
  if (zodis.length < 5) {
    trumpiZodziai.push(zodis);
  }
}

console.log(trumpiZodziai);
