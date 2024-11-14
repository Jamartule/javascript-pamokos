//12

let skaicius1 = 10;
let skaicius2 = 25;
let skaicius3 = 15;

let didziausiasSkaicius = Math.max(skaicius1, skaicius2, skaicius3);

console.log(didziausiasSkaicius);

//13

let skaicius4 = 10;
let skaicius5 = 25;
let skaicius6 = 15;

let maziausiasSkaicius = Math.min(skaicius1, skaicius2, skaicius3);

console.log(maziausiasSkaicius);

// 14

let egzaminasAnglu = 9;
let egzaminasFizika = 7;
let egzaminasLietuviu = 4;

let vidurkis = (egzaminasAnglu + egzaminasFizika + egzaminasLietuviu) / 3;

console.log(vidurkis.toFixed(1));

if (vidurkis >= 8) {
  console.log('gautas vidurkis yra [8-10]');
} else if (vidurkis === 7.9 || vidurkis >= 5) {
  console.log('gautas vidurkis yra [5-8)');
} else if (vidurkis < 5) {
  console.log('gautas vidurkis yra <5');
}

// 15

let sk1 = 20;
let sk2 = 50;

//15.1ar didesnis 1 uz 2 arba lygus 0
if (sk1 > sk2 || sk1 === 0) {
  console.log('Pirmas skaicius yra didesnis uz antraji arba lygus 0');
}

// 15.2
if (sk2 > sk1 || sk1 === 0) {
  console.log('Antras skaicius yra didesnis uz pirmaji arba lygus 0');
}

// 15.3

if (sk1 > sk2 && sk2 === 20) {
  console.log('Pirmas skaicius yra didesnis uz antraji ir  yra lygus 20');
}

// 15.4

if (sk2 > sk1 && sk2 < 100) {
  console.log('Antras skaicius daugiau  uz pirma ir antras mazesnis uz 100');
}
