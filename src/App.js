import React from 'react';
import './App.scss';
import BoardComponent from './components/BoardComponent';

function App() {
  return (
    <div className="App">
      <table className="board">
        <BoardComponent />
      </table>
    </div>
  );
}

export default App;
