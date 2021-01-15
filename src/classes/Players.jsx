export default class Player {
  constructor(player, color) {
    this.state = {
      player,
      color,
    };
  }

  setDisc = (column, player, board, setBoard) => {
    const b = board;
    for (let endRow = b.length - 1; endRow >= 0; endRow--) {
      if (!b[endRow][column]) {
        b[endRow][column] = player;
        return;
      } else if (endRow === 0 && b[endRow][column]) {
        console.log('ERROR!!!! NO SPACE!');
      }
    }
    setBoard(b);
  };
}
