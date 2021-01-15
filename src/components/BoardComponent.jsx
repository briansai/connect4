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
      board.state,
      setBoard
    );
    setCurrentPlayer(otherPlayer);
    setOtherPlayer(currentPlayer);
  };

  const color = (slot) => {
    console.log('slot ------>', slot);
    if (slot === 1) {
      return 'red';
    } else if (slot === 2) {
      return 'yellow';
    }

    return 'white';
  };

  return (
    <tbody>
      {board.state.map((row, index) => {
        return (
          <tr key={`row-${index}`} className="row">
            {row.map((slot, index) => {
              console.log(slot);
              return (
                <td
                  className="slot"
                  key={`${slot}-${index}`}
                  onClick={(e) => handleClick(e, index)}
                >
                  <div className={`disc-${color(slot)}`}></div>
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
