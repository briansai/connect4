export default class Player {
  constructor(player) {
    this.state = {
      player,
    };
  }

  setDisc = (column, player, board, setBoard) => {
    const b = board.state;
    for (let endRow = b.length - 1; endRow >= 0; endRow--) {
      if (!b[endRow][column]) {
        b[endRow][column] = player;
        board.checkRow(b, endRow, player);
        board.checkColumn(b, endRow, column, player);
        return;
      } else if (endRow === 0 && b[endRow][column]) {
        console.log('ERROR!!!! NO SPACE!');
      }
    }
    setBoard(b);
  };
}
