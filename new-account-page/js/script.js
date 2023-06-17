const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

function toHomePage() {
  let editedString = window.location.href.replace(
    /new-account-page\/index.html/,
    ''
  );
  window.location.href = editedString;
}

function createAccount() {
  let password = document.getElementById('New Account Password').value;
  let username = document.getElementById('New Account Username').value;
  let dolbyID = document.getElementById('Dolby Account ID').value;
  let dolbyStream = document.getElementById('Dolby Stream Name').value;

  if (password == '' || username == '' || dolbyID == '' || dolbyStream == '') {
    alert('Did not fill out all input forms');
    return;
  }

  let userDatas = localStorage.getItem('userDatas');

  if (!userDatas) userDatas = {};
  else userDatas = JSON.parse(userDatas);

  let userData = {};
  userData.password = password;
  userData.dolbyID = dolbyID;
  userData.dolbyStream = dolbyStream;
  userData.uniqueID = uid();

  userDatas[username] = userData;

  let jsonString = JSON.stringify(userDatas);
  localStorage.setItem('userDatas', jsonString);

  signIn(username, password);
}

async function signIn(username, password) {
  await sessionStorage.setItem('currentAccount', username);

  let editedString = window.location.href.replace(
    /new-account-page\/index.html/,
    ''
  );
  window.location.href = editedString + 'video-page/index.html';
}
