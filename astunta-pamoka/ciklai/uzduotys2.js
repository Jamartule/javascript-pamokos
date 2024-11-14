//1

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//2

for (let i = 0; i <= 15; i += 2) {
  console.log(i);
}

//3
for (let i = 1; i <= 20; i += 3) {
  console.log([i]);
}

//4
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    console.log(i);
  }
}

//5

let pradzia = 6;
let pabaiga = 7;

if (pradzia < pabaiga) {
  for (let i = pradzia; i <= pabaiga; i++) {
    console.log(i + '' + i * i);
  }
} else {
  console.log('Pradzia turi buti mazesne nei pabaiga');
}
