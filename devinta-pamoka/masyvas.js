const matematika = 7;
const geografija = 8;
const informatika = 6;

const studentoPazymiai = [matematika, geografija, informatika];

console.log(studentoPazymiai);

// Masyvus galima įsivaizduoti kaip:
// ○ Masyvas yra specialaus tipo kintamasis, kuris gali saugoti daugiau nei vieną reikšmę.
// ○ Masyvas apjungia kelis skirtingus kintamuosius į vieną vietą.
// ○ Masyvas padeda sugrupuoti susijusius duomenis.

//pvz1
const vokiskiAutomobiliai = ['Audi', 'BMW', 'Mercedes'];

console.log(vokiskiAutomobiliai);

//pvz2

const fizika = 10;
const chemija = 9;
const anglu = 8;

const pazymiai = [fizika, chemija, anglu];

console.log(pazymiai[2]);

let sumaa = 0;
let masyvass = [3, 1, 2];
sumaa = masyvass[0] + masyvass[1] + masyvass[2];
console.log(sumaa);

//pvz4

let skaiciai = [1, 2, 3, 4, 5];

console.log(skaiciai.lenght);

//pvz5

let automobiliai = ['Audi'];

if (automobiliai.lenght) {
  console.log('Masyvas netusčias');
}
if (automobiliai.lenght === 1) {
  console.log('Masyvas yra vienas elementas', automobiliai[0]);
}

//p Push metodas

let pienoProduktai = ['pienas', 'kefyras', 'grietine'];

pienoProduktai.push('jogurtas');
console.log(pienoProduktai);

// push metodas
let naujasProduktas = 'grybai';
let pienoProduktas = ['pienas'];
let kitiProduktai = [];

if (naujasProduktas === 'kefyras') {
  pienoProduktas.push(naujasProduktas);
} else {
  kitiProduktai.push(naujasProduktas);
}

console.log(pienoProduktas);
console.log(kitiProduktai);

//pvz kaip isburti paskutini nari

let sk = [1, 2, 3];

//pirmas narys
console.log(sk[0]);
//paskutinis
console.log(sk[sk.length - 1]);

// pvz paskutinis
let vardai = ['Tomas', 'Agne', 'Greta'];

console.log(vardai);

vardai[0] = 'Greta';
vardai[2] = 'Tomas';

console.log(vardai);
