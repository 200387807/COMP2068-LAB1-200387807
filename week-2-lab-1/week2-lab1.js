
//const readline = require('readline');

//    input: process.stdin, // Similar to Request in Node
  //  output: process.stdout // Similar to response in Node
//});
// Array Valid options of game
let validOptions = ['rock', 'paper', 'scissors'];
var yourScore = 0;
var computerScore = 0;
var tie = 0;
//let choiceOptions = ["yes", "no"];

// Method to generate a choice from valid options for computer randomly
const generateChoice = () => {
    const index = Math.floor(Math.random() * Math.floor(3));
    return validOptions[index];
};

            function choice(choice){
            const computer = generateChoice();

            

                if (choice === computer) {
                    // check if tie happens
                    document.getElementById("message").innerHTML = `Tied!! Play again`;
                    tie += 1;
                    //console.log(` Computer's Choice was ${computer}`); 	
                   
                    document.getElementById("computerChoice").innerHTML = `Computer choose ` + computer ;
                    document.getElementById("resultBoard").innerHTML = `Score:`;
                   	document.getElementById("resultBoard").innerHTML = `Your Score: ${yourScore} Tie: ${tie} Loss: ${computerScore}`;

                } else if (
                    // Check if user wins
                    (choice === 'rock' && computer === 'scissors') ||
                    (choice === 'scissors' && computer === 'paper') ||
                    (choice === 'paper' && computer === 'rock')
                ) {
                	document.getElementById("computerChoice").innerHTML = `Computer choose ` + computer ;
                	document.getElementById("message").innerHTML = `Player Won!`;
                    //console.log(` Computer's Choice was ${computer}`);
                    yourScore += 1;
                    document.getElementById("resultBoard").innerHTML = `Score:`;
                   	document.getElementById("resultBoard").innerHTML = `Your Score: ${yourScore} Tie: ${tie} Loss: ${computerScore}`;
                } else {
                	document.getElementById("message").innerHTML = `Computer Won!`;
                	document.getElementById("computerChoice").innerHTML = `Computer choose ` + computer ;

                    //console.log(`Computer Won! Computer's Choice was ${computer}`);
                    computerScore += 1;
                    document.getElementById("resultBoard").innerHTML = `Score:`;
                   	document.getElementById("resultBoard").innerHTML = `Your Score: ${yourScore} Tie: ${tie} Loss: ${computerScore}`;
		}
	}