let a = 5;
let b = 5;

function sudekSkaicius(a, b) {
  return a + b;
}
console.log(sudekSkaicius);

let preke = {
  pavadinimas: 'piestukas',
  kodas: 'AB122',
  kaina: 2.99,
  kiekis_sandelyje: 30,
  pardavusUzdarbis: function () {
    console.log(this.kaina * this.kiekis_sandelyje);
  },
};
//  let uzdirbtaSuma = preke.kaina * preke.kiekis_sandelyje;
console.log('Prek4 kai bus parduota:');
preke.pardavusUzdarbis();

///

let automobilis = {
  marke: 'Toyota',
  modelis: 'Prius',
  kaina: 20000,
  nuolaidaProcentais: 10,
  automobilioKainaSuNuolaida: function () {
    let galutineKaina = this.kaina * (1 - this.nuolaidaProcentais / 100);

    return galutineKaina;
  },
};

console.log(
  `Automobilis kainuos su ${
    automobilis.nuolaidaProcentais
  }% nuolaida: ${automobilis.automobilioKainaSuNuolaida()}$`
);

//

let kelione = {
  vieta: 'Paryzius',
  trukmeDienomis: 5,
  dienosBiudzetas: 100,
  apskaiciuotiVisaKelionesKaina: function () {
    let suma = this.trukmeDienomis * this.dienosBiudzetas;
    return suma;
  },
  parodykInformacija: function () {
    console.log(
      `Kelione i ${this.vieta}, truks ${
        this.trukmeDienomis
      } dienas, kainuos is viso: ${this.apskaiciuotiVisaKelionesKaina()}`
    );
  },
};

kelione.parodykInformacija();

//7
function generateRandomNumbers() {
  let result = '';

  for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 100) + 1;
    let gap = i < 9 ? ' ' : '';

    result += number + gap;
  }

  console.log(result);
}

for (let i = 0; i < 5; i++) {
  generateRandomNumbers();
}

//7

function generuotiSkaicius() {
  let skaiciai = [];

  for (let i = 0; i < 10; i++) {
    let atsitiktinisSkaicius = Math.floor(Math.random() * 10) + 1;
    skaiciai.push(atsitiktinisSkaicius);
    skaiciai.push(atsitiktinisSkaicius);
  }

  console.log(skaiciai.join(' '));
}

for (let i = 0; i < 5; i++) {
  generuotiSkaicius();
}

//8

function generuokAtsitiktiniSkaiciu() {
  return Math.floor(Math.random() * 10) + 1;
}

for (let i = 0; i < 10; i++) {
  console.log(generuokAtsitiktiniSkaiciu());
}

//9

function pasisveikinimas(vardas) {
  console.log('Labas, ' + vardas);
}

function atsisveikinimas(vardas) {
  console.log('Viso gero, ' + vardas);
}

let vardas = 'Jonas';

pasisveikinimas(vardas);
atsisveikinimas(vardas);

//10

function palyginkSkaicius(skaicius1, skaicius2) {
  if (skaicius1 > skaicius2) {
    console.log(`${skaicius1} yra didesnis už ${skaicius2}`);
  } else if (skaicius1 < skaicius2) {
    console.log(`${skaicius2} yra didesnis už ${skaicius1}`);
  } else {
    console.log(`Skaiciai yra lygus: ${skaicius1} === ${skaicius2}`);
  }
}

palyginkSkaicius(10, 5);
palyginkSkaicius(3, 7);
//////////////////////
//funkcija tikrina temperatura

function turnOnWipers() {
  // ijungia valytuvus
}

function turnOnAc() {
  // Ijungtu kondicionieriu
}

function createWeatherAlert(temperature, isRaining) {
  if (temperature < 0) {
    return 'Ispejimas: lauke minusas, atsargiai vairuokite!';
  } else if (isRaining) {
    turnOnWipers();
    return 'Ispejimas: lauke lyja, slidus kelias!';
  } else if (temperature > 30) {
    turnOnAc();
    return 'Ispejimas: Lauke karsta! nepalikite augintiniu';
  } else {
    return '';
  }
}

console.log(createWeatherAlert());

/////
function isShopOpen() {
  const currentHour = new Date().getHours();

  if (currentHour >= 9 && currentHour <= 20) {
    return 'Parduotuve yra atidaryta!';
  } else {
    return 'Parduotuve yra uzdaryta.';
  }
}

console.log(isShopOpen());

//

function checkTicketPrice(age) {
  switch (age) {
    case 1:
      return 'kaina 1 euras';
      break;
    case 2:
      return 'kaina 2 euurai';
      break;
    default:
      return 'Pilna kaina :10 eur';
  }
}
console.log(checkTicketPrice(1));
