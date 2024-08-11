import React from 'react';
import Cell from '../Cell';

const Board = ({ cells, onClick }) => {
  return (
    <div className='board'>
      {cells?.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => onClick(index)}
          className={item === 'X' ? 'is-x' : item === 'O' ? 'is-o' : ''}
        />
      ))}
    </div>
  );
};

export default Board;
