import React from 'react';
import './Board.css';

const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((value, idx) => {
        const boxStyle = value === "X" ? "box x" : value === "O" ? "box o" : "box";
        return (
          <button className={boxStyle} onClick={() => value === null && onClick(idx)}>
            {value}
          </button>
        );
      })}
    </div>
  );
};

export default Board;
