// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

function generatePassword() {
  let random = document.getElementById("btn").values;
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890`~!@#$%^&*()-_=+";
  let password = "";
  for(var i = 0; i <= random; i++)
  passwordText.values = password;
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)))






// Add event listener to generate button
generateBtn.addEventListener ("click", generatePassword);
document.addEventListener ("generate password".values + password);
document.getElementById ("myBtn") .addEventListener ("click", function (){
document.getElementById ("password") .innerHTML = "Generate Password";
});
