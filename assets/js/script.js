// Assignment Code
var generateBtn = document.querySelector("#generate");

// global variable declaration
// initial values
var passwordLength = 0;
var withspecialCharacters = false;
var withnumericCharacters = false;
var withlowercaseCharacters = false;
var withuppercaseCharacters = false;

function getPasswordLength() {
  
  passwordLength = 0; // reset password to 0 everytime generating for a new password
  var isValid = false; // variable for flag

  while(isValid === false) {

    passwordLength = prompt("How many characters would you like your password to contain?");

    if(!passwordLength) { // check if passwordLength is valid
      alert("Invalid input");
      continue;
    }
    
    // validate if password length is valid
    if ((passwordLength < 8) || (passwordLength > 120)) {
      alert("At least 8 characters and no more than  128 characters");
      continue;
    }

    isValid = true;

  }

}

function specialCharacters() {
  let text = "Click OK to confirm including special characters.";
   withspecialCharacters = confirm(text);
  //  console.log(withspecialCharacters);
}

function numericCharacters() {
  let text = "Click OK to confirm including numeric characters.";
   withnumericCharacters = confirm(text);
  //  console.log(withnumericCharacters);
}

function lowercaseCharacters() {
  let text = "Click OK to confirm including lowercase characters.";
   withlowercaseCharacters = confirm(text);
  //  console.log(withlowercaseCharacters);
}

function uppercaseCharacters() {
  let text = "Click OK to confirm including uppercase characters.";
   withuppercaseCharacters = confirm(text);
  //  console.log(withuppercaseCharacters);
}

function generatePassword() {

  // holds the values for specific cases
  var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
  var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var specialChar = "!@#$%^&*()"
  var numeric = "0123456789"
  // console.log(lowerAlphabet);
  // console.log(upperAlphabet);
  // console.log(specialChar);
  // console.log(numeric);
  // console.log("Clicked the button");

  var characters = ""
  if (withspecialCharacters) { 
    // add special characters if selected
    characters+=specialChar
  }

  if (withnumericCharacters) {
    // concat special numeric if selected
    characters+=numeric
  }

  if (withlowercaseCharacters) {
    // lower characters
    characters+=lowerAlphabet
  }

  if (withuppercaseCharacters) {
    // upper characters
    characters+=upperAlphabet
  }

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    // randomly selects character base on their index
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
 
  return password; // return the generated password
}

// Write password to the #password input
function writePassword() {

  getPasswordLength(); // password length prompt
  specialCharacters(); // special characters prompt
  numericCharacters(); // numeric prompt
  lowercaseCharacters(); // lowercase prompt
  uppercaseCharacters(); // uppercase prompt

  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
