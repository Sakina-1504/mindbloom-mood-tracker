let selectedMood = "";

function selectMood(mood){
    selectedMood = mood;

    // remove highlight from all buttons
    const buttons = document.querySelectorAll(".moods button");
    buttons.forEach(btn => btn.classList.remove("selected"));

    // highlight clicked button
    event.target.classList.add("selected");
}

function saveMood(){
    if(selectedMood === ""){
        alert("Please select a mood!");
        return;
    }

    const note = document.getElementById("note").value;
    const date = new Date().toLocaleDateString();

    const moodEntry = {
        mood: selectedMood,
        note: note,
        date: date
    };

    let moods = JSON.parse(localStorage.getItem("moods")) || [];
    moods.push(moodEntry);

    localStorage.setItem("moods", JSON.stringify(moods));

    showHistory();
}

function showHistory(){
    const history = document.getElementById("history");
    history.innerHTML = "";

    const moods = JSON.parse(localStorage.getItem("moods")) || [];

    moods.reverse().forEach(entry => {
        const li = document.createElement("li");
        li.innerHTML = `<b>${entry.date}</b> - ${entry.mood} <br> ${entry.note}`;
        history.appendChild(li);
    });
}

showHistory();