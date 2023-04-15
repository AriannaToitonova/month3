const block = document.querySelector(".block2");

function animation(elem) {
    let f = 0;
    const s = 2 * Math.PI / 180;
    setInterval(() => {
        f += s;
        elem.style.left = elem.parentNode.offsetLeft + 235 + 180 * Math.sin(f) + 'px';
        elem.style.top = elem.parentNode.offsetTop + 235 + 180 * Math.cos(f) + 'px';
    }, 20);
}

animation(block);


//-------------------------------------//

const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const messageElement = document.getElementById('message');

let totalSeconds = 0;
let interval;

function startTimer() {
    interval = setInterval(() => {
        totalSeconds++;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        minutesElement.innerText = minutes < 10 ? '0' + minutes : minutes;
        secondsElement.innerText = seconds < 10 ? '0' + seconds : seconds;

        if (totalSeconds === 300) {
            clearInterval(interval);
            messageElement.innerText = 'Таймер закончился';
        } else if (totalSeconds % 60 === 0)  {
            const minutesPassed = totalSeconds / 60;
            messageElement.innerText = `Прошло ${minutesPassed} минут(ы)`;
        }
    }, 1000);
}

startTimer();
