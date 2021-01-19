import React from 'react';
import './BoardComponent.scss';

const BoardComponent = ({
  currentPlayer,
  otherPlayer,
  board,
  setCurrentPlayer,
  setOtherPlayer,
  setBoard,
}) => {
  const handleClick = async (e, slotIndex) => {
    e.preventDefault();
    currentPlayer.setDisc(
      slotIndex,
      currentPlayer.state.player,
      board,
      setBoard
    );
    setCurrentPlayer(otherPlayer);
    setOtherPlayer(currentPlayer);
  };

  const color = {
    0: 'white',
    1: 'red',
    2: 'yellow',
  };

  return (
    <tbody>
      {board.state.map((row, idx) => {
        return (
          <tr key={`row-${idx}`} className="row">
            {row.map((slot, index) => {
              return (
                <td
                  className="slot"
                  key={`${slot}-${index}`}
                  onClick={(e) => handleClick(e, index)}
                >
                  <div className={`disc-${color[slot]}`}></div>
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default BoardComponent;
