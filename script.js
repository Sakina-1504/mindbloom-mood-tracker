let selectedMood="";
let moods=JSON.parse(localStorage.getItem("moods"))||[];

document.getElementById("welcomeText").innerText="Good to see you 💖";

function selectMood(mood){
selectedMood=mood;
document.querySelectorAll(".mood").forEach(b=>b.classList.remove("selected"));
event.target.classList.add("selected");
}

function nextStep(){
if(!selectedMood) return alert("Select mood first 😊");

moods.push(selectedMood);
localStorage.setItem("moods",JSON.stringify(moods));

updateStreak();
updateWeeklyReport();
showPopup();
}

function updateStreak(){
let streak=localStorage.getItem("streak")||0;
streak++;
localStorage.setItem("streak",streak);
document.getElementById("streak").innerText=streak;
}

function updateWeeklyReport(){
let counts={};
moods.forEach(m=>counts[m]=(counts[m]||0)+1);
let topMood=Object.keys(counts).reduce((a,b)=>counts[a]>counts[b]?a:b);
document.getElementById("weeklyReport").innerText="This week you felt mostly "+topMood+" ✨";
}

function resetWeek(){
localStorage.clear();
location.reload();
}

function showPopup(){
document.getElementById("popup").classList.add("showPopup");
confetti({particleCount:120,spread:80});
}
function closePopup(){
document.getElementById("popup").classList.remove("showPopup");
}