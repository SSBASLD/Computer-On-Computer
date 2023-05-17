document.getElementById('Sign In Button').onclick = popUp;

document.getElementById('PopUpDiv').hidden = true;

function popUp() {
  var x = document.getElementById('PopUpDiv');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
