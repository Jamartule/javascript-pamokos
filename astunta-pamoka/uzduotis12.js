let a = 1;
let b = 100000;
let veiksmas = a + b;

if (veiksmas === 1) {
  console.log('Laimejote vandens');
} else if (veiksmas === 2) {
  console.log('laimejote limonado');
} else if (veiksmas === 3) {
  console.log('laimejote arbata');
} else if (veiksmas === 4) {
  console.log('Laimejote kava');
} else {
  console.log('nieko nelaimejote');
}

let pasirinkimas = 4;

switch (pasirinkimas) {
  case 1:
    console.log('Laimejote vandens');
    break;
  case 2:
    console.log('laimejote limonado');
    break;
  case 3:
    console.log('laimejote arbata');
    break;
  case 4:
    console.log('laimejote arbata');
}

// uzduotis  2/2

let sk1 = 1;
let sk2 = 6;
let sk3 = 8;

let suma = sk1 + sk2 + sk3;

if (sk1 === 1) {
  console.log(suma);
} else if (sk1 === 2) {
  console.log(sk2 * sk3);
} else if (sk1 === 3) {
  console(sk1 ** 2);
} else {
  console.warn('Klaida');
}

let skaic1 = 6;
let skaic2 = 8;
let skaic3 = 10;

switch (skaic1) {
  case 1:
    console.log(`Visu triju skaiciu suma : ${skaic1 + skaic2 + skaic3}`);
    break;
  case 6:
    console.log(`Dvieju sk sandauga : ${skaic2 * skaic3}`);
    break;
  case 8:
    console.log(`Pirmas kvadratu : ${skaic1 ** 2}`);
    break;
  default:
    console.log('Klaida');
}

//3 uzduotis

const klaida = 1;
switch (klaida) {
  case 1:
    console.log('klaida prisijungime');
    break;
  case 2:
    console.log('klaida tikrinant indormacija');
    break;
  case 3:
    console.log('klaida apdorojant');
    break;
  default:
    console.log('nerasta');
}
