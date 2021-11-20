let form = document.getElementById('login-form');

form.email.addEventListener('change', function () {
  validEmail(this);
});
form.password.addEventListener('change', function () {
  validPassword(this);
});
form.addEventListener('submit', function (e) {
  e.preventDefault;
  if (validEmail(form.email) && validPassword(form.password)) {
    form.submit();
  }
});
// *** EMAIL ***
const validEmail = function (inputEmail) {
  let emailRegExp = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
    'g'
  );
  let testEmail = emailRegExp.test(inputEmail.value);
  let small = inputEmail.nextElementSibling;
  if (testEmail) {
    small.innerHTML = 'Adresse valide';
    small.classList.remove('text-danger');
    small.classList.add('text-success');
    return true;
  } else {
    small.innerHTML = 'Adresse non-valide';
    small.classList.remove('text-success');
    small.classList.add('text-danger');
    return false;
  }
};
// *** PASSWORD ***
const validPassword = function (inputPassword) {
  let msg;
  let valid = false;
  if (inputPassword.value.length < 3) {
    msg = 'Le mot de passe doit contenir au moins 3 caractères';
  } else if (!/[A-Z]/.test(inputPassword.value)) {
    msg = 'Il fait au moins une Majuscule';
  } else if (!/[a-z]/.test(inputPassword.value)) {
    msg = 'Il faut au moins une minuscule';
  } else if (!/[0-9]/.test(inputPassword.value)) {
    msg = 'Il faut au moins 1 chiffre';
  } else {
    msg = 'Mot de passe valide';
    valid = 'true';
  }
  let small = inputPassword.nextElementSibling;
  if (valid) {
    small.innerHTML = 'Mot de passe valide';
    small.classList.remove('text-danger');
    small.classList.add('text-success');
    return true;
  } else {
    small.innerHTML = 'Mot de passe non-valide';
    small.classList.remove('text-success');
    small.classList.add('text-danger');
    return false;
  }
};
