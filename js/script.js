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

let socket = new WebSocket('wss://webrtc-test-6o5u.onrender.com/ws', [
  'echo-protocol',
]);

function createAccount() {
  let jsonDataString = `{
    "test": "test"
  }`;

  socket.send(jsonDataString);
}