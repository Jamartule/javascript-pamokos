//Funkcijos skirtos tlikti veiksmus

// si funkcika gazina suma, padavus du skaicius//
//return zodis grazina reiksme

// Funkcija pati savavališkai nevykdo jokio kodo, todėl norint, kad ji atliktų kokį nors

// darbą - reikės ją iškviesti.

//Jeigu funkcijai reikia kokių nors duomenų, jai tai galima perduoti kaip parametrus /

// argumentus.

function suskaiciuokSuma(a, b) {
  return a + b;
}

const suma = suskaiciuokSuma(1, 2);
console.log(suma);

///

function pasisveikinimas(vardas) {
  console.log('labas!', vardas);
}

pasisveikinimas('Jonas');

let laikas = '18:00';

function pasisveikink() {
  console.log('Labas rytas');
}

function atsisveikink() {
  console.log('Viso gero!');
}

if (laikas === '18:00') {
  atsisveikink();
} else {
  pasisveikink();
}

//
let skaicius = 10;

function isveskPadaugintaSkaiciu() {
  console.log(skaicius * 2);
}

isveskPadaugintaSkaiciu();

///
//1
function isveskManoVarda(vardas, sakinys) {
  console.log(vardas, sakinys);
}

isveskManoVarda('Marta', 'norejau ismokti kazka naujo');
isveskManoVarda('Elza', 'del idomumo');
isveskManoVarda('Marta', 'norejau ismokti kazka naujo');

//2
function isveskeilerasti() {
  console.log('Žvaigždės danguje blizga,');
  console.log('Naktis tyli ir ramiai miega,');
  console.log('Mėnulis aukštai šviečia,');
  console.log('O vėjas švelniai šnara,');
  console.log('Nakties paslaptis saugo tyliai.');
}

isveskeilerasti();
isveskeilerasti();
isveskeilerasti();
isveskeilerasti();
isveskeilerasti();

for (let i = 0; i < 5; i++) {
  isveskeilerasti();
}

//3

function iskvieskPirmaSakiny() {
  console.log('Pirmas sakinys');
}

function iskvieskAntraSakiny() {
  console.log('Antras sakinys');
}

function iskvieskTreciaSakiny(x) {
  console.log('Trecias sakinys', x);
}

iskvieskPirmaSakiny();
iskvieskAntraSakiny();
iskvieskTreciaSakiny('Edgaras');

//3

function pirmasTekstas() {
  console.log('Tai pirmas tekstas.');
}

function antrasTekstas() {
  console.log('Tai antras tekstas.');
}

function treciasTekstas() {
  console.log('Tai trečias tekstas.');
}

pirmasTekstas();
antrasTekstas();
treciasTekstas();

//4

function pirmaEilute() {
  console.log('Tai pirmoji teksto eilutė.');
}

function antraEilute() {
  console.log('Tai antroji teksto eilutė.');
}

function treciaFunkcija() {
  pirmaEilute();
  antraEilute();
}

treciaFunkcija();

// pvz

function pirmaEilute() {
  return 'Labas';
}

function antraEilute() {
  return 'Vakaras';
}

function sujungtosEilutes() {
  console.log(pirmaEilute() + ' ' + antraEilute());
}

sujungtosEilutes();

//5

function sugeneruokIrIsveskSuma() {
  const skaicius1 = Math.floor(Math.random() * 10) + 1;
  const skaicius2 = Math.floor(Math.random() * 10) + 1;

  let suma = skaicius1 + skaicius2;

  console.log(`${skaicius1} + ${skaicius2} = ${suma}`);
}

sugeneruokIrIsveskSuma();
sugeneruokIrIsveskSuma();
sugeneruokIrIsveskSuma();

/////

function showOfficerInfo(
  vardas,
  pavarde,
  amzius,
  alga,
  etatas,
  specializacija
) {
  let suformatuotasSakinys = `
    Sveiki, mano vardas ir pavarde yra ${vardas} ${pavarde}, man yra ${amzius} metu, dirbu ${etatas} etatu as 
    uzdirbu ${alga} euru per menesi, mano specializacija: ${specializacija}
  `;

  return suformatuotasSakinys;
}

console.log(
  showOfficerInfo('Pavardenis', 'Edgaras', 30, 2000, 'pilnas', 'kriminalistas')
);

//

function showOfficerInfo() {
  const officer = {
    vardas: 'Edgaras',
    pavarde: 'Pavarde',
    amzius: 30,
    statusas: 'aktyvus',
  };

  return officer;
}

console.log(showOfficerInfo().vardas);
console.log(showOfficerInfo().pavarde);

// function showOfficerInfo() {
//   const officer = {
//     vardas: 'Edgaras',
//     pavarde: 'Pavarde',
//     amzius: 30,
//     statusas: 'aktyvus'
//   }

//   return [officer];
// }

// console.log(showOfficerInfo())

///jei nori funkcija paleisti
