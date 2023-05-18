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

function uploadFile() {
  // (A) CREATE BLOB OBJECT
  var myBlob = new Blob([`<!DOCTYPE html>
  <html>
  <head>
  <title>Page Title</title>
  </head>
  <body>
  
  <h1>This is a Heading</h1>
  <p>This is a paragraph.</p>
  
  </body>
  </html>`], { type: 'text/plain' });

  // (B) FORM DATA
  var data = new FormData();
  data.append('upfile', myBlob);

  // (C) AJAX UPLOAD TO SERVER
  fetch('upload.php', { method: 'POST', body: data })
    .then((res) => res.text())
    .then((txt) => console.log("hi"));
}
