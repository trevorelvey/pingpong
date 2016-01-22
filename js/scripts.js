var numList = [];
var listUp = function(maxNum) {
  var i;
  for (i = 1; i <= maxNum; i ++) {
    numList.push(i);
  }
  return numList;
}

var pingPong = function (listItem) {
  if (isNaN(listItem) === true) {
    return false
  } else if (listItem % 15 === 0) {
    return "pingpong";
  } else if (listItem % 5 === 0) {
    return "pong";
  } else if (listItem % 3 === 0) {
    return "ping";
  } else {
    return true;
  }
}

// var pongMaker = function ()

$(document).ready(function() {
  $("form#Number").submit(function(event) {
    var userCount = parseInt($("input#listUp").val());
    listUp(userCount);
    $("#numberName").empty().append(numList.join(" , "));
    $("#result").show();
    event.preventDefault();
  });
});
