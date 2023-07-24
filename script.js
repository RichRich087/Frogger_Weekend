

let boardSize = 13;
let frogPos = { x: 6, y: 12 };
let intervalID;
let outcomeTimerId;
let gameRunning = false;
let level = 1; // add level
let intervalTime = 1000;

let startPauseButton = document.getElementById('start-pause-button');
startPauseButton.addEventListener('click', startPauseGame);

let cars = [
    { x: 1, y: 10 },
    { x: 3, y: 10 },
    { x: 4, y: 10 },
    { x: 8, y: 10 },
    { x: 10, y: 10 },
    { x: 2, y: 9 },
    { x: 4, y: 9 },
    { x: 7, y: 9 },
    { x: 11, y: 9 },
    { x: 12, y: 9 },
    { x: 0, y: 8 },
    { x: 3, y: 8 },
    { x: 6, y: 8 },
    { x: 9, y: 8 }
];

// Add a birds array
let birds = [
    { x: 1, y: 3, counter: 0 },
    { x: 4, y: 3, counter: 0 },
    { x: 5, y: 3, counter: 0 },
    { x: 8, y: 3, counter: 0 },
    { x: 10, y: 3, counter: 0 },
    { x: 12, y: 3, counter: 0 },
    { x: 2, y: 2, counter: 0 },
    { x: 3, y: 2, counter: 0 },
    { x: 5, y: 2, counter: 0 },
    { x: 6, y: 2, counter: 0 },
    { x: 8, y: 2, counter: 0 },
    { x: 9, y: 2, counter: 0 }
];

// Add a logs array
let logs = [
    { x: 1, y: 6 },
    { x: 2, y: 6 },
    { x: 3, y: 6 },
    { x: 7, y: 6 },
    { x: 8, y: 6 },
    { x: 9, y: 6 },

    { x: 2, y: 5 },
    { x: 3, y: 5 },
    { x: 4, y: 5 },
    { x: 8, y: 5 },
    { x: 9, y: 5 },
    { x: 10, y: 5 }
];

// Add a water array
let water = [
    { x: 0, y: 6 },
    { x: 4, y: 6 },
    { x: 5, y: 6 },
    { x: 6, y: 6 },
    { x: 10, y: 6 },
    { x: 11, y: 6 },
    { x: 12, y: 6 },

    { x: 0, y: 5 },
    { x: 1, y: 5 },
    { x: 5, y: 5 },
    { x: 6, y: 5 },
    { x: 7, y: 5 },
    { x: 11, y: 5 },
    { x: 12, y: 5 },
];

function popUp(title) {
    Swal.fire({
        title: title,
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
        `
    });
}

function createGameBoard() {
    let gameBoard = document.getElementById('game-board');

    for (let i = 0; i < boardSize; i++) {
        let row = document.createElement('tr');

        for (let j = 0; j < boardSize; j++) {
            let cell = document.createElement('td');
            row.appendChild(cell);
        }

        gameBoard.appendChild(row);
    }
}

function updateGameBoard() {
    let gameBoard = document.getElementById('game-board');

    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            let cell = gameBoard.children[i].children[j];
            cell.innerHTML = '';  // Clear the cell

            if (i == frogPos.y && j == frogPos.x) {
                let img = document.createElement('img');
                img.src = '../images/frog1.png';
                cell.appendChild(img);
            }

            for (let car of cars) {
                if (i == car.y && j == car.x) {
                    let img = document.createElement('img');
                    img.src = '../images/car1.png';
                    cell.appendChild(img);
                }
            }

            // Add the birds to the game board
            for (let bird of birds) {
                if (i == bird.y && j == bird.x) {
                    let img = document.createElement('img');
                    img.src = '../images/bird1.jpg';
                    cell.appendChild(img);
                }
            }
            // Add the logs to the game board
            for (let log of logs) {
                if (i == log.y && j == log.x) {
                    let img = document.createElement('img');
                    img.src = '../images/log.jpg';
                    cell.appendChild(img);
                }
            }

            // Add the water to the game board
            for (let waterPos of water) {
                if (i == waterPos.y && j == waterPos.x) {
                    cell.style.backgroundColor = 'blue';
                }
            }
        }
    }
}

function checkOutcomes() {
    for (let car of cars) {
        if (car.x == frogPos.x && car.y == frogPos.y) {
            popUp("Game over... Car made splash...");
            frogPos = { x: 6, y: 12 };
            clearInterval(outcomeTimerId);
        }
    }

    // Check if the frog collided with a bird
    for (let bird of birds) {
        if (bird.x == frogPos.x && bird.y == frogPos.y) {
            popUp("Game over... Bird caught the frog...");
            frogPos = { x: 6, y: 12 };
            clearInterval(outcomeTimerId);
        }
    }

    for (let waterPos of water) {
        if (waterPos.x == frogPos.x && waterPos.y == frogPos.y) {
            let onLog = false;
            for (let log of logs) {
                if (log.x == frogPos.x && log.y == frogPos.y) {
                    onLog = true;
                    break;
                }
            }
            if (!onLog) {
                popUp('Game Over! You fell into the water!');
                frogPos = { x: 6, y: 12 };
                clearInterval(outcomeTimerId); // stop checking outcomes after game over
            }
        }
    }
}


document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            frogPos.y--;
            break;
        case 'ArrowDown':
            frogPos.y++;
            break;
        case 'ArrowLeft':
            frogPos.x--;
            break;
        case 'ArrowRight':
            frogPos.x++;
            break;
    }

    if (frogPos.y < 0) {
        frogPos.y = 0;
        popUp("Congratulations! You won!");
        frogPos = { x: 7, y: 14 };  // Reset frog position after winning
        levelUp();
    }
    if (frogPos.y < 0) frogPos.y = 0;
    if (frogPos.y >= boardSize) frogPos.y = boardSize - 1;
    if (frogPos.x < 0) frogPos.x = 0;
    if (frogPos.x >= boardSize) frogPos.x = boardSize - 1;
    checkOutcomes();
    updateGameBoard();

});
createGameBoard();
updateGameBoard();

function moveCars() {
    for (let car of cars) {
        car.x++;

        // If a car moves past the right edge of the board, loop it back to the left edge
        if (car.x >= boardSize) {
            car.x = 0;
        }
    }
}

function moveBirds() {
    for (let bird of birds) {
        // If counter is less than 2, move bird to the left
        if (bird.counter < 2) {
            bird.x--;
            bird.counter++;
        }
        // Else, move bird to the right and reset counter
        else {
            bird.x++;
            bird.counter = 0;
        }

        // If a bird moves past the left edge of the board, loop it back to the right edge
        if (bird.x < 0) {
            bird.x = boardSize - 1;
        }

        // If a bird moves past the right edge of the board, loop it back to the left edge
        if (bird.x >= boardSize) {
            bird.x = 0;
        }
    }
}

function moveWaterAndLogs() {
    for (let log of logs) {
        log.x++;

        // If a log moves past the right edge of the board, loop it back to the left edge
        if (log.x >= boardSize) {
            log.x = 0;
        }
    }

    for (let waterPos of water) {
        waterPos.x++;

        // If a water position moves past the right edge of the board, loop it back to the left edge
        if (waterPos.x >= boardSize) {
            waterPos.x = 0;
        }
    }
}


function startPauseGame() {
    if (gameRunning) {
        // If the game is running, stop the interval and set gameRunning to false
        clearInterval(intervalID);
        gameRunning = false;
    } else {
        // If the game is not running, start the interval and set gameRunning to true
        intervalID = setInterval(() => {
            moveCars();
            moveBirds();
            moveWaterAndLogs();
            updateGameBoard();
        }, intervalTime);

        outcomeTimerId = setInterval(checkOutcomes, 50); //possibly fix issue with not dying

        gameRunning = true;
    }
}

function levelUp() {
    level++;
    intervalTime *= 0.8; // increase speed by 20%
    if (gameRunning) {
        clearInterval(intervalID);
        intervalID = setInterval(() => {
            moveCars();
            moveBirds();
            moveWaterAndLogs();
            updateGameBoard();
        }, intervalTime);
    }
    popUp(`Welcome to level ${level}`);
}

outcomeTimerId = setInterval(checkOutcomes, 50); //possibly fix issue with not dying