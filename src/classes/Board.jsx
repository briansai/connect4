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

  checkLeftDiagonal = (board, row, column, player) => {
    this.checkLeftLastRowDiagonal(board, row, column, player);
    this.checkLeftFirstRowDiagonal(board, row, column, player);
  };

  checkLeftLastRowDiagonal = (board, row, column, player) => {
    const checkLowerHalf = row >= 3 && column > board.length - 1 - row;
    const checkUpperHalf = row < 3 && column > board.length - 1 - row;
    const endRow = board.length - 1;
    let col = column;

    if (row !== endRow) {
      for (let x = row; x < endRow; x++) {
        col--;
      }
    }

    if (checkLowerHalf || checkUpperHalf) {
      let startRow = col - 1;
      let startColumn = 6;

      for (let x = startRow; x <= endRow - 3; x++) {
        const four = [];
        let rowIteration = x;
        let columnIteration = startColumn;

        while (four.length < 4) {
          four.push(board[rowIteration][columnIteration]);
          rowIteration++;
          columnIteration--;
        }

        const winner = four.every((num) => player === num);

        if (winner) {
          console.log(`WINNER!! PLAYER ${player} won!`);
        }
        startColumn--;
      }
    }
  };

  checkLeftFirstRowDiagonal = (board, row, column, player) => {
    const checkLowerHalf = row >= 3 && column <= board.length - 1 - row;
    const checkUpperHalf = row < 3 && column <= board.length - 1 - row;
    const endRow = 0;
    let r = row;
    let col = column;

    if (checkLowerHalf || checkUpperHalf) {
      while (col !== 0) {
        r++;
        col--;
      }

      let startRow = r;
      let startColumn = col;

      for (let x = startRow; x >= endRow + 3; x--) {
        const four = [];
        let rowIteration = x;
        let columnIteration = startColumn;

        while (four.length < 4) {
          four.push(board[rowIteration][columnIteration]);
          rowIteration--;
          columnIteration++;
        }

        const winner = four.every((num) => player === num);

        if (winner) {
          console.log(`WINNER!! PLAYER ${player} won!`);
        }
        startColumn++;
      }
    }
  };

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
