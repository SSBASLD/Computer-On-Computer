document.getElementById('Sign In Button').onclick = popUp;

function popUp() {
  var x = document.getElementById('PopUpDiv');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
