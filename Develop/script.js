// --- Global variables ---//
var length;
var confirmNumber;
var confirmSpecial;
var confirmUpper;
var confirmLower;

// Defining arrays that hold charscters user can choose from for Password//

special = ["!","@","#","$","%","^","&","*","(",")","_","+"];

lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

number = [1,2,3,4,5,6,7,8,9];

// Varible to house all user input choices
var userAnswers;

// // Event listner to launch createOrNot()  gen password function
var generateBtn = document.querySelector("#generate");

// // Event listner linked to HTML button.
generateBtn.addEventListener("click", createOrNot);


//--- ------------------INITIAL ASKING PROMPT TO CREATE PASS OR NOT ------------------------------//

// Start Function to launch - Generation of Pass
var createOrNot = function (){

// prompt to ask player if they'd like to create Pass or not
var promptPass = window.prompt(' would you like to "CREATE" a Password or "QUIT" ? ' );

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
//---------------------------PASSWORD CRITERIA PROMPTS ----------------------------------------//

// conditional 3 -- If Create is selected -- series of user prompts
if (promptPass === 'CREATE' || promptPass === 'create' ) {

//ask user for --Character length
var length = parseInt(window.prompt(" Type the number of of characters you would like the password to be. Type a number between 8 and 128. "));

// input validation
if(!length) {
    alert("Insert correct numeric value between 8 and 128 ");
// checks correct number range was selected
} else if (length < 8 || length > 128) {
    // restarts process
    length = parseInt(window.prompt(" Type the number of of characters you would like the password to be. Type a number between 8 and 128. "));

} else {
    // validation of which character types will be used

    confirmSpecial = confirm("Will this contain Special characters? ");
    confirmLower = confirm("Will this contain Lowercase letters? ");
    confirmUpper = confirm("Will this contain Uppercase letters? ");
    confirmNumber = confirm("Will this contain numbers? ");
};
}

//------------- CONDITIONALS BASED ON USER INPUT AND FOR LOOP  TO CREATE PASSWORD FROM IT -------/////

// IF ---- 8 - 128 ----Then make pass this # length--- (RESTRICT PASSWORD LENGTH --- MIN AND MAX CONDITIONS/ METHODS)

// IF ---- If YES to LowerC --  Include
// ---- Else --- NO to LowerC --- Then do not include and move on

// IF ---- If YES to UpperC -- Include
// ---- Else --- NO to UpperC --- Then do not include and move on

// IF ---- If YES to numberC -- Include
// ---- Else --- NO to numberC --- Then do not include and move on

// IF ---- If YES to specialC -- Include
// ---- Else --- NO to specialC --- Then do not include and move on

// Takes Results and compiles a Password//

// FOR LOOP THAT LOOPS THROUGH AND CREATES PASSWORD BASED ON WHAT CONDITIONS WE SET AS TRUE// 

// Password is displayed in an alert or Text Box!

//-------------------------------- Prompt asking if another password is desired -------------------------//

// IF --- YES restart CreateOrNot 
//     ---- NO --- 


// exits promptpass function
// return;
// };


// OG code use if needed 
// // Write password to the #password input
// function writePassword() {

// // original code- use later
// //   var password = generatePassword();

// //   var passwordText = document.querySelector("#password");

// //   passwordText.value = password;
// console.log( " I touched the button");
// }
}
createOrNot();