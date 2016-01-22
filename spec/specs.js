describe('listUp', function() {
  it("lists numbers to a given point", function () {
    expect(listUp(5)).to.eql([1, 2, 3, 4, 5])
  });
});

describe('pingPong', function() {
  it("is not a number", function () {
   expect(pingPong("abc")).to.equal(false)
   });

   it("is a multiple of 15", function () {
     expect(pingPong(45)).to.equal("pingpong")
   });

   it("is a multiple of 5", function () {
     expect(pingPong(5)).to.equal("pong")
   });

   it("is a multiple of 3", function () {
     expect(pingPong(42)).to.equal("ping")
   });
 });

describe('pongMaker', function () {
  it("lists numbers with ping and pong included", function () {
    expect(pongMaker(5)).to.eql([1, 2, ping, 4, pong])
  });
});
