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
    expect(this.board).toEqual(jasmine.any(Board));
  });

});
