// Switch statement - palyginimo operatorius

// leidzia palyginti kintamaji su daugybe skirtingu reiksmiu

const day = 7;

switch (day) {
  case 1:
    console.log('Pirmadienis');
    break;
  case 2:
    console.log('Antradienis');
    break;
  case 3:
    console.log('Treciadienis');
    break;
  case 4:
    console.log('Kervitadienis');
    break;
  case 5:
    console.log('Penktadienis');
    break;
  case 6:
    console.log('Sestadienis');
    break;
  default:
    console.log('tokios dienos nera');
}

//pavyzdys

let skaicius1 = 5;
let skaicius2 = 10;
let veiksmas = '';

switch (veiksmas) {
  case '+':
    console.log(skaicius1 + skaicius2);
    break;
  case '-':
    console.log(skaicius1 - skaicius2);
    break;
  case '*':
    console.log(skaicius1 * skaicius2);
    break;
  default:
    console.log('nezinomas veiksmas');
}
