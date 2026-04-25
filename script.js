let quotes={
Happy:"Amazing! Keep shining 🌟",
Okay:"Small progress is still progress 💪",
Sad:"You are stronger than you think 💖",
Angry:"Take a deep breath 🌿",
Tired:"Rest is productive too 😴"
};

function goToMood(){
localStorage.setItem("user",document.getElementById("name").value);
document.getElementById("slide1").classList.add("hidden");
document.getElementById("slide2").classList.remove("hidden");
}

function selectMood(mood){
let moods=JSON.parse(localStorage.getItem("moods"))||[];
moods.push(mood);
localStorage.setItem("moods",JSON.stringify(moods));

let streak=Number(localStorage.getItem("streak")||0)+1;
localStorage.setItem("streak",streak);

document.getElementById("quote").innerText=quotes[mood];
document.getElementById("popup").classList.remove("hidden");
document.getElementById("nextBtn").classList.remove("hidden");
}

function closePopup(){
document.getElementById("popup").classList.add("hidden");
}

function goToChart(){
document.getElementById("slide2").classList.add("hidden");
document.getElementById("slide3").classList.remove("hidden");

document.getElementById("streak").innerText="🔥 Streak: "+localStorage.getItem("streak")+" days";

let moods=JSON.parse(localStorage.getItem("moods"))||[];
let counts={Happy:0,Okay:0,Sad:0,Angry:0,Tired:0};
moods.forEach(m=>counts[m]++);

new Chart(document.getElementById("chart"),{
type:"bar",
data:{labels:Object.keys(counts),datasets:[{data:Object.values(counts)}]}
});
}