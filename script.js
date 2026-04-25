let users = JSON.parse(localStorage.getItem("users")) || {};

let quotes={
Happy:"Amazing! Keep growing 🌟",
Okay:"Small progress is still progress 💪",
Sad:"You are stronger than this 💖",
Angry:"Take a deep breath 🌿",
Tired:"Rest is productive too 😴"
};

let selfcare=[
"Drink water 💧",
"Write 3 gratitudes ✍️",
"Take deep breaths 🌿",
"Stretch body 🧘‍♀️",
"Call a loved one ☎️"
];

function saveUser(){
let name=document.getElementById("name").value;
let email=document.getElementById("email").value;

if(!users[email]){
users[email]={moods:[],streak:0};
}
localStorage.setItem("currentUser",email);
localStorage.setItem("users",JSON.stringify(users));

document.getElementById("slide1").classList.add("hidden");
document.getElementById("slide2").classList.remove("hidden");
}

function selectMood(mood){
let email=localStorage.getItem("currentUser");
users[email].moods.push(mood);
users[email].streak++;
localStorage.setItem("users",JSON.stringify(users));

document.getElementById("message").innerText=quotes[mood];
document.getElementById("selfcare").innerText="Self-care: "+selfcare[Math.floor(Math.random()*selfcare.length)];

document.getElementById("nextBtn").classList.remove("hidden");
}

function goToReport(){
document.getElementById("slide2").classList.add("hidden");
document.getElementById("slide3").classList.remove("hidden");

let email=localStorage.getItem("currentUser");
let data=users[email];

document.getElementById("streak").innerText="🔥 Streak: "+data.streak+" days";

let counts={Happy:0,Okay:0,Sad:0,Angry:0,Tired:0};
data.moods.forEach(m=>counts[m]++);

new Chart(document.getElementById("chart"),{
type:"bar",
data:{labels:Object.keys(counts),datasets:[{data:Object.values(counts)}]}
});
}