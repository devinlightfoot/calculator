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
      num1 += e.target.dataset.num;
      document.getElementById("out").innerHTML = num1;
    } else {
      num2 += e.target.dataset.num;
      document.getElementById("out").innerHTML = num2;
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
  document.querySelector(".pressed").classList.remove("pressed")
});
var clear = document.getElementById("clear");
clear.addEventListener("click", (e) => {
  num1 = "";
  num2 = "";
  document.getElementById("out").innerHTML = num1;
  document.querySelector(".pressed").classList.remove("pressed")
});
window.addEventListener("keydown", (e) => {
  if (
    e.target.dataset.num == "1" ||
    e.target.dataset.num == "2" ||
    e.target.dataset.num == "3" ||
    e.target.dataset.num == "4" ||
    e.target.dataset.num == "5" ||
    e.target.dataset.num == "6" ||
    e.target.dataset.num == "7" ||
    e.target.dataset.num == "8" ||
    e.target.dataset.num == "9" ||
    (e.target.dataset.num == "0" && op == "")
  ) {
    num1 += e.target.dataset.num;
    document.getElementById("out").innerHTML = num1;
    console.log(num1);
  } else if (
    e.target.dataset.num == "1" ||
    e.target.dataset.num == "2" ||
    e.target.dataset.num == "3" ||
    e.target.dataset.num == "4" ||
    e.target.dataset.num == "5" ||
    e.target.dataset.num == "6" ||
    e.target.dataset.num == "7" ||
    e.target.dataset.num == "8" ||
    e.target.dataset.num == "9" ||
    e.target.dataset.num == "0" && op !== "") 
    {
    num2 += e.target.dataset.num;
    document.getElementById("out").innerHTML = num2;
    console.log(num2);
  }
  else if(
    e.target.dataset.op == "+" ||
    e.target.dataset.op == "-" ||
    e.target.dataset.op == "/" ||
    e.target.dataset.op == "*" ||
    e.target.dataset.op == "^"){
      op = e.target.dataset.op;
      e.target.classList.add("pressed");
    }
    else if(e.target.dataset.op == "="){
      document.getElementById("out").innerHTML = operate(num1,num2,op);
      document.querySelector(".pressed").classList.remove("pressed")
    }
});
