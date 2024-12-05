//Objektai // Objects (Objektai)
// Objektas paprastai naudojamas kai norime sugrupuoti duomenis apie
// vieną esybę, pavyzdžiui, vieno studento duomenys, vienos knygos
// duomenys ir pan.

const objektas = {
  key: 'value',
  raktas: 'reiksme',
};

const automobilis = {
  marke: 'BMW',
  pagaminimo_metai: 2020,
  kuroTipas: 'Benzinas',
  variklioturis: 3.0,
};

console.log(automobilis);

const registeredUser = {
  username: 'Marta90',
  pasword: '****',
  email: 'marta@gmail.com',
  phone: '+370654796',
  country: 'Lithuania',
};
console.log(registeredUser);

//pvz knygos duomenys

const knyga = {
  pavadinimas: 'Nuotykiai',
  autorius: 'Jonas Jonaitis',
  ISBN: '978-10',
  puslapiai: 250,
  temos: ['fantastika', 'nuotykiai'],
  leidimas: {
    metai: 2022,
    leidykla: 'linksmos bangos',
    vertėjas: 'Petras P.',
    adresas: 'Vilnius',
  },

  kaina: 19.99,
  valiuta: 'Eur',
  arTurime: true,
  arNaudota: false,
};

console.log(knyga);

// Objekto duomenis galime pasiekti naudojant tašką ir objekto raktą

console.log(knyga.pavadinimas);

///pavyzdys

let darbuotojas = {
  pareigos: 'Programuotojas',
  lygis: 'Jaunesnysis',
  atlyginimas: 1000,
  isidarbino: 2022,
};

let dabartiniaiMetai = 2024;
let jauDirba = dabartiniaiMetai - darbuotojas.isidarbino;

switch (jauDirba) {
  case 1:
    darbuotojas.atlyginimas += 100;
    break;
  case 2:
    darbuotojas.atlyginimas += 200;
    break;
  case 3:
    darbuotojas.atlyginimas += 300;
    break;
  case 4:
    darbuotojas.atlyginimas += 400;
    break;
}

console.log(darbuotojas.atlyginimas);

///pavyzdys

let darbuotojass = {};

darbuotojass.pareigos = 'programuotojas';

console.log(darbuotojass);

// pavyzdys issitraukti metus, laika, minutes, sekundes ir t,t,

const dabartiniaiMetaii = new Date(Date.now()).getFullYear();
console.log(dabartiniaiMetaii);
