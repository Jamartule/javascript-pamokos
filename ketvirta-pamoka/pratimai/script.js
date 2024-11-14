// Palyginimo operatoriai

//  == Palyginimas su konvertavimu (konvertuoja tipus ne reikšmes)

console.log(2 == 2); // true
console.log('2' == 2); //true
console.log(0 == false); // true

// === Palyginimas be konvertavimo (strict comparison)
//Turime lyginti ne tik reikšmes, bet ir ju tipus

console.log(2 === 2); // true
console.log(2 === 1); // false
console.log(2 === '2'); // false
console.log('Edgaras ' === 'Edgaras'); //false
console.log('edgaras' == 'Edgaras');

// != Nelygu
// su vienu = konvertuoja tipus

console.log(2 != 2); //false
console.log(2 != '2'); //fasle

// > Daugiau

console.log(2 > 1); //true
console.log(2 > 3); //false

// >= Daugiau arba lygu

console.log(2 >= 2); //true

// < Mažiau

console.log(2 < 2); //false

// <= Ma=iau arba lygu

console.log(2 <= 2); // true
console.log(2 <= 1); //false

// ternary operator
// salyga ? true : false

let age = 18;
let ageStatus = age >= 18 ? 'adult' : 'child';

console.log(ageStatus); // adult
