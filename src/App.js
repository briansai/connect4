import React, { useState } from 'react';
import Board from './classes/Board';
import './App.scss';

function App() {
  const [] = useState(false);
  const [board, setBoard] = useState(new Board());

  return (
    <div className="App">
      <table className="board">
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
      </table>
    </div>
  );
}

export default App;
