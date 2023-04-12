
const block2 = document.querySelector('.block2');

let number = 0;
const zoom = function (Blockleft) {
    number++;
    block2.style.left = `${number}px`;
    if (number < 20){
        return zoom();
    }else if (number > 349){
        number = 0;
    }else {
        number += 20;
    }
    Blockleft()
}
block2.addEventListener('click', zoom)