// Gauti nuorodas į elementus
const button = document.getElementById('submit-btn');
const output = document.getElementById('output');

button.addEventListener('click', function () {
  // Gauti įvesties laukų reikšmes
  const name = document.getElementById('name-input').value;
  const age = document.getElementById('age-input').value;
  const color = document.getElementById('color-input').value;

  // Jei nors vienas laukas tuščias, rodyti įspėjimą
  if (!name || !age || !color) {
    alert('Prašome užpildyti visus laukus!');
    return;
  }

  // Išvalome ankstesnį turinį
  output.innerHTML = '';

  // Sukuriame div elementą, kuris talpins visą informaciją
  const userInfoDiv = document.createElement('div');

  // Sukuriame vieną paragrafą, kuris turės visą informaciją
  const userInfoParagraph = document.createElement('p');
  userInfoParagraph.innerHTML = `
    <strong>Vardas:</strong> ${name} <br>
    <strong>Amžius:</strong> ${age} <br>
    <strong>Mėgstama spalva:</strong> ${color}
  `;

  // Pritaikome stilius paragrafui
  userInfoParagraph.style.border = '1px solid black';
  userInfoParagraph.style.borderRadius = '10px';
  userInfoParagraph.style.margin = '10px';
  userInfoParagraph.style.padding = '10px'; // Pridėjome padding, kad tekstas nebūtų per arti kraštų
  userInfoParagraph.style.backgroundColor = '#f4f4f4'; // Fono spalva, kad atskirtų informaciją
  // Sukuriame mygtuką, kuris leis ištrinti informaciją
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Ištrinti informaciją';
  deleteButton.style.marginTop = '10px'; // Pridėtas atstumas nuo informacijos
  deleteButton.style.padding = '5px 10px';
  deleteButton.style.border = '1px solid black';
  deleteButton.style.borderRadius = '5px';
  deleteButton.style.backgroundColor = '#f44336'; // Raudona spalva mygtukui
  deleteButton.style.color = 'white';

  // Funkcija, kuri ištrina informaciją, kai paspaudžiamas mygtukas
  deleteButton.addEventListener('click', function () {
    output.innerHTML = ''; // Išvalo visą informaciją iš output div'o
  });

  // Pridėkime paragrafą ir mygtuką į userInfoDiv
  userInfoDiv.appendChild(userInfoParagraph);
  userInfoDiv.appendChild(deleteButton);

  // Įterpiame userInfoDiv į output div'ą
  output.appendChild(userInfoDiv);
});
