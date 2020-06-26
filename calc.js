var num1 = "";
var op = "";
var num2 = "";
function operate(num1, num2, operator) {
  var nim1 = parseInt(num1);
  var nim2 = parseInt(num2);
  if (operator == "+") {
    return nim1 + nim2;
  } else if (operator == "-") {
    return nim1 - nim2;
  } else if (operator == "*") {
    return nim1 * nim2;
  } else if (operator == "/") {
    if (num2 == 0) {
      alert("Congratulations, you just caused the heat death of the universe");
    } else {
      return nim1 / nim2;
    }
  } else if (operator == "^") {
    return nim1 ** nim2;
  } else {
    alert("Invalid input");
  }
}
//setup event listners and their functions
var opCont = document.getElementById("operators");
var operators = opCont.querySelectorAll("button");
var numCont = document.getElementById("nums");
var nums = numCont.querySelectorAll("button");
nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    if (op == "") {
      num1 += parseInt(e.target.dataset.num);
      document.getElementById("out").innerHTML = num1;
      console.log(num1);
      console.log(num2);
      console.log(op);
    } else if (op !== "") {
      num2 += parseInt(e.target.dataset.num);
      document.getElementById("out").innerHTML = num2;
      console.log(num1);
      console.log(num2);
      console.log(op);
    } else {
      alert("num listener error");
      console.log(num1);
      console.log(num2);
      console.log(op);
    }
  });
});
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    op = e.target.dataset.op;
    e.target.classList.add("pressed");
    document.getElementById("out").innerHTML = num1;
  });
});
var enter = document.getElementById("=");
enter.addEventListener("click", function () {
  num1 = operate(num1, num2, op);
  document.getElementById("out").innerHTML = num1;
  op = "";
  num2 = "";
  document.querySelector(".pressed").classList.remove("pressed");
  console.log(num1);
  console.log(num2);
  console.log(op);
});
var clear = document.getElementById("clear");
clear.addEventListener("click", (e) => {
  num1 = "";
  num2 = "";
  op = "";
  document.getElementById("out").innerHTML = num1;
  document.querySelector(".pressed").classList.remove("pressed");
  console.log(num1);
  console.log(num2);
  console.log(op);
});
