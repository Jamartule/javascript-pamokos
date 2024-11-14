//pratimai
//susikurkite tris kintamuosius skaiciams saugoti ir parasykite sias if salygas

let a = 5;
let b = 100;
let c = 8;
//1. ar pirmas ir antras skaiciai yra lygus?

if (a === b) {
  console.log('Pirmas ir antras skaiciai lygus');
} else {
  console.log('pirmas ir antras sk nera lygus');
}
//2. ar antras ir trecias skaiciai yra lygus

if (b === c) {
  console.log('antras ir trecias skaiciai yra lygus');
} else {
  console.log('antras ir trecias nera lygus');
}
//3 ar pirmas kaicius yra didesnis uz antraji?

let rezultatas =
  a > b
    ? '3. pirmas skaicius yra didesnis uz antra'
    : '3. pirmas skaicius nera didesnis uz antra';
console.log(rezultatas);

// if (a > b) {
//   console.log('3. pirmas skaicius yra didesnis uz antra');
// } else {
//   console.log('3. pirmas skaicius nera didesnis uz antra');
// }
//4. ar antras sk yra didesnis uz dviguba treciojo skaiciaus reiksme (treciasis skaicius padaugintas is2)?

if (b > c ** 2) {
  console.log('4.Antras sk. yra didesnis uz trecio kvadrata');
} else {
  console.log('4.Antras sk. nera didesnis uz trecio kvadrata');
}

//arba ternary

const atsakymas =
  b > c ** 2
    ? '4.Antras sk. yra didesnis uz trecio kvadrata'
    : '4.Antras sk. nera didesnis uz trecio kvadrata';

// 5. ar pirmas sk, yra lygnis (ar dalinasi is 2)?

console.log('Modulis:', 3 % 2);

if (a % 2 === 0) {
  console.log('5 Pirmas sk yra lyginis');
} else {
  console.log('5 Pirmas sk yra nelyginis');
}
//6. ar antras skaicius yra nelyginis (ar nesidalina is 2)

if (b % 2 !== 0) {
  console.log('6.Antras sk yra nelyginis');
} else {
  ('6. antras skaicius yra lyginis');
}

//7. ar trecias sk yra teigiamas didesnis uz 0

if (c > 0) {
  console.log('7. Trecias sk yr teigiamas');
} else {
  console.log('7 trecias sk yra neigiamas');
}

//8 ar pirmas sk yra neigiamas (mazesnis uz 0)

if (a < 0) {
  console.log('8 pirmas negiamas');
} else {
  console.log('8 pirmas teigiamas');
}

//9 ar antras sk. dalinasi is 4

if (b % 4 === 0) {
  console.log('9. antras skaicius dalinasi is 4');
} else {
  console.log('9. antras skaicius nesidalina is 4');
}

//10 ar trecias sk dalinasi is 8

console.log(c / 8);

// UZDUOTIS 2/2

//Susikurti vartotojo amziu ir isvesti ar gali pagal amziu balsuoti ar ne

let age = 18;
let ageStatus = 17;

if (age >= 18) {
  console.log((ageStatus = 'Jūs galite galite balsuoti'));
} else {
  console.log((ageStatus = 'Jūs negalite balsuoti'));
}

// Sukurti kelis kintamuosiu  ir saugoti pazymiams.
// Rasti siu pazymiu vidurki. Patikrinti ar vidurkis teigiamas
// (daugiau arba lygu 5-iems), jei taip isveskite vidurkis teigiamas

let matematika = 2;
let lietuviu = 2;

let vidurkis = (matematika + lietuviu) / 2;

if (vidurkis >= 5) {
  console.log('Vidurkis teigiamas');
} else {
  console.log('Vidurkis neigiamas');
}

// SSusikurti skaiciaus kintamaji

//1 skaicius dalinasi is 5 tuomet isvesite sio skaiciaus daugybos lentele nuo 1iki5

// Uzduotis(1/2)

let pirmas = 5;
let antras = 8;
let trecias = 2;

// UZDUOTIS 1/2

// 1 pirmas skaicius didesnis uz antra

if (pirmas > antras) {
  console.log('Pirmas skaičius didesnis už antrą');
} else {
  console.log('pirmas skaicius nedidesnis uz antrą');
}

// 2 antras skaicius didesnis uz trecia

if (antras > trecias) {
  console.log('Antras skaicius didesnis uz trecia');
} else {
  console.log('Antras skaicius mazesnis uz trecia');
}

// 3 trecias skaicius didesnisuz pirma

if (trecias > pirmas) {
  console.log('Trecias didesnis uz pirma');
} else {
  console.log('Trecias nedidesnis uz pirma');
}

// 4 ar pirmi du skaiciai yra lygus

if (pirmas === antras) {
  console.log('pirmas ir antras lygus');
} else {
  console.log('Pirmas ir antras nelygus');
}

// 5 as paskutiniai su skaicius lygus

if (antras === trecias) {
  console.log('paskutiniai skaiciai lygus');
} else {
  console.log('paskutiniai skaiciai nelygus');
}

// 6 ar pirmas skaicius lygus 0

if (pirmas === 0) {
  console.log('pirmas lygus 0');
} else {
  console.log('pirmas nelygus 0');
}

// 7 antras skaicius neigiamas

if (antras(-abs)) {
  console.log('skaicius neigiamas');
} else {
  console.log('skaicius teigiamas');
}
