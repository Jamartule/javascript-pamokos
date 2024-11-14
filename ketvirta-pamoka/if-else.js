const a = 1;
const b = 2;

if (a === b) {
  console.log('a lygu b');
} else {
  console.log('a nelygu b');
}

let password = '12345678';

if (password.lenght >= 8) {
  console.log('Slaptazodis tinkamas!');
} else {
  console.log('Slaptazodis per trumpas');
}

let age = 18;
let ageStatus = null;

if (age >= 18) {
  ageStatus = 'adult';
} else if (age < 18) {
  ageStatus = 'teenager';
} else if (age < 10) {
  ageStatus = 'child';
}
