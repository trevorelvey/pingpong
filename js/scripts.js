var numList = [];
var listUp = function(maxNum) {
  var i;
  for (i = 1; i <= maxNum; i ++) {
    numList.push(i);
  }
  return numList;
}

var pingPong = function (inputNum) {
  if (inputNum % 15 === 0) {
    return "pingpong";
  } else if (inputNum % 5 === 0) {
    return "pong";
  } else if (inputNum % 3 === 0) {
    return "ping";
  } else {
    return true;
  }
}

$(document).ready(function() {
  $("form#Number").submit(function(event) {
    var userCount = parseInt($("input#listUp").val());
    listUp(userCount);
    $("#numberName").empty().append(numList.join(" , "));
    $("#result").show();
    event.preventDefault();
  });
});
