import React from 'react';
import Board from './classes/Board';
import './App.scss';

function App() {
  const board = new Board();
  board.setDisc(3, 1);
  board.setDisc(3, 1);
  board.setDisc(3, 1);
  board.setDisc(3, 1);
  board.setDisc(3, 1);
  board.setDisc(3, 1);
  board.setDisc(3, 1);
  board.setDisc(3, 1);
  board.setDisc(3, 1);

  board.setDisc(1, 2);

  console.log(board);
  return (
    <div className="App">
      <table className="board">
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
      </table>
    </div>
  );
}

export default App;
