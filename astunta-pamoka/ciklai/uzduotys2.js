//1

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//2

for (let i = 0; i <= 15; i += 2) {
  console.log(i);
}

//3
for (let i = 1; i <= 20; i += 3) {
  console.log(`[${i}]`);
}

//4
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    console.log(i);
  }
}

//5

let pradzia = 3;
let pabaiga = 8;

if (pradzia < pabaiga) {
  for (let i = pradzia; i <= pabaiga; i++) {
    console.log(`${i} ${i ** 2}`);
  }
} else {
  console.log('Pradzia turi buti mazesne nei pabaiga');
}

//6
let start = 5;
let end = 9;

if (start < end) {
  for (let i = pradzia; i <= pabaiga; i++) {
    if (i % 2 === 1 || i % 8 === 0) {
      console.log(i);
    }
  }
} else {
  console.log('Pradzia turi buti mazesne nei pabaiga');
}

//7

let num1 = 5;
let num2 = 3;
let result = 0;

for (let i = 0; i < Math.abs(num2); i++) {
  result += num1;
}

console.log(result);
