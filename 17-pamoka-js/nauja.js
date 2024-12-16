//Funkcija

// a  kai norime gauti duomenis

function getUserName() {
  return 'username12...';
}

function checkWeather() {
  return 'sunny';
}

function retrieveOrderDetails() {
  return 'order details...';
}

// b kaip norime atlikti veiksma pvz nustatyti duomenis arba juos pakeisti

function setUserName() {
  console.log('setting username to: ' + name);
}

function updateWeather(temperature) {
  console.log('updating temperatur to:', temperature);
}

function changePassword(newPassword) {
  console.log('changing password to', newPassword);
}

//c  tirinimas arba validacija

function isEmailValid(email) {
  return email.includes('@');
}

function hasPermissions(role) {
  return role === 'admin';
}

/////

function hasPermissions(role) {
  return role === 'admin';
}

function deletePost(role, postName) {
  if (hasPermissions(role)) {
    console.log(`Postas su pavadinimu: "${postName}" buvo istrintas.`);
  } else {
    console.log(
      `Klaida. vartotojas su role "${role.toUpperCase()}" neturi teises istrinti irasu.`
    );
  }
}

deletePost('admin', 'Kaip investuoti pinigus?');
