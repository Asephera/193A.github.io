function biggify() {
    document.getElementById("textArea").style.fontSize = "4em";
}

function fancifyText() {
    let textBox = document.getElementById("textArea")
    textBox.style.fontWeight = "bold";
    textBox.style.color = "blue";
    textBox.style.textDecoration = "underline";
}

function resetText() {
    document.getElementById("textArea").style.fontWeight = "normal";
}

function clickAlert() {
    alert("Hello, world!");
}

function moo() {
    let textBox = document.getElementById("textArea")
    textBox.value = textBox.value.toUpperCase();
    text = textBox.value;
    let sentences = text.split(".");
    textBox.value = sentences.join(".-Moo");
}