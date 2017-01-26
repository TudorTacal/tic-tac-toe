//is responsible for initializing the players, the board. Changing turns, claiming fields, ending the game.
var TicTacToe = function () {
  this.player1 = new Player('X');
  this.player2 = new Player('O');
  this.board = new Board();
  this.marks = [this.player2.mark, this.player1.mark];
};

TicTacToe.prototype.claimField = function(row,column,value=this.changeTurns()) {
  this.board.populateFields(row,column,value);
  this.checkWinner();
  this.endGame();
};

TicTacToe.prototype.changeTurns = function () {
  this.marks.reverse();
  return this.marks[0];
};

TicTacToe.prototype.endGame = function () {
  if (this._fullFields()) {
    console.log("Game over");
    return "Game over";
  } else {
    console.log("Keep playing");
    return "Keep playing";
  }
};

TicTacToe.prototype.checkWinner = function () {
  var columns = this._getColumsFromFieldsArray();
  var diagonals = [];
  var fieldsArray = this.board.fields;
  for(var i = 0; i < fieldsArray.length; i++){
    var row = fieldsArray[i];
    if(row.allValuesSame()) return ('You won');
  }
  for(var j = 0; j < columns.length; j++) {
    var column = columns[j];
    if(column.allValuesSame()) return('You won');
  }
};

TicTacToe.prototype._fullFields = function () {
  var flattenedArray = [].concat.apply([], this.board.fields);
  var elementsArray = flattenedArray.filter(function(element){return typeof(element) === "string";});
  if (elementsArray.length === 9) {
    return true;
  } else {
    return false;
  }
};

TicTacToe.prototype._getColumsFromFieldsArray = function () {
  var columns = [];
  var fieldsArray = this.board.fields;
  for(var i = 0; i < fieldsArray.length; i++ ) {
    var column = fieldsArray.map(function(value,index) { return value[i];});
    columns.push(column);
  }
  return columns;
};




Array.prototype.allValuesSame = function () {
  for(var i = 1; i< this.length; i++) {
    if(this[i] !== this[0])
      return false;
  }
  return true;
};
