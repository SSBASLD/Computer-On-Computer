console.log('hi');

console.log(localStorage.getItem('userDatas'));

let userData = JSON.parse(localStorage.getItem('userDatas'));

let username = localStorage.getItem('currentAccount');

let password = userData[username].password;

document.getElementById('headingOne').innerHTML = username;
document.getElementById('paragraph').innerHTML = password;
