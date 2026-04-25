const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const genderInput = document.getElementById("gender");
const emailInput = document.getElementById("email");

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const greeting = document.getElementById("greeting");
const quoteBox = document.getElementById("quoteBox");

let user = JSON.parse(localStorage.getItem("mindUser"));
let moods = JSON.parse(localStorage.getItem("moods")) || [];
let goals = JSON.parse(localStorage.getItem("goals")) || [];

// AUTO FILL PROFILE
if(user){
nameInput.value=user.name;
ageInput.value=user.age;
genderInput.value=user.gender;
emailInput.value=user.email;
}

// SAVE PROFILE
function saveProfile(){
user={
name:nameInput.value,
age:ageInput.value,
gender:genderInput.value,
email:emailInput.value
};
localStorage.setItem("mindUser",JSON.stringify(user));
slide1.classList.add("hidden");
slide2.classList.remove("hidden");
greeting.innerText="Hello "+user.name+" 💙";
}

// MOOD QUOTES
const quotes={
happy:["Keep shining ✨","You are doing amazing 🌸"],
sad:["Storms pass 🌈","You are stronger 💪"],
angry:["Breathe slowly 🧘","Calm mind wins 🌿"],
tired:["Rest is productive 😴"],
okay:["Small progress matters 🌱"]
};

function selectMood(mood){
moods.push(mood);
localStorage.setItem("moods",JSON.stringify(moods));
let msg=quotes[mood][Math.floor(Math.random()*quotes[mood].length)];
quoteBox.innerHTML="<h3>"+msg+"</h3>";
}

// GOALS
function saveGoal(){
let goal=document.getElementById("goalInput").value;
if(goal==="")return;
goals.push(goal);
localStorage.setItem("goals",JSON.stringify(goals));
document.getElementById("goalList").innerHTML+="<li>"+goal+"</li>";
document.getElementById("goalInput").value="";
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
moods.forEach(m=>count[m]++);
new Chart(document.getElementById("chart"),{
type:"bar",
data:{labels:Object.keys(count),
datasets:[{data:Object.values(count)}]}
});
}

// DARK MODE
function toggleTheme(){
document.body.classList.toggle("dark");
}