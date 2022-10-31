// Assignment code here

// encapusulating Function to ask User if they'd like to make a pass word
var createOrNot = function (){

// prompt to ask player if they'd like to create Pass or not
var promptPass = window.prompt(' would you like to "CREATE"  or "QUIT" a Password? ' );

// Conditional 1 - if no input or incorrect input is given -- redirect to opening prompt
if (promptPass === null || promptPass === "" ) {
    window.alert(' Please type in a valid input, try again! ')
    return createOrNot();
}
// Make machine convert everything to lowercase -- way to control input variability
promptPass = promptPass.toLocaleLowerCase();

// Conditional 2 -- if quit input is given. 
if (promptPass === "quit") {
    var confirmQuit = window.confirm(' Are you sure you would like to quit? ');

if (confirmQuit) {
    window.alert(' Thank you, hope you come back soon! ');
    // exits confirmquit function
    return;
}
}
// conditional 3 -- Series of prompts for pass criteria if user wants to CREATEf
if (promptPass === 'CREATE' || promptPass === 'create' ) {

// Charater length
var passLength = window.prompt(" Type the number of of characters you would like the password to be. Type a number between 8 and 128. ");

// parsed string from user input --- How to convert their "string #" to numeric data. 
var userPassLength = parseInt(passLength);
console.log(userPassLength);

// Lowercase Characters?
 var lowerC = window.prompt(" Would you like to include Lowecase Characters? Type 'YES' or 'NO' . ");

 // Uppercase Characters?
 var upperC = window.prompt(" Would you like to include Uppercase Characters? Type 'YES' or 'NO' . ");

 // Numeric characters?
 // math random for random number gen
 var numberC = window.prompt("Would you like to include Numbers ? Type 'YES' or 'NO' . ");

 // Special Characters?
 var specialC = window.prompt("Would you like to include special characters ? Type 'YES' or 'NO' .  ");
}


// exits promptpass function
return;
};



// Event listern goes at the very end
// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // Add event listener to generate button
generateBtn.addEventListener("click", createOrNot);

// OG code use if needed 
// // Write password to the #password input
// function writePassword() {

// // original code- use later
// //   var password = generatePassword();

// //   var passwordText = document.querySelector("#password");

// //   passwordText.value = password;
// console.log( " I touched the button");
// }
// passGen();