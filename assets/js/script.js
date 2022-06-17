// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var withspecialCharacters = false;
var withnumericCharacters = false;
var withlowercaseCharacters = false;
var withuppercaseCharacters = false;

function getPasswordLength() {
  passwordLength = prompt("How many characters would you like your password to contain?");
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

  var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
  var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var specialChar = "!@#$%^&*()"
  var numeric = "0123456789"
  console.log(lowerAlphabet);
  console.log(upperAlphabet);
  console.log(specialChar);
  console.log(numeric);
  console.log("Clicked the button");

  var characters = ""
  if (withspecialCharacters) {
    characters+=specialChar
  }

  if (withnumericCharacters) {
    characters+=numeric
  }

  if (withlowercaseCharacters) {
    characters+=lowerAlphabet
  }

  if (withuppercaseCharacters) {
    characters+=upperAlphabet
  }

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
 
  return password;
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
