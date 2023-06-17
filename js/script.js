document.getElementById('SignInPopUpDiv').style.display = 'none';

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

function toAccountPage() {
  let editedString = window.location.href.replace(/index.html/, '');

  window.location.href = editedString + 'new-account-page/index.html';
}

function checkAccount() {
  let username = document.getElementById('Sign In Username').value;
  let password = document.getElementById('Sign In Password').value;

  let userDatas = localStorage.getItem('userDatas');

  if (!userDatas) userDatas = {};
  else userDatas = JSON.parse(userDatas);

  if (userDatas[username] != null) {
    if (userDatas[username].password == password) {
      signIn(username, password);
    }
  } else {
    alert('Incorrect Username or Password');
  }
}

async function signIn(username, password) {
  await localStorage.setItem('currentAccount', username);

  let editedString = window.location.href.replace(
    /new-account-page\/index.html/,
    ''
  );
  window.location.href = editedString + 'video-page/index.html';
}
