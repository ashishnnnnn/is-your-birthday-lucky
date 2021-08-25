var dob = document.querySelector("#date-of-birth");
var number = document.querySelector("#lucky-number");
var button = document.querySelector(".check");
var message = document.querySelector(".message");

button.addEventListener("click",function verify_dob(){
    var sum = sum_of_dates(dob.value);
    var rem = sum%Number(number.value);
    if(rem==0){
        message.innerText = "Your BirthDay Is Lucky!!🥳🥳";
    }
    else{
        message.innerText = "Sorry Your BirthDay is Not Lucky😔😔";
    }
})


function sum_of_dates(dob){
    var sum = 0;
    for(var i=0;i<dob.length;i++){
        var k = dob[i];
        if(k>='0' && k<='9'){
            sum+=Number(k);
        }
    }
    return sum;
}