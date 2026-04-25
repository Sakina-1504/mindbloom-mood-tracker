let selectedMood="";
const tasks=[
"Drink 2 glasses of water 💧",
"Take a 10 min walk 🌿",
"Write 3 gratitudes ✍️",
"Stretch for 5 minutes 🧘‍♀️",
"Call someone you love ☎️"
];

const positiveQuotes=[
"You're growing beautifully 🌸",
"Keep shining ⭐",
"Proud of your progress 💖"
];
const negativeQuotes=[
"Bad days don’t last 💪",
"You are stronger than this 🌈",
"Tomorrow is a fresh start 🌞"
];

window.onload=function(){
let user=JSON.parse(localStorage.getItem("user"));
if(user){
document.getElementById("profileScreen").classList.add("hidden");
document.getElementById("app").classList.remove("hidden");
document.getElementById("welcome").innerText="Hi "+user.name+" 💖";
document.getElementById("dailyTask").innerText="Today's self-care task: "+tasks[new Date().getDay()];
}
document.getElementById("streak").innerText=localStorage.getItem("streak")||0;
};

function saveProfile(){
let user={
name:document.getElementById("name").value,
email:document.getElementById("email").value,
city:document.getElementById("city").value
};
localStorage.setItem("user",JSON.stringify(user));
location.reload();
}

function selectMood(m){selectedMood=m;}

function saveMood(){
if(!selectedMood) return alert("Select mood 😊");

let streak=Number(localStorage.getItem("streak")||0)+1;
localStorage.setItem("streak",streak);
document.getElementById("streak").innerText=streak;

let quote = (selectedMood=="Sad"||selectedMood=="Angry"||selectedMood=="Tired")
? negativeQuotes[Math.floor(Math.random()*negativeQuotes.length)]
: positiveQuotes[Math.floor(Math.random()*positiveQuotes.length)];

document.getElementById("popupTitle").innerText="Mood Saved 💖";
document.getElementById("popupText").innerText=quote;
document.getElementById("popup").classList.add("show");
confetti({particleCount:120,spread:80});
}

function closePopup(){
document.getElementById("popup").classList.remove("show");
}