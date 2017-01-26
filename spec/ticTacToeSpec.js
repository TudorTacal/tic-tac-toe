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
        game.claimField(1,1,'X');
        expect(game.board.fields[0][0]).toEqual('X');
    });
  });
  describe('#changeTurns', function (){
    it('player1 starts first with X', function (){
      game.claimField(1,1);
      expect(game.board.fields[0][0]).toEqual('X');
    });
    it('player2 follows with O', function (){
      game.claimField(1,2);
      game.claimField(1,3);
      expect(game.board.fields[0][2]).toEqual('O');
    });
  });
});
