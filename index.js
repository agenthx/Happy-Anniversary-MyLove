const petname = document.getElementById("petname")
const submitBtn = document.getElementById("submitBtn")
const text = document.getElementById("text")

let name;

submitBtn.onclick = function() {
    name = petname.value;
    text.textContent = `I LOVE YOU ${name.toUpperCase()}`;
}

const heartBtn = document.getElementById("heartBtn")
const popup = document.getElementById("popup")
const alert = document.getElementById("alert")

let size = 3.5;
heartBtn.onclick = function() {
    if(size >= 6) {
        alert.textContent = `Hussain has too much LOVE for you ${name} to display on this page <3`;
        popup.style.display = "block";
    }
    size += 1;
    text.style.fontSize = size + "em";
}