describe("Player", function(){
  var player1, player2;
  beforeEach(function (){
    player1 = new Player('X');
    player2 = new Player('O');
  });
  it('is defined', function (){
    expect(Player).toBeDefined();
  });
  it('it is initialized with a mark', function (){
    expect(player1.mark).toEqual('X');
  });
});
