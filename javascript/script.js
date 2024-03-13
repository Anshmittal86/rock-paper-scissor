//***************** Game Loader ******************//
function loader() {
  let time = 0;
  const startBtn = document.querySelector(".btn");
  const gameLoader = document.querySelector(".game-loader");

  startBtn.addEventListener("click", () => {
    gameLoader.style.display = "none";
    startGame();
  });

  setInterval(() => {
    if (time <= 100) {
      time = Math.min(time + Math.ceil(Math.random() * 8), 100);
      document.querySelector(".timer").textContent = `${time}%`;
      if (time === 100) {
        document.querySelector(".timer").style.display = "none";
        document.querySelector(".btn").style.display = "block";
      }
    }
  }, 100);
}

loader();

//***************** Start Game ******************//

function startGame() {
  //***************** Game Elements ******************//
  const elements = {
    computerChoiceDisplay: document.getElementById("computer-choice"),
    userChoiceDisplay: document.getElementById("user-choice"),
    resultDisplay: document.getElementById("result"),
    possibleChoices: document.querySelectorAll("button"),
    userScoreDisplay: document.getElementById("score"),
  };

  //***************** Game Variables******************//
  let userScore = 0;
  let computerChoice;
  let userChoice;
  let result;

  //************ User choice display ***************//
  elements.possibleChoices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
      userChoice = e.target.id;
      displayChoice(userChoice, elements.userChoiceDisplay);
      generateComputerChoice();
      generateResult();
    });
  });

  //************** Generate Computer choice ***************//
  function generateComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    displayChoice(computerChoice, elements.computerChoiceDisplay);
  }

  //************** Generate Result ***************//
  function generateResult() {
    const outcomes = {
      rock: { paper: "😅 You lose ! 😅", scissor: "🎉 You win 🎉" },
      paper: { scissor: "😅 You lose ! 😅", rock: "🎉 You win 🎉" },
      scissor: { rock: "😅 You lose ! 😅", paper: "🎉 You win 🎉" },
    };

    if (computerChoice === userChoice) {
      result = "It's Draw...";
    } else {
      result = outcomes[userChoice][computerChoice];
      if (result.includes("win")) userScore++;
    }
    elements.resultDisplay.innerHTML = result;
    elements.userScoreDisplay.innerHTML = userScore;
  }

  //************** Display Choice ***************//
  function displayChoice(choice, element) {
    element.innerHTML = `<img src="./images/${choice}-icon.png" alt="${choice} gesture image" width="80px"></img>`;
  }
}
