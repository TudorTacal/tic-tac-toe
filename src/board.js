var Board = function () {
  this.fields = [[0,0,0],[0,0,0],[0,0,0]];
};

Board.prototype.populateFields = function (row,column,value) {
  this.fields[row-1][column-1] = value;
};
