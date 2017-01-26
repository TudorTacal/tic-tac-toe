//is responsible for initializing the players, the board. Changing turns, claiming fields, ending the game.
var TicTacToe = function () {
  this.player1 = new Player();
  this.player2 = new Player();
  this.board = new Board();
};

TicTacToe.prototype.claimField = function(row,column) {
  this.board.populateFields(row,column,'X');
};
