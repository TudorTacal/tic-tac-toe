describe("Board", function(){
  var board;
  beforeEach(function (){
    board = new Board();
  });
  it('is defined', function (){
    expect(Board).toBeDefined();
  });
  it('has a 3 x 3 multidimensional array', function (){
    expect(board.fields).toEqual([[0,0,0,],[0,0,0,],[0,0,0]]);
  });
  describe('#populateFields', function() {
    it ('inserts the X or O values into the fields array at the specified position', function (){
      board.populateFields(1,1,'X');
      expect(board.fields[0][0]).toEqual('X');
    });
  });
});
