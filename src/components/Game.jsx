import React, { useState } from 'react';
import BoardComponent from './BoardComponent';
import Board from '../classes/Board';
import Players from '../classes/Players';

const Game = () => {
  const player1 = new Players(1, 'red');
  const player2 = new Players(2, 'yellow');
  const [board, setBoard] = useState(new Board());
  const [currentPlayer, setCurrentPlayer] = useState(player1);
  const [otherPlayer, setOtherPlayer] = useState(player2);
  return (
    <table className="board">
      <BoardComponent
        board={board}
        setCurrentPlayer={setCurrentPlayer}
        setOtherPlayer={setOtherPlayer}
        currentPlayer={currentPlayer}
        otherPlayer={otherPlayer}
        setBoard={setBoard}
      />
    </table>
  );
};

export default Game;
