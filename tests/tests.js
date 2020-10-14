QUnit.module("Form tests", {
  after: () => {
    document.getElementById('test-div').remove();
  }
});

QUnit.test("Submit button is disabled when no password is supplied", (assert) => {
  assert.true(document.getElementById('submit-button').disabled, "Submit is disabled by default");
  document.forms['registration-form']['email'].value = 'email@test.com';
  assert.true(document.getElementById('submit-button').disabled, "Submit is disabled when no password is supplied");
});

QUnit.test("Password must contain 8 characters", (assert) => {
  document.forms['registration-form']['password'].value = 'longstring';
  $('#password').trigger('keyup');
  assert.equal(document.getElementById('password-character').innerText, '\u2713', "String length is valid");
  document.forms['registration-form']['password'].value = 'short';
  $('#password').trigger('keyup');
  assert.equal(document.getElementById('password-character').innerText, '\u2717', "String length is not valid");
});

QUnit.test("Password must contain lowercase characters", (assert) => {
  document.forms['registration-form']['password'].value = 'lower';
  $('#password').trigger('keyup');
  assert.equal(document.getElementById('password-lowercase').innerText, '\u2713', "String lowercase is valid");
  document.forms['registration-form']['password'].value = 'UPPER';
  $('#password').trigger('keyup');
  assert.equal(document.getElementById('password-lowercase').innerText, '\u2717', "String lowercase is not valid");
});

QUnit.test("Password must contain 8 characters", (assert) => {
  document.forms['registration-form']['password'].value = 'UPPER';
  $('#password').trigger('keyup');
  assert.equal(document.getElementById('password-uppercase').innerText, '\u2713', "String uppercase is valid");
  document.forms['registration-form']['password'].value = 'lower';
  $('#password').trigger('keyup');
  assert.equal(document.getElementById('password-uppercase').innerText, '\u2717', "String uppercase is not valid");
});

QUnit.test("Password must contain a number", (assert) => {
  document.forms['registration-form']['password'].value = 'string1';
  $('#password').trigger('keyup');
  assert.equal(document.getElementById('password-number').innerText, '\u2713', "String number is valid");
  document.forms['registration-form']['password'].value = 'nonumstring';
  $('#password').trigger('keyup');
  assert.equal(document.getElementById('password-number').innerText, '\u2717', "String number is not valid");
});

QUnit.test("Password must contain 8 characters", (assert) => {
  document.forms['registration-form']['password'].value = '!test';
  $('#password').trigger('keyup');
  assert.equal(document.getElementById('password-special').innerText, '\u2713', "String special character is valid");
  document.forms['registration-form']['password'].value = 'nottesting';
  $('#password').trigger('keyup');
  assert.equal(document.getElementById('password-special').innerText, '\u2717', "String special character is not valid");
});
