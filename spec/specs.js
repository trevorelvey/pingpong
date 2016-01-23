describe('pingPong', function() {
    it("is a multiple of 3, it makes it ping", function () {
      expect(pingPong(3)).to.eql([1, 2, "ping"])
    });

  //  it("is a multiple of 5", function () {
  //    expect(pingPong(5)).to.equal([1, 2, ping, 4, pong])
  //  });
   //
  //  it("is a multiple of 15", function () {
  //    expect(pingPong(15)).to.equal([1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, pingpong])
  //  });
 });
