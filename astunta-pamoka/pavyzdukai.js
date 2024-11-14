let status = 'rusiuojdamas';

if (status === 'siunciamas') {
  console.log('Jusu uzsakymas yra siunciamas');
} else if (status === 'uzsakytas') {
  console.log('Jusu uzsakymas uzsakytas');
}

switch (status) {
  case 'uzsakytas':
    console.log('Jusu uzsakymas yra uzsakytas');
    break;
  case 'siunciamas':
    console.log('Jusu uzsakymas yra siunciamas');
    break;
  case 'rusiuojamas':
    console.log('Jusu uzsakymas rusiuojamas');
    break;
  case 'pristatytas':
    console.log('Jusu uzsakymas yra pristatytas');
    break;
  default:
    console.log('nei vienas atsakymas neatitiko');
}

console.log('tolimesnis kodas...');

//sviesoforas

let sviesoforas = 'melyna';

switch (sviesoforas) {
  case 'zalia':
    alert('Gali vaziuoti');
    break;
  case 'geltona':
    alert('palauk');
    break;
  case 'raudonas':
    alert('stovek');
    break;
  default:
    console.warn('Sviesoforas neveikia');
}
