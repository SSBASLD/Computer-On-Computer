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
  let userDatas = localStorage.getItem('userDatas');

  if (!userDatas) userDatas = {};
  else userDatas = JSON.parse(userDatas);

  let userData = {};
  userData.password = document.getElementById('New Account Password').value;

  userDatas[document.getElementById('New Account Username').value] = userData;

  let jsonString = JSON.stringify(userDatas);
  localStorage.setItem('userDatas', jsonString);
}
