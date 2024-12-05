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
  return Math.floor(Math.random() * 100) + 1;
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
