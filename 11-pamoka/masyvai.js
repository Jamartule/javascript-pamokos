//masyvai
//pvz

const masyvas = [90, 30, 20, 30, 50, 60];

for (let i = 0; i < masyvas.length; i++) {
  console.log(masyvas[i]);
}
//pvz 2

let miestai = ['vilnius', 'kaunas', 'klaipeda', 'siauliai'];

for (let i = 0; i < miestai.length; i++) {
  console.log('Miestas', miestai[i]);
}

//pvz3
let miestai2 = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai'];

for (let i = 0; i < miestai2.length; i++) {
  console.log(i + 1 + '-asis miestas ' + miestai2[i]);
}

//pvz 4

let skaiciai = [9, 8, 5, 6, 4, 2, 1];

let lyginiaiSkaiciai = 0;
let nelyginiaiSkaiciai = 0;

for (let i = 0; i < skaiciai.length; i++) {
  if (skaiciai[i] % 2 === 0) {
    lyginiaiSkaiciai += skaiciai[i];
  } else {
    nelyginiaiSkaiciai += skaiciai[i];
  }
}
console.log('Visi saiciai', skaiciai);
console.log('Lyginiai skaiciai', lyginiaiSkaiciai);
console.log('Nelyginiai skaiciai', nelyginiaiSkaiciai);
