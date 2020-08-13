/* 
//Practice and notes section
var playerName = window.prompt("What is your robot's name?");
// Note the lack of quotation marks around playerName
console.log(playerName);


// this will log a string
console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10 + 10);
// this will concatenate a string and a variable
console.log("Our robot's name is " + playerName);


// this creates a function named "fight"
function fight() {
    window.alert("The fight has begun!");
  }

  //fight();
*/

var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack =10;

//You can also log multiple values at once like this
console.log("My robot's name: " + playerName + "\n" + "My robot's attack: " + playerAttack + "\n" + "My robot's health: " + playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log("Enemy's name: " + enemyName + "\n" + "Enemy's attack: " + enemyAttack + "\n" + "Enemy's health: " + enemyHealth);

/*
//Function declaration: This is when we create a function using the function keyword first
function fight() {
    window.alert("Welcome to Robot Gladiators!");
}
*/

//Function expression: This is when we create a function by assigning it to a variable.
var fight = function() {
    window.alert("Welcome to Robot Gladiators");

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")
};

fight();
