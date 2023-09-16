import React from 'react';
import "./ScoreBoard.css";

export const ScoreBoard = ({ xPlaying, winner }) => {
  return (
    <div className="scoreboard">
      {winner ? (
        <div className="winner">
          {winner === "Draw" ? "It's a Draw!" : `Winner: Player ${winner}`}
        </div>
      ) : (
        <div className={`score ${xPlaying ? "x-playing" : "o-playing"}`}>
          Current Player: {xPlaying ? "X" : "O"}
        </div>
      )}
    </div>
  )
}
