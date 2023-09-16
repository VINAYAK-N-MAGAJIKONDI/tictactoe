import React, { useState } from "react";
import './game2.css';
import Board from "../elements/Board"
import { ScoreBoard } from "../elements/ScoreBoard";

const Game2 = () => {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const [xPlaying, setXPlaying] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null); // Add winner state

const handleBoxClick = (boxIdx) => {
  if (!gameOver && !board[boxIdx]) {
    // Step 1: Update the board
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });

    setBoard(updatedBoard);

    // Step 2: Check if either player has won the game
    const winningPlayer = checkWinner(updatedBoard);

    if (winningPlayer) {
      setGameOver(true);
      setWinner(winningPlayer);
      updateScores(winningPlayer);
    } else {
      // Check for a draw
      if (updatedBoard.every((value) => value !== null)) {
        setGameOver(true);
        setWinner("Draw"); // Set winner to "Draw"
      } else {
        // Step 3: Change active player
        setXPlaying(!xPlaying);
      }
    }
  }
};


  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      // Iterate through win conditions and check if either player satisfies them
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }
    return null; // Return null if no winner
  };

  const updateScores = (winningPlayer) => {
    if (winningPlayer === "O") {
      setScores({ ...scores, oScore: scores.oScore + 1 });
    } else {
      setScores({ ...scores, xScore: scores.xScore + 1 });
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setWinner(null); // Reset the winner
    setBoard(Array(9).fill(null));
  };

  
        
    

  return (
    <div className="App">
      <ScoreBoard scores={scores} xPlaying={xPlaying} winner={winner} /> {/* Pass winner prop */}
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <button className="reset-btn" onClick={resetBoard}>Reset</button>
      <a href="/">
      <button className="reset-btn" onClick={resetBoard}>
        Back
      </button>
      </a>
      
    </div>
  );
};

export default Game2;
