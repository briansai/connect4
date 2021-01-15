export default class Player {
  constructor(player, color) {
    this.state = {
      player,
      color,
    };
  }

  setDisc = (column, player, board) => {
    for (let endRow = board.length - 1; endRow >= 0; endRow--) {
      console.log(endRow);
      if (!board[endRow][column]) {
        board[endRow][column] = player;
        return;
      } else if (endRow === 0 && board[endRow][column]) {
        console.log('ERROR!!!! NO SPACE!');
      }
    }
  };
}
