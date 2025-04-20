const petname = document.getElementById("petname");
const submitBtn = document.getElementById("submitBtn");
const text = document.getElementById("text");

let petName;
let size;

submitBtn.onclick = function() {
    popup.classList.remove("show");
    text.textContent = "";
    size = 3.5;
    text.style.fontSize = size + "em";
    petName = petname.value;
    text.textContent = `I LOVE YOU ${petName.toUpperCase()}`;
}

const heartBtn = document.getElementById("heartBtn");
const popup = document.getElementById("popup");
const alert = document.getElementById("alert");

heartBtn.onclick = function() {
    if (size >= 6) {
        alert.textContent = `Hussain has too much LOVE for you ${petName} to display on this page <3`;
        popup.classList.add("show");
        console.log(popup.style.opacity);
    }
    size += 1;
    text.style.fontSize = size + "em";
}

// Close popup when clicked
popup.onclick = function() {
    popup.classList.remove("show");
}
