let socket = new WebSocket(
  'wss://file-service-swwp.onrender.com/ws',
  'echo-protocol'
);

document.getElementById('SignInPopUpDiv').style.display = 'none';
document.getElementById('NewAccountPopUpDiv').style.display = 'none';

function popUp(newAccount) {
  var x;

  if (!newAccount) x = document.getElementById('SignInPopUpDiv');
  else x = document.getElementById('NewAccountPopUpDiv');

  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

/** @param {Event} event */
function createAccount(event) {
  const url = new URL(form.action);
  const formData = new FormData(form);

  /** @type {Parameters<fetch>[1]} */
  const fetchOptions = {
    method: form.method,
    body: formData,
  };

  fetch(url, fetchOptions);

  event.preventDefault();
}