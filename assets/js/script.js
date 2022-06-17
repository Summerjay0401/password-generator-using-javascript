// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var withspecialCharacters = false;
var withnumericCharacters = false;
var withlowercaseCharacters = false;
var withuppercaseCharacters = false;

function getPasswordLength() {
  passwordLength = prompt("How many chartacters would you like your password to contain?");
  console.log(passwordLength);
}

function specialCharacters() {
  let text = "Click OK to confirm including special characters.";
   withspecialCharacters = confirm(text);
   console.log(withspecialCharacters);

}

function numericCharacters() {
  let text = "Click OK to confirm including numeric characters.";
   withnumericCharacters = confirm(text);
   console.log(withnumericCharacters);

}

function lowercaseCharacters() {
  let text = "Click OK to confirm including lowercase characters.";
   withlowercaseCharacters = confirm(text);
   console.log(withlowercaseCharacters);

}

function uppercaseCharacters() {
  let text = "Click OK to confirm including uppercase characters.";
   withuppercaseCharacters = confirm(text);
   console.log(withuppercaseCharacters);

}

function generatePassword() {

  var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  console.log(characters);

  console.log("Clicked the button");

  var getPassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  };
 
  return "password will go here";
}

// Write password to the #password input
function writePassword() {
  getPasswordLength()
  specialCharacters()
  numericCharacters()
  lowercaseCharacters()
  uppercaseCharacters()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
