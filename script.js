var dob = document.querySelector("#date-of-birth");
var number = document.querySelector("#lucky-number");
var button = document.querySelector(".check");
var message = document.querySelector(".message");

button.addEventListener("click", function verify_dob() {
  var lucky_number = Number(number.value);
  message.innerText = "";
  var sum = sum_of_dates(dob.value);
  if (sum == 0) {
    message.style.color = "red";
    message.innerText = "Please Select your Birthday";
    return;
  }
  if (lucky_number <= 0) {
    message.style.color = "red";
    message.innerText = "Please Enter Positive value as Lucky Number";
  } else {
    var rem = sum % lucky_number;
    if (rem == 0) {
      message.style.color = "green";
      message.innerText = "Your BirthDay Is Lucky!!🥳🥳";
    } else {
      message.style.color = "red";
      message.innerText = "Sorry Your BirthDay is Not Lucky😔😔";
    }
  }
});

function sum_of_dates(dob) {
  var sum = 0;
  for (var i = 0; i < dob.length; i++) {
    var k = dob[i];
    if (k >= "0" && k <= "9") {
      sum += Number(k);
    }
  }
  return sum;
}
