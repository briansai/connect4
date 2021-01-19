export default class Board {
  constructor(
    state = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ]
  ) {
    this.state = state;
  }

  checkRow = (board, row, player) => {
    let x = 0;
    let winner = false;

    while (x < 4 && !winner) {
      const four = board[row].slice(x, x + 4);
      winner = four.every((num) => {
        return player === num;
      });
      x++;
    }

    winner && console.log('WINNER ROW-->');
  };

  checkColumn = (board, row, column, player) => {
    if (row <= board.length - 4) {
      let winner = true;

      for (let x = row; x <= row + 3; x++) {
        if (board[x][column] !== player) {
          winner = false;
        }
      }
      winner && console.log('WINNER COLUMN--->');
    }
  };
}
