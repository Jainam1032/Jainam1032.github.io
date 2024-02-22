function showAnswer() {
    document.getElementById("response").style.display = "block";
}

function submitAnswer() {
    var answer = document.getElementById("answer").value;
    if (answer.toLowerCase() === "yes") {
        document.getElementById("result").innerText = "Congratulations! Let's start planning our future together!";
    } else {
        document.getElementById("result").innerText = "That's okay. I'll always cherish our relationship no matter what.";
    }
}
