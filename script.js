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

function useSaved(){
  document.getElementById("returnPopup").classList.add("hidden");
  fillProfile();
}

function editDetails(){
  document.getElementById("returnPopup").classList.add("hidden");
}

function fillProfile(){
  name.value=user.name;
  age.value=user.age;
  gender.value=user.gender;
  email.value=user.email;
}

function saveProfile(){
  user={
    name:name.value,
    age:age.value,
    gender:gender.value,
    email:email.value
  }
  localStorage.setItem("mindUser",JSON.stringify(user));
  slide1.classList.add("hidden");
  slide2.classList.remove("hidden");
  greeting.innerText="Hello "+user.name+" 🌸";
}

const quotes={
  happy:["Keep shining ✨","Progress more today 🚀"],
  sad:["You are stronger than this 💪","Storms pass 🌈"],
  angry:["Breathe. You got this 🧘"],
  tired:["Rest is productive 💤"],
  okay:["Small steps matter 🌱"]
}

function selectMood(mood){
  moods.push({mood,date:new Date().toDateString()});
  localStorage.setItem("moods",JSON.stringify(moods));

  let msg=quotes[mood][Math.floor(Math.random()*quotes[mood].length)];
  quoteBox.innerHTML="<h3>"+msg+"</h3>";
}

function saveGoal(){
  goals.push(goalInput.value);
  localStorage.setItem("goals",JSON.stringify(goals));
  goalList.innerHTML += "<li>"+goalInput.value+"</li>";
  goalInput.value="";
}

function goReport(){
  slide2.classList.add("hidden");
  slide3.classList.remove("hidden");
  showChart();
}

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

function toggleTheme(){
  document.body.classList.toggle("dark");
}