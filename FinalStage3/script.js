let totalSeconds = 0;
let counter;
let currentPromptIndex = 0;
let correctAnswers = 0;
let prompts = ["1", "2", "3", "4", "5","1", "2", "3", "4", "5","1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5"];
let userTyped = "";
let restartButton;
let backgroundImg;
let rocketImg;
let rocketX=50;
let rocketY=400;
let rocketX_start=10;
let rocketX_end=850;
let restartButtonDisplayed = false;




function preload(){
  backgroundImg = loadImage('Images/game-background.jpg')
  rocketImg = loadImage('Images/rocket.png')
}

function setup() {
  createCanvas(1000, 500);
  startPrompt();
}

function draw() {
  background(255);
  image(backgroundImg,0,0)

  // Display timer
  textAlign(LEFT);
  textSize(18);
  fill(0, 255, 0); // Set text color to green
  text(totalSeconds + " seconds", 10, 20);

  // Draw a black box in the center for typing
  fill(0);
  rect(width / 4, height / 4, width / 2, height / 2);

  // Display current prompt
  textAlign(CENTER);
  textSize(24);
  fill(255); // Set text color to white
  text(prompts[currentPromptIndex], width / 2, height / 2);

  // Display user input
  text(userTyped, width / 2, height / 2 + 30);

  //draw rocket
  image(rocketImg, rocketX, rocketY, 100, 70);

  //Lose condition
  if (rocketX === rocketX_start && !restartButtonDisplayed) {
    stopTimer();
    displayRestartButton();
    restartButtonDisplayed = true;
  }

  //win condition
  if (rocketX === rocketX_end && !restartButtonDisplayed) {          
    stopTimer();
    displayRestartButtonWin();
    restartButtonDisplayed = true;
  }

}

function timer() {
  totalSeconds = totalSeconds + 1;
}



function keyPressed() {
  if (keyCode === ENTER) {
    // Check if the user typed the prompt correctly
    if (userTyped === prompts[currentPromptIndex]) {
      correctAnswers++;
      userTyped = "";
      rocketX=rocketX+40;
      rocketY=rocketY-20;

      // Check if the user completed all prompts
      if ((correctAnswers == prompts.length)) {
        stopTimer();
        displayRestartButton();
      } else {
        currentPromptIndex++;
        startPrompt();
      }
    } else {
      // Incorrect input, stop timer
      rocketX=rocketX-40;
      rocketY=rocketY+20;
     // stopTimer();
     // displayRestartButton();
    }
  } else if (key.length === 1) {
    userTyped += key;
  } else if (keyCode === BACKSPACE) {
    userTyped = userTyped.slice(0, -1);
  }
}

function startPrompt() {
  userTyped = "";
  startTimer();
}

function startTimer() {
  stopTimer();
  counter = setInterval(timer, 1000);
}

function stopTimer() {
  clearInterval(counter);
}

function displayRestartButtonWin() {
  restartButton = createButton('You Won! Restart');
  restartButton.size(100, 40); // Set a fixed size for the button
  restartButton.position(width / 2 - restartButton.width / 2, height / 2 + 150);
  restartButton.mousePressed(restartGame);

  restartButton.style('left', '50%');
  restartButton.style('transform', 'translateX(-50%)');
}

function displayRestartButton() {
  restartButton = createButton('You Lost! Restart');
  restartButton.size(100, 40); // Set a fixed size for the button
  restartButton.position(width / 2 - restartButton.width / 2, height / 2 + 150);
  restartButton.mousePressed(restartGame);

  restartButton.style('left', '50%');
  restartButton.style('transform', 'translateX(-50%)');
}

function restartGame() {
  currentPromptIndex = 0;
  correctAnswers = 0;
  totalSeconds = 0;
  rocketX=50;
  rocketY=400;
  userTyped = "";
  startPrompt();
  restartButton.remove(); // Remove the restart button
  restartButtonDisplayed = false; // Reset the flag
}

  function removeRestartButton() {
    if (restartButton) {
      restartButton.remove();
    }
}






