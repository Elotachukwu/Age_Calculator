const button1 = document.querySelector('.start');
const page1 = document.querySelector('.welcome');
const page2 = document.querySelector('.heading');
const page3 = document.querySelector('.response');
const submitButton = document.querySelector('[type="submit"]');
const resetButton = document.querySelector('.reset');

button1.addEventListener('click',function(){
  page2.classList.remove('hidden');
  page1.classList.add('hidden');
})

submitButton.addEventListener('click',function(){
  page3.classList.remove('hidden');
  page2.classList.add('hidden');
})

resetButton.addEventListener('click',function(){
  page1.classList.remove('hidden');
  page3.classList.add('hidden');
})

function calculateAge(){
  var name = document.getElementById("nameId").value;
  var age = document.getElementById("ageId").value;

  let name1 = document.getElementById("nameResId");
  name1.textContent = name;

  let age2 = document.getElementById("ageResId");
  age2.textContent = age;

  let ageInDays;
  ageInDays = age * 365;
  ageInDays1 = document.getElementById("daysResId");
  ageInDays1.textContent = ageInDays

  if(name==="" && age===""){
    alert("Fill in all fields!");
    return;
  } else if(name===""){
    alert("Fill in your name.");
    return;
  } else if(age===""){
    alert("Fill in your age");
    return;
  } 
}


var body = document.querySelector("body");
var isBlue = false;

setInterval(function(){
  if (isBlue){
    body.style.background = "yellow";
  } else {
    body.style.background = "#3498db"
  }
  isBlue = !isBlue;
}, 1000)

var button = document.querySelector("button");
button.addEventListener("click", function(){
  console.log("Someone clicked the button!");
});