describe("Board", function(){
  var board;
  beforeEach(function (){
    board = new Board();
  });
  it('is defined', function (){
    expect(Board).toBeDefined();
  });
  it('has a 3 x 3 multidimensional array', function (){
    expect(board.fields).toEqual([[[],[],[]],[[],[],[]],[[],[],[]]]);
  });
  describe('#populateFields', function() {
    it ('inserts the X or O values into the fields array at the specified position', function (){
      board.populateFields(1,1,'X');
      expect(board.fields[0][0]).toEqual('X');
    });
  });
  describe('#allFieldsPopulated', function () {
    it('return true if all the fields are populated', function (){
      board.fields = [[['X'],['O'],['X']],[['O'],['O'],['X']],[['X'],['X'],['O']]];
      expect(board.allFieldsPopulated(board.fields)).toBeTruthy();
    });
    it('return false if all the fields are not populated', function (){
      board.fields = [[['X'],['O'],['X']],[['O'],['O'],['X']],[['X'],['X'],[]]];
      expect(board.allFieldsPopulated(board.fields)).toBeFalsy();
    });

  });
});
