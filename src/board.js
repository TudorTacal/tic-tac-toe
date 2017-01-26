var Board = function () {
  this.fields = [[[],[],[]],[[],[],[]],[[],[],[]]];
};

Board.prototype.populateFields = function (row,column,value) {
  this.fields[row-1][column-1] = value;
};
