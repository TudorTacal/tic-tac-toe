var Board = function () {
  this.fields = [[[],[],[]],[[],[],[]],[[],[],[]]];
};

Board.prototype.populateFields = function (row,column,value) {
  this.fields[row-1][column-1] = value;
};

Board.prototype.allFieldsPopulated = function (value) {
  var flattenedArray = [].concat.apply([], value);
  var elementsArray = [].concat.apply([], flattenedArray);
  if (elementsArray.length === 9) {
    return true;
  } else {
    return false;
  }
};
