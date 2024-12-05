// uzduotis 2/2

//6

let skaicius = 1;
while (skaicius < 5) {
  console.log(skaicius + ' kvadratas yra ' + skaicius * skaicius);
  skaicius++;
}

//7 // math random generuoja betkoki random skaiciu. o
//math flooras tik sveikus skaicius suapvalina, o plius  kad niekada nebutu nulis

// Generuojame atsitiktinį skaičių nuo 1 iki 10, kuris nusako, kiek skaičių išvesti
let kiekis = Math.floor(Math.random() * 10) + 1; // math floras suapvalina, o random duoda random skaiciu nuo 0 iki 10. o plius 1 kad neduotu nulio
let i = 0;

// Naudojame while ciklą, kad išvestume atsitiktinį kiekį atsitiktinių skaičių
while (i < kiekis) {
  // Išvedame atsitiktinį skaičių nuo 1 iki 100
  let atsitiktinisSkaicius = Math.floor(Math.random() * 100);
  console.log(atsitiktinisSkaicius);
  i++; // Didiname skaitiklį
}
//8

let kiekis2 = Math.floor(Math.random(1) * 10) + 1;
let i2 = 0;

while (i2 < kiekis2) {
  let atsitiktinisSkaicius = Math.floor(Math.random(1) * 100);
  i2 += atsitiktinisSkaicius;
  console.log(atsitiktinisSkaicius);
  i++;
}
console.log('Visų atsitiktinių skaičių suma: ' + i2);

// uzduotys 1/2

//1

let skaic = 1;
while (skaic <= 20) {
  console.log(skaic);
  skaic++;
}

//2

let lyginiaiNelyginiai = 1;

while (lyginiaiNelyginiai <= 50) {
  if (lyginiaiNelyginiai % 2 === 0) {
    console.log(lyginiaiNelyginiai + ' lyginis');
  } else {
    console.log(lyginiaiNelyginiai + ' nelyginis');
  }
  lyginiaiNelyginiai++; // Didiname skaičių
}

//3

let dalyba = 25;

while (dalyba <= 50) {
  if (dalyba % 3 === 0) {
    console.log(`Skaicius ${dalyba} dalinasi is 3`);
  } else {
    console.log(dalyba);
  }
  dalyba++; // Didiname skaičių
}

//4
let count = 1;

while (true) {
  if (count % 3 === 0 && count % 5 === 0) {
    console.log(count);
    break; // Baigiame ciklą, kai randame skaičių, kuris dalinasi iš 3 ir iš 5
  }
  console.log(count);
  count++; // Didiname skaičių
}

//5

let penkta = 1;
let suma5 = 0;

while (penkta <= 100) {
  if (penkta % 2 === 0) {
    suma5 += penkta; // Pridedame lyginį skaičių prie sumos
  }
  penkta++; // Didiname skaičių
}

console.log('Visų lyginių skaičių suma nuo 1 iki 100 yra: ' + suma5);
