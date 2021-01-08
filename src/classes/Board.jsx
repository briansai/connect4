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

  setDisc = (column, player) => {
    const board = this.state;
    for (let endRow = board.length - 1; endRow >= 0; endRow--) {
      if (!board[endRow][column]) {
        board[endRow][column] = player;
        return;
      } else if (endRow === 0 && board[endRow][column]) {
        console.log('ERROR!!!! NO SPACE!');
      }
    }
  };
}
