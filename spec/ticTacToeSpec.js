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
  describe('#changeTurns', function (){
    it('player1 starts first with X', function (){
      expect(game.changeTurns()).toEqual('X');
    });
    it('player2 follows with O', function (){
      game.changeTurns();
      expect(game.changeTurns()).toEqual('O');
    });
    it('player1 follows again with X', function (){
      game.changeTurns();
      game.changeTurns();
      expect(game.changeTurns()).toEqual('X');
    });
  });
  describe('#endGame', function (){
    it('it ends the game if all fields are claimed', function (){
      game.board.fields = [['X','O','X'],['O','O','X'],['X','X','O']];
      expect(game.endGame()).toEqual('Game over');
    });
    it('it displays a message to Kepp Playing if all the fileds are not claimed', function (){
      game.board.fields = [['X','O','X'],['O','O','X'],['X','X',[]]];
      expect(game.endGame()).toEqual('Keep playing');
    });

  });
});
