console.log("hi");

let userData = JSON.parse(localStorage.getItem("userData"));

let username = localStorage.getItem("currentAccount");
let password = userData[username].password;

document.getElementById("headingOne").innerHTML = username;
document.getElementById("paragraph").innerHTML = password;