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
var fields,row, columns, diagonals;
TicTacToe.prototype.checkWinner = function () {
  columns = this._getColumsFromFieldsArray;
  diagonals = [];
  fields = this.board.fields;
  for(var i=0; i<fields.length;i++){
    row = fields[i];
    columns[i].push(row[0],row[1],row[2]);
    if(row.allValuesSame()) return ('You won');
  }
  if(columns.allValuesSame()) return('You won');
  
};

TicTacToe.prototype._fullFields = function () {
  var flattenedArray = [].concat.apply([], this.board.fields);
  var elementsArray = [].concat.apply([], flattenedArray);
  if (elementsArray.length === 9) {
    return true;
  } else {
    return false;
  }
};

TicTacToe.prototype._getColumsFromFieldsArray = function () {
  var columns = [];
  var fieldsArray = this.board.fields;
  for(var i = 0; i < fieldsArray.length; i ++ ) {
    var column = fieldsArray.map(function(value,index) { return value[2]; });
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
