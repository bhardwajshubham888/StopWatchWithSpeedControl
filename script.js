let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
    changecotent();
    countnum++;
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    countnum = 0;
    incspeed.textContent = "Click On Start More Speed"
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});

function stopWatch() {
    if (timer) {
        count = count + 2;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            timer = false;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute == 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}

let incspeed = document.getElementById("speed");
let countnum = 1;

function changecotent() {
    if (countnum === 1) {
        incspeed.style.boxShadow = "inset 0px 0px 50px rgb(103, 129, 225)"
        incspeed.textContent = "1.25x"

    }
    else if (countnum === 2) {
        incspeed.style.boxShadow = "inset 0px 0px 50px rgb(213, 19, 25)"
        incspeed.textContent = "1.5x"

    }
    else if (countnum === 3) {
        incspeed.style.boxShadow = "inset 0px 0px 50px rgb(103, 229, 225)"
        incspeed.textContent = "1.75x"

    }
    else if (countnum === 4) {
        incspeed.style.boxShadow = "inset 0px 0px 50px rgb(223, 229, 225)"
        incspeed.textContent = "2x"

    }
    else if (countnum === 5) {
        incspeed.style.boxShadow = "inset 0px 0px 50px rgb(13, 29, 25)"
        incspeed.textContent = "2.25x"

    }
    else if (countnum === 6) {
        incspeed.style.boxShadow = "inset 0px 0px 50px rgb(183, 199, 225)"
        incspeed.textContent = "2.75x"

    }
    else if (countnum === 7) {
        incspeed.textContent = "3x"

    }
}





