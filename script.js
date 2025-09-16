let send_btn = document.getElementById("send");
let input_box = document.getElementById("patient_input");
let patient = document.getElementById("patient");

function createBubble(text, sender) {
    let msg = document.createElement("div");
    msg.classList.add("bubble", sender); 
    msg.textContent = text;
    patient.appendChild(msg);

    patient.scrollTop = patient.scrollHeight;
}
function submit_input() {
    let patient_input = input_box.value.trim();
    if (patient_input === "") return;
    createBubble(patient_input, "user");

    input_box.value = "";

    setTimeout(() => {
        createBubble("I am analyzing your symptoms...", "ai");
    }, 10);
}

send_btn.addEventListener("click", submit_input);
input_box.addEventListener("keypress", function (e) {
    if (e.key === "Enter") submit_input();
});
