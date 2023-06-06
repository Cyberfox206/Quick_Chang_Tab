const inp = document.getElementById("input");
const change_tab = document.getElementById("change_tab");
const positive_btn = document.getElementById("positive");
const negative_btn = document.getElementById("negative");
const neutral_btn = document.getElementById("neutral");
const textm = document.getElementById("text_modifier");
const enter = document.getElementById("form");


positive_btn.addEventListener("click", () => {
    positive_btn.style.color = "black"
    negative_btn.style.color = "grey"
    neutral_btn.style.color = "grey"
    textm.innerText = "Positive contente"
})
negative_btn.addEventListener("click", () => {
    negative_btn.style.color = "black"
    positive_btn.style.color = "grey"
    neutral_btn.style.color = "grey"
    textm.innerText = "Negative contente"
})
neutral_btn.addEventListener("click", () => {
    neutral_btn.style.color = "black"
    negative_btn.style.color = "grey"
    positive_btn.style.color = "grey"
    textm.innerText = "Neutral contente"
})

change_tab.addEventListener("click", () => {
    let inpnumber = parseInt(inp.value);
    if (inpnumber === 1) {
        inp.value = ""
        positive_btn.style.color = "black";
        negative_btn.style.color = "grey";
        neutral_btn.style.color = "grey";
        textm.innerText = "Positive contente"
    } else if (inpnumber === 2) {
        inp.value = ""
        positive_btn.style.color = "grey";
        negative_btn.style.color = "black";
        neutral_btn.style.color = "grey";
        textm.innerText = "Negative contente"
    } else if (inpnumber === 3) {
        inp.value = ""
        positive_btn.style.color = "grey";
        negative_btn.style.color = "grey";
        neutral_btn.style.color = "black";
        textm.innerText = "Neutral contente"
    } else {
        alert("mettre un nombre valide")
    }
})

enter.addEventListener("submit", (event) => {
    event.preventDefault();
    let inpnumber = parseInt(inp.value);
    if (inpnumber === 1) {
        inp.value = ""
        positive_btn.style.color = "black";
        negative_btn.style.color = "grey";
        neutral_btn.style.color = "grey";
        textm.innerText = "Positive contente"
    } else if (inpnumber === 2) {
        inp.value = ""
        positive_btn.style.color = "grey";
        negative_btn.style.color = "black";
        neutral_btn.style.color = "grey";
        textm.innerText = "Negative contente"
    } else if (inpnumber === 3) {
        inp.value = ""
        positive_btn.style.color = "grey";
        negative_btn.style.color = "grey";
        neutral_btn.style.color = "black";
        textm.innerText = "Neutral contente"
    } else {
        alert("mettre un nombre valide")
    }
    return false;
})