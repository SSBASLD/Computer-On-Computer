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

function createAccount() {
  let password = document.getElementById('New Account Password').value;
  let username = document.getElementById('New Account Username').value;

  let userDatas = localStorage.getItem('userDatas');

  if (!userDatas) userDatas = {};
  else userDatas = JSON.parse(userDatas);

  let userData = {};
  userData.password = password;

  userDatas[username] = userData;

  let jsonString = JSON.stringify(userDatas);
  localStorage.setItem('userDatas', jsonString);

  signIn(username, password);
}

async function signIn(username, password) {
  await localStorage.setItem('currentAccount', username);

  window.location.href = window.location.href + 'video-page/index.html';
}
