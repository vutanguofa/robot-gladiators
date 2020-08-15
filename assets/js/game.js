/* 
//Practice and notes section
var playerInfo.name = window.prompt("What is your robot's name?");
// Note the lack of quotation marks around playerInfo.name
console.log(playerInfo.name);


// this will log a string
console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10 + 10);
// this will concatenate a string and a variable
console.log("Our robot's name is " + playerInfo.name);


// this creates a function named "fight"
function fight() {
    window.alert("The fight has begun!");
  }

  //fight();
*/


// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less



//You can also log multiple values at once like this
//console.log("My robot's name: " + playerInfo.name + "\n" + "My robot's attack: " + playerInfo.health + "\n" + "My robot's health: " + playerInfo.health);

//console.log(enemy.name);
//console.log(enemy.name[0]);
//console.log(enemy.name[1]);
//console.log(enemy.name[2]);
//console.log(enemy.name.length); // will log the number of elements in an array in the console
//console.log(enemy.name[enemy.name.length - 1]); // will log the last element in an array in the console


/*
for(var i = 0; i < enemy.name.length; i++) {
    console.log(enemy.name[i]);
    console.log(i);
    console.log(enemy.name[i] + " is at " + i + " index");
  }
*/

//console.log("Enemy's name: " + enemyInfo.name + "\n" + "Enemy's attack: " + enemyInfo.attack + "\n" + "Enemy's health: " + enemyInfo.health);

/*
//Function declaration: This is when we create a function using the function keyword first. This type of function allows us to call the function first followed by defining the function declaration. For function expressions, the function needs to be declared first before the function can be called.
function fight() {
    window.alert("Welcome to Robot Gladiators!");
}
*/


//Some examples of operators: <, >, <=, >=, ===, ||

//Function expression: This is when we create a function by assigning it to a variable. The function expression needs to be defined first before the function can be called. For function declartions, the function can be called first followed by delcaring the function.
var fight = function (enemy) {
    console.log(enemy);
    while (playerInfo.health > 0 && enemy.health > 0) {
        // ask user if they'd liked to fight or run
        var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

        // if user picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
                // subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money)
                break;
            }
        }


        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.health - 3, playerInfo.health);
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
        );

        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + ' has died!');

            // award player money for winning
            playerInfo.money = playerInfo.money + 20;

            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
        }

        // generate random damage value based on player's attack power
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
        );

        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + ' has died!');
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
        }
    }
};

// function to start a new game
var startGame = function () {
    // reset player stats
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;

    for (var i = 0; i < enemyInfo.length; i++) {
        console.log(playerInfo.name + ", " + playerInfo.health + ", " + playerInfo.attack);
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyObj = enemyInfo[i];

            //The Math.random() method returns a random decimal number between 0 and 1 (but not including 1, meaning you would never get exactly 1).
            //The Math.floor() method is used to round down to the nearest whole number.

            pickedEnemyObj.health = randomNumber(40, 60);
            //enemy.health = Math.floor(Math.random() * 60) +40; //Will output a random decimal between 0 and 59.XX. The result will be rounded down and added to 40.


            fight(pickedEnemyObj);

            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // ask if user wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

var endGame = function () {
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

var shop = function () {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": // new case
        case "refill":
            if (playerInfo.money >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                playerInfo.health = playerInfo.health + 20;
                playerInfo.money = playerInfo.money - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }

            break;
        case "UPGRADE": // new case
        case "upgrade":
            if (playerInfo.money >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                playerInfo.health = playerInfo.health + 6;
                playerInfo.money = playerInfo.money - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }

            break;
        case "LEAVE": // new case
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
};

// function to generate a random numeric value
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value; //The return statement serves two purposes; return a value and to end the function. It's similar to using a break statement in a for or while loop.
};

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

// start the game when the page loads by calling the StartGame() function
startGame();


