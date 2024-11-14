// Loginiai operatoriai &&, ||, !   Logical operation

//  && - ir

// false && false = false
// false && true = false
//  true && false = false
//  true && true  true

// Turi butinai atitikri abi salygos
const a = 1;
const b = -1;

if (a > 0 && b > 0) {
  console.log('a ir b yra teigiami skaiciai');
} else {
  console.log('a arba b nera teigiamas skaicius');
}

let skaicius = 101;

if (skaicius > 0 && skaicius <= 100) {
  console.log('skaicius patenka tarp reziu nuo 0 iki 100');
} else if (skaicius > 0 && skaicius <= 1000) {
  console.log('Skaicius patenka tarp 100 ir 1000');
}

// const arPrisijunges = false;
// const naudotojoRole = 'admin';

// if (arPrisijunges && naudotojoRole === 'admin') {
//   console.log('Tu prisijunges');
// }

// || - arba
//  false || true = true
// false || false = false
// true|| true = true
// true || false = true

const c = 1;
const d = false;
// turi atitikti bent viena salyga
if (c >= 1 || d === true) {
  console.log('salyga yra teisinga');
} else {
  console.log('salyga yra neteisinga');
}

let skaicius2 = 100;

if (
  skaicius2 === 100 ||
  skaicius2 === 90 ||
  skaicius2 === 80 ||
  skaicius2 === 70
) {
  console.log('Salyga atitinka!');
} else {
  console.log('Salyga neatitinka');
}

// ! - ne
// !true = false
// !false = true

const isloggedIn = true;

if (!isloggedIn) {
  console.log('Tu esi nepsirrijunges');
} else {
  console.log('Tu esi prisijunges');
}

// BILIETAI

const arTuriBilieta = false;
const yraVipNarys = true;

if (arTuriBilieta) {
  console.log('Uzeikite i koncerta!');
} else if (!arTuriBilieta && yraVipNarys) {
  console.log('Tu neturi bilieto, bet esi VIP narys tai uzeik i koncerta!');
} else if (!arTuriBilieta && !yraVipNarys) {
  console.log('Tu neturi nei bilieto nei esi vip narys.');
}
