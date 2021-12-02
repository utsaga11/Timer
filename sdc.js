let btn = document.querySelector('#con button');
let scr = document.getElementById("screen");
let bee = new Audio("beep-06.mp3");
let ove = new Audio("mixkit-wrong-answer-fail-notification-946.wav");
btn.addEventListener('click', function () {
    // console.log("hi");
    var number = parseInt(document.getElementById('in').value);
    if (isNaN(number)) {
        bee.play();
        alert("Please enter a number");
        clearInterval(countInterval);
        return;
    }
    if (number < 1 || number > 9) {
        bee.play();
        alert("Range out of bounds");
        clearInterval(countInterval);
        return;
    }
    let val = number;
    var count = 0;
    scr.innerHTML = val;
    var countInterval = setInterval(function () {
        if (count == number) {
            clearInterval(countInterval);
            ove.play()
            alert("Counter has stopped");
            return;
        }
        count++;
        val--;
        scr.innerHTML = val;
    }, 1000);
});


