describe('listCount', function() {
  it("lists numbers to a given point", function () {
    expect(listNum(5)).to.equal(1, 2, 3, 4, 5)
  });
});

describe('pingPong', function() {
  it("is not a number", function () {
   expect(pingPong("abc")).to.equal(false)
   });

   it("is a multiple of 15", function () {
     expect(pingPong(15)).to.equal("pingpong")
   });

   it("is a multiple of 5", function () {
     expect(pingPong(5)).to.equal("pong")
   });

   it("is a multiple of 3", function () {
     expect(pingPong(3)).to.equal("ping")
   });
 });
