let disclaimer = confirm("Disclaimer: gambling is bad"); //you need to agree with the rules
if (disclaimer) {
    let moneyAmount = prompt("How much $ do you want to trade for chips? (1 USD = 1 chip)") //you need chips to play with
    let moneyAmountStart = moneyAmount;
    let win = false; //casino always wins
    if (isNaN(moneyAmount)) {
        alert("You sly fox, you ought to write a number!")
    } else {
        let gameChoice = prompt("Please select the game you want to play (lol): \n 1. Roulette")
        if (gameChoice == 1) {
            alert("How to Play Roulette: \n 1. You are going to make a first bet (if you are to lose, the bet will automatically increase 2x until you win) \n 2. You can choose what to bet on: red or black \n 3. Luck will determine your fate");
            let userBet = prompt("How much money are you willing to bet");
            if (isNaN(userBet) || Number(userBet) > moneyAmount) {
                alert("Congratulations! You've broken the game! Are you happy with yourself?")
            } else {
                while (moneyAmount > 0 && win == false) {
                    let userChoice = prompt("Write red or black");
                    const randomNumber = Math.floor(Math.random() * 36) + 1;
                    if (randomNumber == 1 || randomNumber == 3 || randomNumber == 5 || randomNumber == 7 || randomNumber == 9 || randomNumber == 12 || randomNumber == 14 || randomNumber == 16 || randomNumber == 18 || randomNumber == 19 || randomNumber == 21 || randomNumber == 23 || randomNumber == 25 || randomNumber == 27 || randomNumber == 30 || randomNumber == 32 || randomNumber == 34 || randomNumber == 36) {
                        rouletteResult = 'red';
                    } else {
                        rouletteResult = 'black';
                    }
                    if (userChoice == 'red') {
                        if (userChoice == rouletteResult) {
                            moneyAmount = Number(moneyAmount) + Number(userBet);
                            let moneyAmountResult = moneyAmount - moneyAmountStart;
                            alert("You've finally won! Now you have " + moneyAmount + "$, which means you've won " + moneyAmountResult + "$");
                            let response = confirm("Do you wish to continue playing? (the bet will still be " + userBet + "$)");
                            if (response == false) {
                                alert("Okay then, enjoy your " + moneyAmount + "$")
                                win = true;
                            }
                        } else {
                            moneyAmount = Number(moneyAmount) - Number(userBet);
                            userBet = userBet*2;
                            alert("You've lost! Now you have " + moneyAmount + "$ and your bet is now " + userBet + "$");
                        }
                    } else if (userChoice == 'black') {
                        if (userChoice == rouletteResult) {
                            moneyAmount = Number(moneyAmount) + Number(userBet);
                            let moneyAmountResult = moneyAmount - moneyAmountStart;
                            alert("You've finally won! Now you have " + moneyAmount + "$, which means you've won " + moneyAmountResult + "$");
                            let response = confirm("Do you wish to continue playing? (the bet will still be " + userBet + "$)")
                            if (response == false) {
                                alert("Okay then, enjoy your " + moneyAmount + "$")
                                win = true;
                            }
                        } else {
                            moneyAmount = Number(moneyAmount) - Number(userBet);
                            userBet = userBet*2;
                            alert("You've lost! Now you have " + moneyAmount + "$ and your bet is now " + userBet + "$");
                        }
                    } else {
                        alert("Congratulations! You've broken the game! Are you happy with yourself?")
                        break;
                    }
                }
                if (moneyAmount <= 0) {
                    let moneyAmountResult = moneyAmount * -1;
                    alert("You've lost all your money! In addition you owe us " + moneyAmountResult + "$");
                }
            }
        } else {
            alert("You were unable to choose a game from this high-variety catalogue, so now it is over for you")
        }
    }
} else {
    alert("You are not allowed to play then!")
}
