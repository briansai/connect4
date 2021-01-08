import React from 'react';
import Board from '../classes/Board';
import './BoardComponent.scss';

const BoardComponent = () => {
  const board = new Board();

  const handleClick = (e, slotIndex) => {
    e.preventDefault();
    board.setDisc(slotIndex, 1);
  };

  return (
    <tbody>
      {board.state.map((row, index) => {
        return (
          <tr key={`row-${index}`} className="row">
            {row.map((slot, index) => (
              <td
                className="slot"
                key={`${slot}-${index}`}
                onClick={(e) => handleClick(e, index)}
              >
                <div className="disc"></div>
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

export default BoardComponent;
