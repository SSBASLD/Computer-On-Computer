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
