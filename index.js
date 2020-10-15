const CROSS_ICON = '\u2717';
const TICK_ICON = '\u2713';

function validateForm() {
  const email = document.forms['registation-form']['email'];

  const emailValid = checkEmailValidity(email);

  if (!emailValid) {
    window.alert(email.validationMessage);
    email.focus();
    return false;
  }

  return true;
}

function validatePassword() {
  let count = 0;
  const password = document.forms['registration-form']['password'].value;
  const charIcon = document.getElementById('password-character');
  const lowerIcon = document.getElementById('password-lowercase');
  const upperIcon = document.getElementById('password-uppercase');
  const numIcon = document.getElementById('password-number');
  const specialIcon = document.getElementById('password-special');

  if (password.length >= 8) {
    charIcon.innerText = TICK_ICON;
    count++;
  } else {
    charIcon.innerText = CROSS_ICON;
  }

  if (hasLowerCase(password)) {
    lowerIcon.innerText = TICK_ICON;
    count++;
  } else {
    lowerIcon.innerText = CROSS_ICON;
  }

  if (hasUpperCase(password)) {
    upperIcon.innerText = TICK_ICON;
    count++;
  } else {
    upperIcon.innerText = CROSS_ICON;
  }

  if (hasNumber(password)) {
    numIcon.innerText = TICK_ICON;
    count++;
  } else {
    numIcon.innerText = CROSS_ICON;
  }

  if (hasSpecialChar(password)) {
    specialIcon.innerText = TICK_ICON;
    count++;
  } else {
    specialIcon.innerText = CROSS_ICON;
  }

  if (count % 5 == 0 && count != 0) {
    document.getElementById('submit-button').disabled = false;
  } else {
    document.getElementById('submit-button').disabled = true;
  }
}

hasLowerCase = str => /[a-z]/.test(str);

hasUpperCase = str => /[A-Z]/.test(str);

hasNumber = str => /[0-9]/.test(str);

//Assumption is that any character which is not a digit or a standard letter is a special character
hasSpecialChar = str => /[^A-Za-z0-9]/.test(str);

checkEmailValidity = email => {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.value == '') {
    email.setCustomValidity('You must enter an email address');
    email.validity.customError;
    return false;
  } else if (regex.test(email.value) == false) {
    email.setCustomValidity('Email must be a valid email address');
    email.validity.customError;
    return false;
  }

  return true;
}