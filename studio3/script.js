(function () {
    'use strict';

    console.log('reading js');

    const yes = document.querySelector('#yes');
    const no = document.querySelector('#no');
    const playgame = document.querySelector('#playgame');

    yes.addEventListener('click', function() {
        document.querySelector('#overlay').className = "showing";
    });

    no.addEventListener('click', function() {
        document.querySelector('#overlay').className = "hidden";
        document.querySelector('#begin').remove()
        // randomly set game index here
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);
    
        gameControl.innerHTML = '<img id="help" src="images/help.svg" alt="help icon">';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';
        title.innerHTML = '<h1>Game of Pig</h1>';
    
        document.getElementById('quit').addEventListener('click', function() {
            location.reload();
        });
    
        document.getElementById('help').addEventListener('click', function() {
            document.querySelector('#playgame').innerHTML = "Continue Game";
            document.querySelector('#overlay').className = "showing";
        });
    
        console.log("set up the turn!");
    
        setUpTurn();
    });

    playgame.addEventListener('click', function() {
        document.querySelector('#overlay').className = "hidden";
        document.querySelector('#begin').remove()
    });

    document.addEventListener('keydown', function(event) {
        if(event.key === "Escape") {
            document.getElementById('overlay').className = "hidden";
            // randomly set game index here
            gameData.index = Math.round(Math.random());
            console.log(gameData.index);
        
            gameControl.innerHTML = '<img id="help" src="images/help.svg" alt="help icon">';
            gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';
            title.innerHTML = '<h1>Game of Pig</h1>';
        
            document.getElementById('quit').addEventListener('click', function() {
                location.reload();
            });
        
            document.getElementById('help').addEventListener('click', function() {
                document.querySelector('#playgame').innerHTML = "Continue Game";
                document.querySelector('#overlay').className = "showing";
            });
        
            console.log("set up the turn!");
        
            setUpTurn();
        }
    });

    const playGame = document.querySelector('#playgame');
    const gameControl = document.querySelector('#gamecontrol');
    const title = document.querySelector('#title');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    const gameData = {
        dice: ['images/1die.png', 'images/2die.png', 'images/3die.png', 'images/4die.png', 'images/5die.png', 'images/6die.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    /* //This gets the current player: 
    gameData.players[gameData.index]

    //This gets the first die and the second die: 
    gameData.dice[gameData.roll1-1]
    gameData.dice[gameData.roll2-1]

    //This gets the score of the current player: 
    gameData.score[gameData.index]

    //This gets the index, or turn
    gameData.index

    //This gets the individual dice values and the added dice value
    gameData.roll1
    gameData.roll2
    gameData.rollSum

    //This gets the winning threshold
    gameData.rollSum */

    playGame.addEventListener('click', function() {
        // randomly set game index here
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        gameControl.innerHTML = '<img id="help" src="images/help.svg" alt="help icon">';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';
        title.innerHTML = '<h1>Game of Pig</h1>';

        document.getElementById('quit').addEventListener('click', function() {
            location.reload();
        });

        document.getElementById('help').addEventListener('click', function() {
            document.querySelector('#playgame').innerHTML = "Continue Game";
            document.querySelector('#overlay').className = "showing";
        });

        console.log("set up the turn!");

        setUpTurn();
    });

    

    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function() {

        // console.log("dice rolled!");
        throwDice();

        });
    }

    function throwDice() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1; //using ceil could result in a zero
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<div id="diceRolled">
                                <img id="dice" src="${gameData.dice[gameData.roll1-1]}">
                                <img id="dice" src="${gameData.dice[gameData.roll2-1]}">
                            </div>`;

        gameData.rollSum = gameData.roll1 + gameData.roll2;

        // console.log(gameData.rollSum);

        // if two 1's are rolled
        if(gameData.rollSum === 2) {
            // console.log("snake eyes were rolled");
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);

            // show the current score
            setTimeout(setUpTurn, 2000);

            showCurrentScore();
        }

        // if either die is a 1
        else if(gameData.roll1 === 1 || gameData.roll2 === 1) {
            // console.log("one of the two dice was a 1");
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${    gameData.players[gameData.index]}</p>`;

            setTimeout(setUpTurn, 2000);
        }

        // if neither die is a 1
        else {
            // console.log("the game continues");
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button><button id="pass">Pass</button>';
            
            document.getElementById('rollagain').addEventListener('click', function() {
                setUpTurn();
            });

            document.getElementById('pass').addEventListener('click', function() {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            checkWinningCondition();
        }
    }

    function checkWinningCondition() {
        if(gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game?";
        }

        else {
            // show current score
            score.innerHTML = `<p><strong>${gameData.players[0]} ${gameData.score[0]}</strong></p> <p><strong>${gameData.players[1]} ${gameData.score [1]}</strong></p>`;
        }

        showCurrentScore();
    }

    function showCurrentScore() {
        score.innerHTML = `<p><strong>${gameData.players[0]} ${gameData.score[0]}</strong></p> <p><strong>${gameData.players[1]} ${gameData.score[1]}</strong></p>`;
    }

}) ();