const pazymiai = [10, 7, 8, 5];
let suma = 0;

for (let pazymys of pazymiai) {
  suma += pazymys;
}

vidurkis = suma / pazymiai.length;

console.log('Pazymiai:');

for (let index in pazymiai) {
  console.log(`${Number(index) + 1}: ${pazymiai[index]}`);
}

console.log('Vidurkis:', vidurkis);

//

const pazymiai2 = [10, 7, 8, 5, 123];
let suma2 = 0;
let vidurkis2 = 0;

for (let pazymys of pazymiai2) {
  suma2 += pazymys;
}

vidurkis2 = suma2 / pazymiai2.length;

console.log(vidurkis2.toFixed(0));
