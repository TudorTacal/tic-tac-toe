//is responsible for initializing the players, the board. Changing turns, claiming fields, ending the game.
var TicTacToe = function () {
  this.player1 = new Player('X');
  this.player2 = new Player('O');
  this.board = new Board();
  this.marks = [this.player2.mark, this.player1.mark];
};

TicTacToe.prototype.claimField = function(row,column,value=this.changeTurns()) {
  this.board.populateFields(row,column,value);
};

TicTacToe.prototype.changeTurns = function () {
  this.marks.reverse();
  return this.marks[0];
};
