import React, { useState, Fragment } from 'react';
import Game from './components/Game';
import './App.scss';

const App = () => {
  const [game, playGame] = useState(false);

  const handleClick = (play) => {
    playGame(play);
  };

  const currentGame = () => {
    do {
      return <Game />;
    } while (game);
  };

  return (
    <Fragment>
      {game ? (
        <div>{currentGame()}</div>
      ) : (
        <div className="intro">
          <div className="play">Would you like to play again?</div>
          <div className="btn-container">
            <button className="btn" onClick={() => handleClick(true)}>
              YES
            </button>
            <button className="btn" onClick={() => handleClick(false)}>
              NO
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default App;
