import React, { useEffect, useState } from 'react';
import { calculateWinner } from '../../utils/calculateWinner';
import Board from '../Board';

const Game = () => {
  const [cells, setCells] = useState(() => {
    const storedCells = localStorage.getItem('ticTacToeCells');
    return storedCells ? JSON.parse(storedCells) : Array(9).fill(null);
  });
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(cells);

  useEffect(() => {
    localStorage.setItem('ticTacToeCells', JSON.stringify(cells));
  }, [cells]);

  const handleClick = (index) => {
    const newCells = [...cells];
    if (winner || cells[index]) return;
    newCells[index] = xIsNext ? 'X' : 'O';
    setCells(newCells);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setCells(Array(9).fill(null));
  };

  const isDraw = () => {
    return !winner && cells.every((cell) => cell !== null);
  };

  return (
    <div className='game'>
      <Board
        cells={cells}
        onClick={handleClick}
      />

      <button
        className='btn'
        onClick={handleReset}
      >
        Reset game
      </button>

      <p className='win'>
        {winner ? (
          <span className='winner'>{`Winner is ${winner}`}</span>
        ) : isDraw() ? (
          <span className='draw'>It's a draw</span>
        ) : (
          <span>Hello friends</span>
        )}
      </p>
    </div>
  );
};

export default Game;
