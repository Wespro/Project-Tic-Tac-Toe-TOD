// genral variables
const squares = document.querySelectorAll(".square");
let lastPlay = "";
let gameStart = false;
let gameOver = false;
let gameBoardIsEmpty = true;

//const ai = document.querySelector("#ai");
//let aiBtnPressed = false;

//Factory function for players
const Player = (name, mark) => {
  name;
  mark;
  const playerMovesBySquareNum = [];

  const playerMovesBySquareNumReseter = () => {
    playerMovesBySquareNum.length = 0;
  };
  const winingPaterns = [
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],

    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],

    ["2", "4", "6"],
    ["0", "4", "8"],
  ];
  const AddSquare = (square) => {
    playerMovesBySquareNum.push(square.attributes["data-key"].value);
  };

  const amITheWinner = () => {
    return (patternCheck = winingPaterns.some((pattern) => {
      return pattern.every((num) => {
        return playerMovesBySquareNum.includes(num);
      });
    }));
  };

  const gamOverChecker = () => {
    if (playerMovesBySquareNum.length === 5) {
      gameOver = true;
    }
  };
  // Ai unfinished traial
  // const computerMove = (e) => {
  //   let randomnum = Math.floor(Math.random() * 10);
  //   if (randomnum === 9) {
  //     randomnum = 8;
  //   }
  //   const squareCell = document.querySelector(
  //     `.square[data-key ="${randomnum}"]`
  //   );

  //   gameControl.mark(e, squareCell);
  // };

  // const aiWinPattern = (e) => {
  //   let num;
  //   let check0 = true;
  //   let check1 = true;
  //   let check2 = true;
  //   let check3 = true;
  //   let check4 = true;
  //   let check5 = true;
  //   let check6 = true;
  //   let check7 = true;
  //   let check8 = true;

  //   if (
  //     (playerMovesBySquareNum.includes("1") &&
  //       playerMovesBySquareNum.includes("2")) ||
  //     (playerMovesBySquareNum.includes("3") &&
  //       playerMovesBySquareNum.includes("6")) ||
  //     (playerMovesBySquareNum.includes("4") &&
  //       playerMovesBySquareNum.includes("8"))
  //   ) {
  //     if (check0) {
  //       check0 = false;
  //       console.log(check0);
  //       num = "0";

  //       const squareCell = document.querySelector(
  //         `.square[data-key ="${num}"]`
  //       );
  //       console.log(squareCell);
  //       console.log("i am here 3");
  //       gameControl.mark(e, squareCell);
  //     }
  //   } else if (
  //     (check1 === true &&
  //       playerMovesBySquareNum.includes("0") &&
  //       playerMovesBySquareNum.includes("2")) ||
  //     (playerMovesBySquareNum.includes("4") &&
  //       playerMovesBySquareNum.includes("7"))
  //   ) {
  //     check1 = false;
  //     num = "1";
  //     const squareCell = document.querySelector(`.square[data-key ="${num}"]`);
  //     gameControl.mark(e, squareCell);
  //   } else if (
  //     (check2 === true &&
  //       playerMovesBySquareNum.includes("0") &&
  //       playerMovesBySquareNum.includes("1")) ||
  //     (playerMovesBySquareNum.includes("4") &&
  //       playerMovesBySquareNum.includes("6")) ||
  //     (playerMovesBySquareNum.includes("5") &&
  //       playerMovesBySquareNum.includes("8"))
  //   ) {
  //     check2 = false;
  //     num = "2";
  //     const squareCell = document.querySelector(`.square[data-key ="${num}"]`);
  //     gameControl.mark(e, squareCell);
  //   } else if (
  //     (check3 === true &&
  //       playerMovesBySquareNum.includes("4") &&
  //       playerMovesBySquareNum.includes("5")) ||
  //     (playerMovesBySquareNum.includes("0") &&
  //       playerMovesBySquareNum.includes("6"))
  //   ) {
  //     check3 = false;
  //     num = "3";
  //     const squareCell = document.querySelector(`.square[data-key ="${num}"]`);
  //     gameControl.mark(e, squareCell);
  //   } else if (
  //     (check4 === true &&
  //       playerMovesBySquareNum.includes("3") &&
  //       playerMovesBySquareNum.includes("5")) ||
  //     (playerMovesBySquareNum.includes("2") &&
  //       playerMovesBySquareNum.includes("6")) ||
  //     (playerMovesBySquareNum.includes("1") &&
  //       playerMovesBySquareNum.includes("7")) ||
  //     (playerMovesBySquareNum.includes("0") &&
  //       playerMovesBySquareNum.includes("8"))
  //   ) {
  //     check4 = false;
  //     num = "4";
  //     const squareCell = document.querySelector(`.square[data-key ="${num}"]`);
  //     gameControl.mark(e, squareCell);
  //   } else if (
  //     (check5 === true &&
  //       playerMovesBySquareNum.includes("3") &&
  //       playerMovesBySquareNum.includes("4")) ||
  //     (playerMovesBySquareNum.includes("2") &&
  //       playerMovesBySquareNum.includes("8"))
  //   ) {
  //     check5 = false;
  //     num = "5";
  //     const squareCell = document.querySelector(`.square[data-key ="${num}"]`);
  //     gameControl.mark(e, squareCell);
  //   } else if (
  //     (check6 === true &&
  //       playerMovesBySquareNum.includes("7") &&
  //       playerMovesBySquareNum.includes("8")) ||
  //     (playerMovesBySquareNum.includes("2") &&
  //       playerMovesBySquareNum.includes("4")) ||
  //     (playerMovesBySquareNum.includes("0") &&
  //       playerMovesBySquareNum.includes("3"))
  //   ) {
  //     check6 = false;
  //     num = "6";
  //     const squareCell = document.querySelector(`.square[data-key ="${num}"]`);
  //     gameControl.mark(e, squareCell);
  //   } else if (
  //     (check7 === true &&
  //       playerMovesBySquareNum.includes("6") &&
  //       playerMovesBySquareNum.includes("8")) ||
  //     (playerMovesBySquareNum.includes("1") &&
  //       playerMovesBySquareNum.includes("4"))
  //   ) {
  //     check7 = false;
  //     num = "7";
  //     const squareCell = document.querySelector(`.square[data-key ="${num}"]`);
  //     gameControl.mark(e, squareCell);
  //   } else if (
  //     (check8 === true &&
  //       playerMovesBySquareNum.includes("6") &&
  //       playerMovesBySquareNum.includes("7")) ||
  //     (playerMovesBySquareNum.includes("2") &&
  //       playerMovesBySquareNum.includes("5")) ||
  //     (playerMovesBySquareNum.includes("0") &&
  //       playerMovesBySquareNum.includes("4"))
  //   ) {
  //     check8 = false;
  //     num = "8";
  //     const squareCell = document.querySelector(`.square[data-key ="${num}"]`);
  //     gameControl.mark(e, squareCell);
  //   } else {
  //     computerMove(e);
  //   }
  // };

  return {
    AddSquare,
    playerMovesBySquareNumReseter,
    amITheWinner,
    gamOverChecker,
    //  computerMove,
    // aiWinPattern,
    playerMovesBySquareNum,
  };
};
//players
const player1 = Player("player1", "X");
const player2 = Player("player1", "O");

//moudle to control gameBoard
const gameControl = ((e) => {
  const gameRoundOver = document.querySelector(".gameRoundOver");
  const screen = document.querySelector(".screen");
  const winnerName = document.querySelector(".winner");
  const gameRound = document.querySelector(".gameRound");
  const start = document.querySelector("#start");
  const restart = document.querySelector("#restart");
  const player1Score = document.querySelector(".player1Score");
  const player2Score = document.querySelector(".player2Score");

  const startGame = () => {
    squares.forEach((square) => {
      square.classList.remove("squareOff");
      square.classList.add("squareOn");
    });
    GameOn();
  };
  //play event manual
  const GameOn = () => {
    squares.forEach((item) => {
      item.addEventListener("click", function (e) {
        // if (aiBtnPressed === true) {
        //   player1.aiWinPattern(e);
        //   player1.gamOverChecker();
        //   if (player1.amITheWinner()) {
        //     player1.playerMovesBySquareNumReseter();
        //     player2.playerMovesBySquareNumReseter();
        //     gameControl.boardReseter();
        //     gameControl.displayScreen("player1");
        //   } else if (player2.amITheWinner()) {
        //     player1.playerMovesBySquareNumReseter();
        //     player2.playerMovesBySquareNumReseter();
        //     gameControl.boardReseter();
        //     gameControl.displayScreen("player2");
        //   } else if (
        //     gameOver === "true" &&
        //     !player1.amITheWinner() &&
        //     !player2.amITheWinner()
        //   ) {
        //     // gameControl.boardReseter();
        //     gameControl.displayScreen("It's a tie");
        //     gameControl.boardReseter();
        //   }
        // } else {
        gameControl.mark(e);
        player1.gamOverChecker();
        if (player1.amITheWinner()) {
          gameControl.boardReseter();
          gameControl.displayScreen("player1");
          lastPlay = "O";
          gameControl.scoreUpdate("player1");
          gameOver = false;
        } else if (player2.amITheWinner()) {
          gameControl.boardReseter();
          gameControl.displayScreen("player2");
          lastPlay = "O";
          gameControl.scoreUpdate("player2");
          gameOver = false;
        } else if (
          gameOver &&
          !player1.amITheWinner() &&
          !player2.amITheWinner()
        ) {
          gameControl.displayScreen("It's a tie");
          gameControl.boardReseter();
          lastPlay = "O";
          gameOver = false;
        }
        //   }
      });
    });
  };
  const mark = (e, squareCell) => {
    // console.log(squareCell);
    // if (aiBtnPressed === true) {
    //   if (squareCell.innerText) {
    //     player1.aiWinPattern(e);
    //   } else {
    //     if (e.target.innerText) {
    //       return;
    //     } else {
    //       e.target.innerText = "X";
    //       lastPlay = "X";
    //       player1.AddSquare(e.target);
    //     }

    //     if (squareCell === e.target) {
    //       player1.aiWinPattern(e);
    //     } else {
    //       player1.aiWinPattern(e);
    //       squareCell.innerText = "O";
    //       lastPlay = "O";
    //       player2.AddSquare(squareCell);
    //     }
    //   }
    // } else {
    if (e.target.innerText) {
      return;
    } else if (lastPlay === "X") {
      e.target.innerText = "O";
      lastPlay = "O";
      player2.AddSquare(e.target);
    } else {
      e.target.innerText = "X";
      lastPlay = "X";
      player1.AddSquare(e.target);
    }
    // }
  };

  const boardReseter = (stats) => {
    squares.forEach((ele) => {
      ele.innerText = "";
    });

    player1.playerMovesBySquareNumReseter();
    player2.playerMovesBySquareNumReseter();
    if (stats) {
      player1Score.innerText = 0;
      player2Score.innerText = 0;
    }
  };

  //Display screen
  const displayScreen = (winner) => {
    screen.classList.toggle("dimOn");
    screen.classList.toggle("dimOff");
    gameRoundOver.classList.toggle("winnerPop");
    gameRoundOver.classList.toggle("winnerOut");
    if (winner === "It's a tie") {
      gameRound.innerText = "Round Over";
      winnerName.innerText = winner;
    } else {
      if (
        Number(player1Score.innerText) + Number(player2Score.innerText) ===
        4
      ) {
        gameRound.innerText = "Game Over";
        boardReseter("over");
        gameOver = true;
        Number(player1Score.innerText) < Number(player2Score.innerText)
          ? (winnerName.innerText = `Player2 wins`)
          : (winnerName.innerText = `Player1 wins`);
      } else {
        gameRound.innerText = "Round Over";
        winnerName.innerText = `${winner} wins`;
      }
    }
  };
  //score Ui update
  const scoreUpdate = (winner) => {
    if (Number(player2Score.innerText) + Number(player1Score.innerText) === 5) {
    } else {
      if (winner === "player1" && !gameOver) {
        player1Score.innerText = parseInt(player1Score.innerText) + 1;
      } else if (winner === "player2" && !gameOver) {
        player2Score.innerText = parseInt(player2Score.innerText) + 1;
      }
    }
  };

  //close display the winner screen
  const closeDisplayScreen = () => {
    screen.classList.remove("dimOn");
    screen.classList.add("dimOff");
    gameRoundOver.classList.remove("winnerPop");
    gameRoundOver.classList.add("winnerOut");
  };

  return {
    start,
    restart,
    startGame,
    mark,
    boardReseter,
    displayScreen,
    closeDisplayScreen,
    screen,
    scoreUpdate,
    player1Score,
  };
})();

// // play event with AI
// ai.addEventListener("click", function (e) {
//   aiBtnPressed = true;
// });

//close display screen
gameControl.screen.addEventListener("click", gameControl.closeDisplayScreen);

//start the game

gameControl.start.addEventListener("click", gameControl.startGame);
//restart the game
gameControl.restart.addEventListener("click", gameControl.boardReseter);
