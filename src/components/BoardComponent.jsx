import React from 'react';
import Board from '../classes/Board';
import './BoardComponent.scss';

const BoardComponent = () => {
  const board = new Board();
  return (
    <tbody>
      {board.state.map((row, index) => {
        return (
          <tr key={index} className="row">
            {row.map(() => (
              <td className="slot">
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
