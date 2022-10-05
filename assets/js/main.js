
// Password Generator

let name;
let surname;
let color;
let password;

name = prompt("Insert Name");
surname = prompt("Insert Surname")
color = prompt("Insert Favourite Color")
password = name + surname + color + 22;

document.getElementById("password").innerHTML = password;