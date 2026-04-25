let thoughts={
Happy:"Keep shining 🌟",
Okay:"Small progress is still progress 💪",
Sad:"You are stronger than this 💖",
Angry:"Take a deep breath 🌿",
Tired:"Rest is productive too 😴"
};

const tasks=[
"Drink water 💧","Go for walk 🌿","Stretch 🧘‍♀️",
"Call a friend ☎️","Write gratitude ✍️"
];

window.onload=function(){
let user=JSON.parse(localStorage.getItem("user"));
if(user){
document.getElementById("profile").classList.add("hidden");
document.getElementById("app").classList.remove("hidden");
document.getElementById("welcome").innerText="Hi "+user.name+" 💖";
document.getElementById("task").innerText="Today's task: "+tasks[new Date().getDay()];
document.getElementById("streak").innerText=localStorage.getItem("streak")||0;
}
}

function saveProfile(){
let user={
name:name.value,email:email.value,city:city.value
};
localStorage.setItem("user",JSON.stringify(user));
location.reload();
}

function selectMood(el,mood){
document.querySelectorAll(".mood").forEach(m=>m.classList.remove("selected"));
el.classList.add("selected");

document.getElementById("thought").innerText=thoughts[mood];

let streak=Number(localStorage.getItem("streak")||0)+1;
localStorage.setItem("streak",streak);
document.getElementById("streak").innerText=streak;

confetti({particleCount:80,spread:70});
}