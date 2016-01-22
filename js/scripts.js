var listNum = [];
var listCount = function(listCountUpTo) {
  var i;
  for (i = 1; i <= listCountUpTo; i ++) {
    listNum.push(i);
  }
  return listNum;
};

var pingPong = function (inputNum) {
  if (isNaN(inputNum) === true) {
    return false;
  } else if (inputNum % 15 === 0) {
    return "pingpong";
  } else if (inputNum % 5 === 0) {
    return "pong";
  } else if (inputNum % 3 === 0) {
    return "ping";
  } else {
    return true;
  }
};
