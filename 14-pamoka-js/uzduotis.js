// Sukuriame studento objektą su vidiniais objektais
let studentas = {
  asmeniniaiDuomenys: {
    vardas: 'Jonas',
    pavarde: 'Petras',
    amzius: 22,
    ugis: 180,
  },
  mokymosiDuomenys: {
    kursas: 3,
    mokykla: 'Vilniaus Universitetas',
  },
};

// Išvedame visą informaciją per vieną console.log()
console.log(studentas);

// Išvedame atskiras savybes (vidiniai objektai)
console.log('Vardas: ' + studentas.asmeniniaiDuomenys.vardas);
console.log('Pavardė: ' + studentas.asmeniniaiDuomenys.pavarde);
console.log('Amžius: ' + studentas.asmeniniaiDuomenys.amzius);

// uzduotis apie filma

let filmas = {
  pavadinimas: 'Venomas',
  rezisierius: 'Michel Lee',
  biudzetas: 5000000,
  pelnas: 9000000000,
  zanras: 'Komedija',
  trukmė: 120,
  išleidimo_metai: 2018,
};
Venomo_aktoriai = [
  ['Tom Hardy', 'Eddie Brock / Venomas'],
  ['Michelle Williams', 'Anne Weying'],
  ['Riz Ahmed', 'Carlton Drake / Riot'],
  ['Scott Haze', 'Roland Treece'],
  ['Jenny Slate', 'Dr. Dora Skirth'],
];

console.log('Pavadinimas:', filmas.pavadinimas);

let pelnas = filmas.pelnas - filmas.biudzetas;
console.log(`Filmo pelnas: $${pelnas}`);

// Aktorių skaičius filme
let aktoriuKiekis = Venomo_aktoriai.length;
console.log(`Filme dalyvavo ${aktoriuKiekis} aktorių.`);

// Filmo amžius
let dabartiniaiMetai = new Date().getFullYear();
let filmoAmzius = dabartiniaiMetai - filmas.išleidimo_metai;
console.log(`Filmui yra ${filmoAmzius} m.`);

//3

//4

// Pirmas prekės objektas
let preke1 = {
  pavadinimas: 'IPhone 14',
  kaina: 1200,
  savikaina: 800,
  kodas: 'IP14-256GB',
  kiekisSandelyje: 50,
  dezesMatmenys: {
    x: 15, // cm
    y: 8, // cm
    z: 5, // cm
  },
};

// Antras prekės objektas
let preke2 = {
  pavadinimas: 'Samsung Galaxy S23',
  kaina: 1000,
  savikaina: 650,
  kodas: 'SGS23-128GB',
  kiekisSandelyje: 75,
  dezesMatmenys: {
    x: 14, // cm
    y: 7, // cm
    z: 4.5, // cm
  },
};

// Trečias prekės objektas
let preke3 = {
  pavadinimas: 'Sony WH-1000XM5',
  kaina: 350,
  savikaina: 200,
  kodas: 'Sony-Headphones',
  kiekisSandelyje: 120,
  dezesMatmenys: {
    x: 25, // cm
    y: 25, // cm
    z: 10, // cm
  },
};

function isvestiPrekesInformacija(preke) {
  console.log(preke.pavadinimas);
  console.log(`Kaina: ${preke.kaina}€`);
  console.log(`Kodas: ${preke.kodas}`);
  console.log(`Sandėlyje: ${preke.kiekisSandelyje} vnt`);
  console.log('-------------------------------');
}

isvestiPrekesInformacija(preke1);
isvestiPrekesInformacija(preke2);
isvestiPrekesInformacija(preke3);

console.log(
  `Pirma prekė kainuoja - ${preke1.kaina}€, ` +
    `antra prekė kainuoja - ${preke2.kaina}€, ` +
    `trečia prekė kainuoja - ${preke3.kaina}€`
);

// Rasti brangiausią prekę
function rastiBrangiausiaPreke(prekes) {
  let brangiausia = prekes[0]; // Pradžioje manome, kad pirmas objektas yra brangiausias

  for (let i = 1; i < prekes.length; i++) {
    if (prekes[i].kaina > brangiausia.kaina) {
      brangiausia = prekes[i]; // Jei kaina didesnė, atnaujiname brangiausią prekę
    }
  }

  return brangiausia;
}

let prekes = [preke1, preke2, preke3];

let brangiausiaPreke = rastiBrangiausiaPreke(prekes);

// Išvedame brangiausios prekės informaciją
console.log('Brangiausia prekė:');
console.log(`Pavadinimas: ${brangiausiaPreke.pavadinimas}`);
console.log(`Kaina: ${brangiausiaPreke.kaina}€`);
console.log(`Kodas: ${brangiausiaPreke.kodas}`);
console.log(`Sandėlyje: ${brangiausiaPreke.kiekisSandelyje} vnt`);
console.log('-------------------------------');

//5

const automobilis = {};

automobilis.marke = 'Toyota';
automobilis.modelis = 'Prius';
automobilis.rida = 145795;
automobilis.spalva = 'Raudona';
automobilis.darbinisTuris = 1.9;
automobilis.gamybosMetai = 2015;
automobilis.arDauztas = false;
automobilis.arParduodamas = true;

const dabartiniaiMetaii = new Date(Date.now()).getFullYear();
const autoAmzius = dabartiniaiMetaii - automobilis.gamybosMetai;
console.log(`Autmobilio amžius: ${autoAmzius} metai`);

const vidutineRidaPerMetus = automobilis.rida / autoAmzius;

console.log(vidutineRidaPerMetus.toFixed(2));

const zmogus = {
  asdasdad: 'Vardenis',
  pavarde: 'Pavardenis',
  amzius: 18,
  pazymiai: [5, 6, 8, 9],
};

for (const pazymys of zmogus.pazymiai) {
  console.log(pazymys);
}

// const zmogus = {
//   asdasdad: 'Vardenis',
//   pavarde: 'Pavardenis',
//   amzius: 18,
//   pazymiai: [5, 6, 8, 9]
// }

// let suma = 0

// for (const pazymys of zmogus.pazymiai) {
//   suma += pazymys
// }

// // console.log(suma);

let studentass = {
  vardas: 'Tomas',
  pavarde: 'Tomasas',
};

// Gauti kiekviena reiksme
for (const index in studentass) {
  console.log(studentass[index]);
}

//7

const knygynas = {
  pavadinimas: 'Knygelis',
  adresas: 'Vilnius',
  plotas: 300,
  knyguKiekis: 5000,
  darboValandos: '9:00 - 21:00',
  arAtidarytas: true,
};

for (const raktas in knygynas) {
  if (typeof knygynas[raktas] !== 'string') {
    console.log(`${raktas}: ${knygynas[raktas]}`);
  }
}

//8

// const studentas1 = {
//   Vardas: 'Julius',
//   Pavardė: 'Julijonas',
//   Studijos: 'IT specialistas',
//   Pažymiai: [5, 6, 9, 10],
// };
// const studentas2 = {
//   Vardas: 'Marius',
//   Pavardė: 'Mariamaitis',
//   Studijos: 'Inžinerija',
//   Pažymiai: [7, 8, 10, 9],
// };

// let suma1 = 0;
// for (let i = 0; i < studentas1.Pažymiai.length; i++) {
//   suma1 += studentas1.Pažymiai[i];
// }
// let vidurkis1 = suma1 / studentas1.Pažymiai.length;

// // Studentų 2 pažymių vidurkis
// let suma2 = 0;
// for (let i = 0; i < studentas2.Pažymiai.length; i++) {
//   suma2 += studentas2.Pažymiai[i];
// }
// let vidurkis2 = suma2 / studentas2.Pažymiai.length;

// console.log('Studento 1 vidurkis: ' + vidurkis1);
// console.log('Studento 2 vidurkis: ' + vidurkis2);

let studentas1 = {
  vardas: 'Jonas',
  pavarde: 'Jonaitis',
  studijuProgramosPavadinimas: 'Informatika',
  pazymiai: [5, 4, 8, 7, 9],
};
let studentas2 = {
  vardas: 'Petras',
  pavarde: 'Petraitis',
  studijuProgramosPavadinimas: 'Matematika',
  pazymiai: [8, 9, 7, 6, 5],
};

for (let key in studentas1) {
  console.log(`${key}: ${studentas1[key]}`);
}
for (let key in studentas1) {
  console.log(`${key}: ${studentas1[key]}`);
}
let suma1 = 0;
let suma2 = 0;
for (let i = 0; i < studentas1.pazymiai.length; i++) {
  suma1 += studentas1.pazymiai[i];
}
for (let i = 0; i < studentas2.pazymiai.length; i++) {
  suma2 += studentas2.pazymiai[i];
}
let vidurkis1 = suma1 / studentas1.pazymiai.length;
let vidurkis2 = suma2 / studentas2.pazymiai.length;
if (vidurkis1 > vidurkis2) {
  console.log(`${studentas1.vardas} ${studentas1.pavarde} ${vidurkis1}`);
} else if (vidurkis2 > vidurkis1) {
  console.log(`${studentas2.vardas} ${studentas2.pavarde} ${vidurkis2}`);
} else {
  console.log('Abu studentai turi vienodą vidurkį.');
}
