import React from 'react';
import './BoardComponent.scss';

const BoardComponent = ({
  currentPlayer,
  otherPlayer,
  board,
  setCurrentPlayer,
  setOtherPlayer,
}) => {
  const handleClick = async (e, slotIndex) => {
    console.log(currentPlayer);
    currentPlayer.setDisc(slotIndex, currentPlayer.state.player, board.state);
    setCurrentPlayer(otherPlayer);
    setOtherPlayer(currentPlayer);
    e.preventDefault();
  };

  return (
    <tbody>
      {board.state.map((row, index) => {
        return (
          <tr key={`row-${index}`} className="row">
            {row.map((slot, index) => {
              return (
                <td
                  className="slot"
                  key={`${slot}-${index}`}
                  onClick={(e) => handleClick(e, index)}
                >
                  <div className="disc"></div>
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
