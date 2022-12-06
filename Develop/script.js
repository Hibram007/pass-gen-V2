// --- Global variables ---//
var length;
var confirmNumber;
var confirmSpecial;
var confirmUpper;
var confirmLower;

// Defining arrays that hold characters user can choose from for Password//

special = ["!","@","#","$","%","^","&","*","(",")","_","+"];

lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

number = [1,2,3,4,5,6,7,8,9];

// Varible to house all user input choices
var userAnswers;

// // Variable linked to Event listener
var generateBtn = document.querySelector("#generate");

// // Event listner linked to pg variable housing pass gen function and pg assigned to display in the textbox area.
generateBtn.addEventListener("click", function () {
    pg = createOrNot();
    document.getElementById("password").placeholder = pg;
});

//--- ------------------INITIAL ASKING PROMPT TO CREATE PASS OR NOT ------------------------------//

// Start Function to launch - Generation of Pass
function createOrNot(){

//ask user for --Character length
var length = parseInt(window.prompt(" Type the number of characters you would like the password to be. Type a number between 8 and 128. "));

// input validation
if (!length) {
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

// //------------- CONDITIONALS BASED ON USER INPUT AND FOR LOOP TO CREATE PASSWORD FROM IT -------/////

// /// Writing out series of options based on negative vs positive answers to the prompt

// 4 Negatives -- If all No's
if (!confirmSpecial && !confirmNumber && !confirmUpper && !confirmLower){
    userAnswers = alert("You must choose a criteria! ");

// 4 Positives
} else if( confirmSpecial && confirmNumber && confirmUpper && confirmLower){
    userAnswers = special.concat(number,lower,upper);
   
 // 3 Positives
} else if ( confirmSpecial && confirmNumber && confirmUpper){
    userAnswers = special.concat(number,upper);

} else if ( confirmSpecial && confirmNumber && confirmLower){
    userAnswers = special.concat(number,lower);

} else if ( confirmSpecial && confirmUpper && confirmLower){
    userAnswers = special.concat(upper,lower);

} else if ( confirmLower && confirmNumber && confirmUpper){
    userAnswers = lower.concat(number,upper);

// 2 Positives
} else if ( confirmSpecial && confirmNumber){
    userAnswers = special.concat(number);

} else if ( confirmSpecial && confirmLower){
    userAnswers = special.concat(lower);

} else if ( confirmSpecial && confirmUpper){
    userAnswers = special.concat(upper);

} else if ( confirmLower && confirmNumber){
    userAnswers = lower.concat(number);

} else if ( confirmLower && confirmUpper){
    userAnswers = lower.concat(upper);

} else if ( confirmUpper && confirmNumber){
    userAnswers = upper.concat(number);

   // 1 Positive 
} else if ( confirmUpper){
    userAnswers = upper;

} else if (confirmNumber){
    userAnswers = number;

}else if ( confirmSpecial){
    userAnswers = special;

}else if ( confirmLower){
    userAnswers = lower;
};
// // FOR LOOP THAT LOOPS THROUGH AND CREATES PASSWORD BASED ON WHAT CONDITIONS WE SET AS TRUE// 

// // empty array to house user generated password length
var password = [];



// For loops with Randomness methods to produce random combinations of character choices
for (var i = 0; i < length; i++) {
    var pickedAnswers = userAnswers[Math.floor(Math.random()* userAnswers.length)];
//push data into array
password.push(pickedAnswers);
}

// joins password array and coverts to string to display
var pg = password.join(" ");
UserInput(pg);

// ---------Everything Above this works -----//
return pg;
}

// puts generated password into textbox
function UserInput(pg){
    document.getElementById("password").textContent = pg;

}