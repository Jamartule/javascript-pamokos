// 1

let uzsakymoLaikas = 19;
let prekesLikutis = 10;

if (uzsakymoLaikas <= 15 && prekesLikutis > 0) {
  console.log('Užsakymas bus pritatytas');
} else {
  console.log('Užsakymas nebus pristatytas');
}

//2

let amzius = 5;
let amziausKategorija = null;

if (amzius >= 18) {
  console.log((amziausKategorija = 'adult'));
} else if (amzius < 18 && amzius > 10) {
  console.log((amziausKategorija = 'teenager'));
} else if (amzius < 10) {
  console.log((amziausKategorija = 'child'));
}

//3
let = lojalumoNarys = true;
let = pirkinioSuma = 50;

if (lojalumoNarys === true && pirkinioSuma > 20 && pirkinioSuma <= 50) {
  console.log('Jūs gaunate 20% nuolaidą');
} else if (lojalumoNarys === true && pirkinioSuma > 50) {
  console.log('Jūs gaunate 10% nuolaidą');
} else if (lojalumoNarys === false || pirkinioSuma <= 20) {
  console.log('Nuolaida netaikoma');
}

//4
let rasyba = 10;
let skyryba = 50;
let kirciavimas = 20;

let vidurkis = rasyba + skyryba + kirciavimas;

if (vidurkis <= 100 && vidurkis >= 90) {
  console.log('Puikiai!');
} else if (vidurkis >= 75 && vidurkis <= 89) {
  console.log('Gerai!');
} else if (vidurkis >= 50 && vidurkis <= 74) {
  console.log('Patenkinamai');
} else if (vidurkis < 50) {
  console.log('Nepatenkinamai');
}

//6

let age = 66;
let ageStatus = null;
let dienosMetas = 18;

if (age < 12) {
  console.log((ageStatus = 'Vaikui'), 'Bilieto kaina 5 eur');
} else if (age >= 12 && age <= 65 && dienosMetas < 17) {
  console.log((ageStatus = 'Suaugusiam'), 'Bilieto kaina yra 7 eur');
} else if (age >= 12 && age <= 65 && dienosMetas >= 17) {
  console.log((ageStatus = 'Suaugusiam'), 'Bilieto kaina yra 10 Eur');
} else if (age > 65) {
  console.log((ageStatus = 'Senjorui'), 'Bilieto kaina yra 6 eur');
}

//7
let prekesSuma = 101;
let savaitesDiena = 'treciadienis';

if (prekesSuma > 100 && savaitesDiena === 'treciadienis') {
  console.log(
    'Jei pirkimo suma viršija 100 eurų ir šiandien yra trečiadienis, taikoma 15% nuolaida.'
  );
} else if (prekesSuma > 50 && savaitesDiena === 'penktadienis') {
  console.log(
    'Jei pirkimo suma viršija 50 eurų ir šiandien yra penktadienis, taikoma 10% nuolaida.'
  );
} else {
  console.log('nuolaida netaikoma');
}

//8

let darboLaikas = 19;
let start = 9;
let end = 17;

if (darboLaikas >= start && darboLaikas <= end) {
  console.log('Dabar darbo laikas');
} else {
  console.log('Ne darbo laikas');
}

//9

let gyventojoPajamos = 1000000000;

if (gyventojoPajamos < 10000) {
  console.log('mokestis yra 5%.');
} else if (gyventojoPajamos >= 10000 && gyventojoPajamos < 30000) {
  console.log('mokestis yra 10%');
} else if (gyventojoPajamos >= 30000 && gyventojoPajamos <= 60000) {
  console.log('mokestis yra 15%');
} else if (gyventojoPajamos > 60000) {
  console.log('mokestis yra 20%');
}

//10

let statusas = null;
let bibliotekosNarys = true;

if (statusas === 'studentas') {
  console.log(
    'Jei skaitytojas yra studentas, jis gali skolintis knygą 30 dienų.'
  );
} else if (statusas === 'mokytojas') {
  console.log(
    'Jei skaitytojas yra mokytojas, jis gali skolintis knygą 60 dienų.'
  );
} else if (!statusas && bibliotekosNarys === true) {
  console.log(
    'Jei skaitytojas yra bibliotekos narys, bet nei studentas, nei mokytojas, jis gali skolintis knygą 14 dienų.'
  );
} else if (!statusas && !bibliotekosNarys) {
  console.log(
    'Jei skaitytojas nėra bibliotekos narys, jis negali skolintis knygos.'
  );
}
