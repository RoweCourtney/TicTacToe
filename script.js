/* __________ To Do list __________
    1- way to display board in commmand prompt
    2- check for empty square / valid move
    3- check for player move
    4- check for win / draw

    create variables: one for each square
    create Array: array holds 0's as O & 1's as X 

*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function GetUserInput(prompt) {
    return await new Promise(resolve => { rl.question(prompt, resolve); });
}

function printBoard(Board) {
    console.log(`
     _${Board[0]}_|_${Board[1]}_|_${Board[2]}_
     _${Board[3]}_|_${Board[4]}_|_${Board[5]}_
     _${Board[6]}_|_${Board[7]}_|_${Board[8]}_ 
     `);     
 };


function compTurn(Board, compToken, playerToken) {
    let result = -1;

    result = win(Board, compToken);
    if (result >= 0) {return result;};

    result = block(Board, playerToken);
    if (result >= 0) {return result;};

    result = fork(Board, playerToken, compToken);
    if (result >= 0) {return result;};

    // result = blockFork(Board, playerToken, compToken);
    // if (result >= 0) {return result;};

    result = center(Board, playerToken, compToken);
    if (result >= 0) {return result;};

    result = oppositeCorner(Board, playerToken);
    if (result >= 0) {return result;};

    result = emptyCorner(Board, playerToken, compToken);
    if (result >= 0) {return result;};

    result = emptySide(Board, playerToken, compToken);
    if (result >= 0) {return result;};

    result = firstEmpty(Board);
    if (result >= 0) {return result;};

    return result;
};
 
function firstEmpty(Board) {
    return Board.indexOf("-");
};

function win(Board, compToken) {
    if (Board[0]== compToken && Board[1]== compToken && Board[2]== "-") {
        return 2;
     } 
     
     if (Board[1]== compToken && Board[2]== compToken && Board[0]== "-") {
         return 0;
     }
     
     if (Board[0]== compToken && Board[2]== compToken && Board[1]== "-") {
         return 1;
     } 
 
     if (Board[3]== compToken && Board[4]== compToken && Board[5]== "-") {
         return 5;
     }
 
     if (Board[4]== compToken && Board[5]== compToken && Board[3]== "-") {
         return 3;
     }
 
     if (Board[3]== compToken && Board[5]== compToken && Board[4]== "-") {
         return 4;
     }
     
     if (Board[6]== compToken && Board[7]== compToken && Board[8]== "-") {
         return 8;
     }
 
     if (Board[7]== compToken && Board[8]== compToken && Board[6]== "-") {
         return 6;
     }     
 
     if (Board[6]== compToken && Board[8]== compToken && Board[7]== "-") {
         return 7;
     }
          
     if (Board[0]== compToken && Board[3]== compToken && Board[6]== "-") {
         return 6;
     }
          
     if (Board[3]== compToken && Board[6]== compToken && Board[0]== "-") {
         return 0;
     }
          
     if (Board[0]== compToken && Board[6]== compToken && Board[3]== "-") {
         return 3;
     }
 
     if (Board[1]== compToken && Board[4]== compToken && Board[7]== "-") {
         return 7;
     }     
 
     if (Board[4]== compToken && Board[7]== compToken && Board[1]== "-") {
         return 1;
     } 
     
     if (Board[1]== compToken && Board[7]== compToken && Board[4]== "-") {
         return 4;
     }    
 
     if (Board[2]== compToken && Board[5]== compToken && Board[8]== "-") {
         return 8;
     }     
 
     if (Board[5]== compToken && Board[8]== compToken && Board[2]== "-") {
         return 2;
     }
          
     if (Board[2]== compToken && Board[8]== compToken && Board[5]== "-") {
         return 5;
     }
         
     if (Board[0]== compToken && Board[4]== compToken && Board[8]== "-") {
         return 8;
     }
        
     if (Board[4]== compToken && Board[8]== compToken && Board[0]== "-") {
         return 0;
     }
 
     if (Board[0]== compToken && Board[8]== compToken && Board[4]== "-") {
         return 4;
     }
          
     if (Board[2]== compToken && Board[4]== compToken && Board[6]== "-") {
         return 6;
     }
          
     if (Board[4]== compToken && Board[6]== compToken && Board[2]== "-") {
         return 2;
     }
          
     if (Board[2]== compToken && Board[6]== compToken && Board[4]== "-") {
         return 4;
     } else {
         return -1;
     }
};

function block(Board, playerToken) {
    if (Board[0]== playerToken && Board[1]== playerToken && Board[2]== "-") {
        return 2;
     } 
     
     if (Board[1]== playerToken && Board[2]== playerToken && Board[0]== "-") {
         return 0;
     }
     
     if (Board[0]== playerToken && Board[2]== playerToken && Board[1]== "-") {
         return 1;
     } 
 
     if (Board[3]== playerToken && Board[4]== playerToken && Board[5]== "-") {
         return 5;
     }
 
     if (Board[4]== playerToken && Board[5]== playerToken && Board[3]== "-") {
         return 3;
     }
 
     if (Board[3]== playerToken && Board[5]== playerToken && Board[4]== "-") {
         return 4;
     }
     
     if (Board[6]== playerToken && Board[7]== playerToken && Board[8]== "-") {
         return 8;
     }
 
     if (Board[7]== playerToken && Board[8]== playerToken && Board[6]== "-") {
         return 6;
     }     
 
     if (Board[6]== playerToken && Board[8]== playerToken && Board[7]== "-") {
         return 7;
     }
          
     if (Board[0]== playerToken && Board[3]== playerToken && Board[6]== "-") {
         return 6;
     }
          
     if (Board[3]== playerToken && Board[6]== playerToken && Board[0]== "-") {
         return 0;
     }
          
     if (Board[0]== playerToken && Board[6]== playerToken && Board[3]== "-") {
         return 3;
     }
 
     if (Board[1]== playerToken && Board[4]== playerToken && Board[7]== "-") {
         return 7;
     }     
 
     if (Board[4]== playerToken && Board[7]== playerToken && Board[1]== "-") {
         return 1;
     } 
     
     if (Board[1]== playerToken && Board[7]== playerToken && Board[4]== "-") {
         return 4;
     }    
 
     if (Board[2]== playerToken && Board[5]== playerToken && Board[8]== "-") {
         return 8;
     }     
 
     if (Board[5]== playerToken && Board[8]== playerToken && Board[2]== "-") {
         return 2;
     }
          
     if (Board[2]== playerToken && Board[8]== playerToken && Board[5]== "-") {
         return 5;
     }
         
     if (Board[0]== playerToken && Board[4]== playerToken && Board[8]== "-") {
         return 8;
     }
        
     if (Board[4]== playerToken && Board[8]== playerToken && Board[0]== "-") {
         return 0;
     }
 
     if (Board[0]== playerToken && Board[8]== playerToken && Board[4]== "-") {
         return 4;
     }
          
     if (Board[2]== playerToken && Board[4]== playerToken && Board[6]== "-") {
         return 6;
     }
          
     if (Board[4]== playerToken && Board[6]== playerToken && Board[2]== "-") {
         return 2;
     }
          
     if (Board[2]== playerToken && Board[6]== playerToken && Board[4]== "-") {
         return 4;
     } else {
         return -1;
     }

};

function fork(Board, playerToken, compToken) {
    if (Board[0]== compToken && Board[1]== compToken && Board[2]== playerToken) {
        return 4;
    }

    if (Board[0]== compToken && Board[3]== compToken && Board[6]== playerToken) {
        return 4;
    }

    if (Board[3]== compToken && Board[6]== compToken && Board[0]== playerToken) {
        return 4;
    }

    if (Board[6]== compToken && Board[7]== compToken && Board[8]== playerToken) {
        return 4;
    }

    if (Board[7]== compToken && Board[8]== compToken && Board[6]== playerToken) {
        return 4;
    }

    if (Board[5]== compToken && Board[8]== compToken && Board[2]== playerToken) {
        return 4;
    }

    if (Board[1]== compToken && Board[2]== compToken && Board[0]== playerToken) {
        return 4;
    }

    if (Board[2]== compToken && Board[5]== compToken && Board[8]== playerToken) {
        return 4;
    }

    if (Board[0]== compToken && Board[8]== compToken && Board[6]== playerToken && Board[4]== playerToken) {
        return 2;
    }

    if (Board[6]== compToken && Board[2]== compToken && Board[4]== playerToken && Board[8]== playerToken) {
        return 0;
    }

    if (Board[6]== compToken && Board[2]== compToken && Board[0]== playerToken && Board[4]== playerToken) {
        return 8;
    }

    if (Board[0]== compToken && Board[8]== compToken && Board[4]== playerToken && Board[2]== playerToken) {
        return 6;
    } else {
        return -1;
    }
};

function blockFork(Board, playerToken, compToken) {
    
};

function center(Board, playerToken) {
    if (Board[0]== playerToken &&  Board[4]== "-"){
        return 4;
    }

    if (Board[2]== playerToken &&  Board[4]== "-"){
        return 4;
    }

    if (Board[8]== playerToken &&  Board[4]== "-"){
        return 4;
    }

    if (Board[6]== playerToken &&  Board[4]== "-"){
        return 4;
    }

    if (Board[4]== playerToken &&  Board[0]== "-"){
        return 0;
    }

    if (Board[4]== playerToken &&  Board[2]== "-"){
        return 2;
    }

    if (Board[4]== playerToken &&  Board[8]== "-"){
        return 8;
    }

    if (Board[4]== playerToken &&  Board[6]== "-"){
        return 6;
    }

    if (Board[1]== playerToken &&  Board[4]== "-"){
        return 4;
    }

    if (Board[3]== playerToken &&  Board[4]== "-"){
        return 4;
    }

    if (Board[5]== playerToken &&  Board[4]== "-"){
        return 4;
    }

    if (Board[7]== playerToken &&  Board[4]== "-"){
        return 4;
    }
};

function oppositeCorner(Board, playerToken) {
    if (Board[0]== playerToken &&  Board[4]== "-"){
        return 8;
    }

    if (Board[2]== playerToken &&  Board[4]== "-"){
        return 6;
    }

    if (Board[8]== playerToken &&  Board[4]== "-"){
        return 0;
    }

    if (Board[6]== playerToken &&  Board[4]== "-"){
        return 2;
    }
};

function emptyCorner(Board, playerToken, compToken) {
    if (Board[1]== playerToken && Board[0]== "-") {
        return 0;
    }

    if (Board[1]== playerToken && Board[2]== "-") {
        return 2;
    }

    if (Board[7]== playerToken && Board[6]== "-") {
        return 6;
    }

    if (Board[7]== playerToken && Board[8]== "-") {
        return 8;
    }

    if (Board[5]== playerToken && Board[2]== "-") {
        return 2;
    }

    if (Board[5]== playerToken && Board[8]== "-") {
        return 8;
    }

    if (Board[3]== playerToken && Board[0]== "-") {
        return 0;
    }

    if (Board[3]== playerToken && Board[6]== "-") {
        return 6;
    }
};

function emptySide(Board, playerToken, compToken) {
    if (Board[1]== playerToken && Board[7]== "-") {
        return 7;
    }

    if (Board[3]== playerToken && Board[5]== "-") {
        return 5;
    }

    if (Board[5]== playerToken && Board[3]== "-") {
        return 3;
    }

    if (Board[7]== playerToken && Board[1]== "-") {
        return 1;
    }
};

function bestOf() {

};

const main = async() => {

    let Board = ['-','-','-',
                 '-','-','-',
                 '-','-','-'];

    let gameOver = false;

    let Welcome = "\n" + "Hi there! Let's play \nbut first choose a token. \nPress 1 for X & 0 for O \n";
    let answer = await GetUserInput(Welcome) + "\n";

    let playerToken = (answer == 1) ?  "X" : "O";
    let compToken = (answer == 1) ? "O" : "X";

    let roundSelection = "\n" + "Now select how many rounds you'd like to play. \nUse your number keys to select a number between 1 & 5.\n";
    let numberOfRounds =  await GetUserInput(roundSelection) + "\n";
    let roundCounter = 0;
    
    let playerWins = 0;
    let compWins = 0;

    let placingToken = "Place your token using #'s 1 - 9." + 
    `
    _1_|_2_|_3_
    _4_|_5_|_6_
    _7_|_8_|_9_
    \n`


    while (roundCounter < numberOfRounds) {
        let roundStart = "\n" + "Round " + (roundCounter + 1) + " of " + numberOfRounds
        console.log(roundStart);
        gameOver = false;
        Board = ['-','-','-',
                 '-','-','-',
                 '-','-','-']; 

        while(!gameOver) {
            
            let tokenPlacement_Player;
            while(true) {
                tokenPlacement_Player = await GetUserInput(placingToken);
                if (Board[tokenPlacement_Player - 1] == "-") {break;} 
                console.log("Invalid Selection. Please make new Selection.");
            };
            Board[tokenPlacement_Player - 1] = playerToken;
            printBoard(Board);

            if (Board[0]== playerToken && Board[1]== playerToken && Board[2]== playerToken || Board[3]== playerToken && Board[4]== playerToken && Board[5]== playerToken || 
                Board[6]== playerToken && Board[7]== playerToken && Board[8]== playerToken || Board[0]== playerToken && Board[3]== playerToken && Board[6]== playerToken || 
                Board[1]== playerToken && Board[4]== playerToken && Board[7]== playerToken || Board[2]== playerToken && Board[5]== playerToken && Board[8]== playerToken ||
                Board[0]== playerToken && Board[4]== playerToken && Board[8]== playerToken || Board[2]== playerToken && Board[4]== playerToken && Board[6]== playerToken) 
            {
                gameOver = true;
                console.log("Game Over! " + playerToken + "'s Win!");
                break;
            };

            if (Board.indexOf("-") == -1) { 
                gameOver = true
                console.log("Game Over! Game was a Draw.");
                break;
            };
                    
            let tokenPlacement_Comp = compTurn(Board, compToken, playerToken);
            Board[tokenPlacement_Comp] = compToken;
            printBoard(Board); 
                
            if (Board[0]== compToken && Board[1]== compToken && Board[2]== compToken || Board[3]== compToken && Board[4]== compToken && Board[5]== compToken || Board[6]== compToken && Board[7]== compToken && Board[8]== compToken ||
                Board[0]== compToken && Board[3]== compToken && Board[6]== compToken || Board[1]== compToken && Board[4]== compToken && Board[7]== compToken || Board[2]== compToken && Board[5]== compToken && Board[8]== compToken ||
                Board[0]== compToken && Board[4]== compToken && Board[8]== compToken || Board[2]== compToken && Board[4]== compToken && Board[6]== compToken)
            {
                gameOver = true;
                console.log("Game Over! " + compToken + "'s Win!"); 
                break;  
            };

            if (Board.indexOf("-") == -1) { 
                gameOver = true
                console.log("Game Over! Game was a Draw.");
                break;
            };
        };
        roundCounter++
    };

    rl.close();
};

main();