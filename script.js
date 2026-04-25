let tasks=[
"Take a 10-minute walk 🌿",
"Drink 2 glasses of water 💧",
"Stretch for 5 minutes 🧘‍♀️",
"Write 3 gratitudes ✍️",
"Call a friend ☎️"
];

let quotes={
Happy:"Amazing! Keep shining 🌟",
Okay:"Small progress is still progress 💪",
Sad:"You are stronger than you think 💖",
Angry:"Take a deep breath 🌿",
Tired:"Rest is productive too 😴"
};

window.onload=function(){
let user=localStorage.getItem("user");
if(user){
document.getElementById("onboarding").style.display="none";
document.getElementById("app").classList.remove("hidden");
document.getElementById("greeting").innerText="Good to see you, "+user;
}

document.getElementById("task").innerText=tasks[new Date().getDay()];
document.getElementById("streak").innerText=localStorage.getItem("streak")||0+" days";

loadChart();
}

function startApp(){
let name=document.getElementById("name").value;
localStorage.setItem("user",name);
location.reload();
}

function selectMood(mood){
document.getElementById("feedback").innerText=quotes[mood];

let streak=Number(localStorage.getItem("streak")||0)+1;
localStorage.setItem("streak",streak);
document.getElementById("streak").innerText=streak+" days";

let moods=JSON.parse(localStorage.getItem("moods"))||[];
moods.push(mood);
localStorage.setItem("moods",JSON.stringify(moods));

loadChart();
}

function loadChart(){
let moods=JSON.parse(localStorage.getItem("moods"))||[];
let counts={Happy:0,Okay:0,Sad:0,Angry:0,Tired:0};
moods.forEach(m=>counts[m]++);

new Chart(document.getElementById("chart"),{
type:"bar",
data:{
labels:Object.keys(counts),
datasets:[{data:Object.values(counts)}]
}
});
}