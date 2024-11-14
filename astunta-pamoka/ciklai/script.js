//Ciklai - for

//Sis ciklas naudojamas, kai yra zinoma kiek kartu jis bus vykdomas
// visada ciklas prasides : for (kintamasis; salyga; operacija) { viduje bus parasytas kodas}

// * kintamasis - ciklo darbui reikalingas kintamasis,

// kuris bus sunaikintas ciklui baigus darbą,
// dažniausiai naudojamas norint suvaldyti kiek
// kartų ciklas turi būti vykdomas.

// ● sąlyga - ciklas bus vykdomas kol sąlyga bus
// teisinga (grąžins true), sąlyga apsirašo tokiu
// pačiu principu kaip apsirašydavo patikrinimo
// sąlygoje if.

// ● operacija - kas bus daroma kiekvienos ciklo iteracijos metu, dažniausiai - didinamas
// kintamasis.

// ● kodas - kodas, kuris bus vykdomas jei sąlyga teisinga.

let a = 1;

// console.log('a', 1);
// console.log('a', 1);
// console.log('a', 1);

for (let i = 0; i < 4; i++) {
  console.log(a + i);
}
//for kodukas
for (let i = 0; i <= 5; i++) {
  console.log('Skaicius' + i);
}

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
//

//nelyginiai sk.

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log('Nelyginis skaicius' + i);
  } else {
    console.log('Lyginis skaicius' + i);
  }
}

//Switch

for (let i = 1; i <= 5; i++) {
  switch (i) {
    case 1:
      console.log('vienas');
      break;
    case 2:
      console.log('du');
      break;
    case 3:
      console.log('trys');
      break;
    case 4:
      console.log('keturi');
      break;
    case 5:
      console.log('penki');
      break;
  }
}
