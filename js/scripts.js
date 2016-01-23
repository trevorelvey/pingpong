// BDD
var pingPong = function(listUp) {
  var array = []
  for (var i = 1; i <= listUp; i ++) {
    if (i % 3 === 0 && i % 5 ===0) {
      array.push("pingpong");
    } else if (i % 5 === 0) {
      array.push("pong");
    } else if (i % 3 === 0) {
      array.push("ping");
    } else {
      array.push(i);
    }
  }
  console.log(array);
  return array;
};

// UI
$(document).ready(function() {
  $("form").submit(function(event) {
    $("li").remove();
    var listUp = parseInt($("input#listUp").val());
    var pingPongOutput = pingPong(listUp);
    pingPongOutput.forEach(function(i) {
      $("#pingPong").append("<li>" + i + "</li>");
    });
    $(".result").show();

    event.preventDefault();
  });
});
