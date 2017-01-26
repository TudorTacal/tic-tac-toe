//is responsible for initializing the players, the board. Changing turns, claiming fields, ending the game.
var TicTacToe = function () {
  this.player1 = new Player('X');
  this.player2 = new Player('O');
  this.board = new Board();
  this.mark = 'X';
};

TicTacToe.prototype.claimField = function(row,column,value=this.mark) {
  this.board.populateFields(row,column,value);
  this.changeTurns();
};
var players;
TicTacToe.prototype.changeTurns = function () {
  players = [this.player1.mark, this.player2.mark];
  players.reverse();
  this.mark = players[0];
};
