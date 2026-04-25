// GET INPUT ELEMENTS CORRECTLY
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const genderInput = document.getElementById("gender");
const emailInput = document.getElementById("email");

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const greeting = document.getElementById("greeting");
const quoteBox = document.getElementById("quoteBox");
const goalInput = document.getElementById("goalInput");
const goalList = document.getElementById("goalList");

let user = JSON.parse(localStorage.getItem("mindUser"));
let moods = JSON.parse(localStorage.getItem("moods")) || [];
let goals = JSON.parse(localStorage.getItem("goals")) || [];

window.onload = () => {
  if(user){
    document.getElementById("returnPopup").classList.remove("hidden");
    document.getElementById("welcomeBack").innerText =
      "Welcome back " + user.name + " 💙";
  }
};

// POPUP BUTTONS NOW WORK 💥
function useSaved(){
  document.getElementById("returnPopup").classList.add("hidden");
  fillProfile();
}

function editDetails(){
  document.getElementById("returnPopup").classList.add("hidden");
  localStorage.removeItem("mindUser");
}

// FILL INPUTS
function fillProfile(){
  nameInput.value = user.name;
  ageInput.value = user.age;
  genderInput.value = user.gender;
  emailInput.value = user.email;
}

// SAVE PROFILE
function saveProfile(){
  user = {
    name: nameInput.value,
    age: ageInput.value,
    gender: genderInput.value,
    email: emailInput.value
  };

  localStorage.setItem("mindUser", JSON.stringify(user));

  slide1.classList.add("hidden");
  slide2.classList.remove("hidden");

  greeting.innerText = "Hello " + user.name + " 🌸";
}

// QUOTES
const quotes = {
  happy:["Keep shining ✨","Progress more today 🚀"],
  sad:["You are stronger than this 💪","Storms pass 🌈"],
  angry:["Breathe. You got this 🧘"],
  tired:["Rest is productive 💤"],
  okay:["Small steps matter 🌱"]
};

function selectMood(mood){
  moods.push({mood,date:new Date().toDateString()});
  localStorage.setItem("moods",JSON.stringify(moods));

  let msg = quotes[mood][Math.floor(Math.random()*quotes[mood].length)];
  quoteBox.innerHTML = "<h3>"+msg+"</h3>";
}

// GOALS
function saveGoal(){
  if(goalInput.value==="") return;
  goals.push(goalInput.value);
  localStorage.setItem("goals",JSON.stringify(goals));
  goalList.innerHTML += "<li>"+goalInput.value+"</li>";
  goalInput.value="";
}

// GO REPORT
function goReport(){
  slide2.classList.add("hidden");
  slide3.classList.remove("hidden");
  showChart();
}

// CHART
function showChart(){
  let count={happy:0,okay:0,sad:0,angry:0,tired:0};
  moods.forEach(m=>count[m.mood]++);

  new Chart(document.getElementById("chart"),{
    type:"bar",
    data:{
      labels:Object.keys(count),
      datasets:[{data:Object.values(count)}]
    }
  });
}

// DARK MODE
function toggleTheme(){
  document.body.classList.toggle("dark");
}