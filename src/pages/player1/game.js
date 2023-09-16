import React, { useState, useEffect } from "react";
import "./game.css";
import Board from "../elements/Board";
import { ScoreBoard } from "../elements/ScoreBoard";

const Game1 = () => {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [xPlaying, setXPlaying] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [computerTurn, setComputerTurn] = useState(false);

  useEffect(() => {
    if (!xPlaying && computerTurn && !gameOver) {
      const delay = 1000;
      const computerMoveTimeout = setTimeout(() => {
        const availableMoves = board.reduce((acc, val, idx) => {
          if (val === null) acc.push(idx);
          return acc;
        }, []);

        if (availableMoves.length > 0) {
          const randomIdx = Math.floor(Math.random() * availableMoves.length);
          const computerMove = availableMoves[randomIdx];
          handleBoxClick(computerMove);
        }
      }, delay);

      return () => clearTimeout(computerMoveTimeout);
    }
  }, [xPlaying, computerTurn, board, gameOver]);

  const handleBoxClick = (boxIdx) => {
    if (!gameOver && !board[boxIdx]) {
      const updatedBoard = board.map((value, idx) => {
        if (idx === boxIdx) {
          return xPlaying ? "X" : "O";
        } else {
          return value;
        }
      });

      setBoard(updatedBoard);

      const winningPlayer = checkWinner(updatedBoard);

      if (winningPlayer) {
        setGameOver(true);
        setWinner(winningPlayer);
        updateScores(winningPlayer);
      } else {
        if (updatedBoard.every((value) => value !== null)) {
          setGameOver(true);
          setWinner("Draw");
        } else {
          setXPlaying(!xPlaying);
          setComputerTurn(true);
        }
      }
    }
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }
    return null;
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
    setWinner(null);
    setBoard(Array(9).fill(null));
    // Set the starting player (you can choose either X or O)
    setXPlaying(true);
    setComputerTurn(false);
  };

  return (
    <div className="App">
      <ScoreBoard scores={scores} xPlaying={xPlaying} winner={winner} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <button className="reset-btn" onClick={resetBoard}>
        Reset
      </button>
      <a href="/">
      <button className="reset-btn" onClick={resetBoard}>
        Back
      </button>
      </a>
    </div>
  );
};

export default Game1;
