describe('TicTacToe', function (){
  var game;
  beforeEach(function (){
    game = new TicTacToe();
  });
  it('is defined', function (){
    expect(TicTacToe).toBeDefined();
  });
  it('has two players', function (){
    expect(game.player1).toEqual(jasmine.any(Player));
    expect(game.player2).toEqual(jasmine.any(Player));
  });
  it('has a board', function(){
    expect(game.board).toEqual(jasmine.any(Board));
  });
  describe('#claimField', function (){
    it('claims a field by specifing its location', function(){
        game.claimField(1,1);
        expect(game.board.fields[0][0]).toEqual('X');
    });
  });

});
