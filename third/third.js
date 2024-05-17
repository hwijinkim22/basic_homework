const counterId = document.querySelector('#counter');
let number = Number(counterId.innerText);

const counterCheck = setInterval(function () {
    number++;
    counterId.innerText = number;

    if(number >= 5) {
        clearInterval(counterCheck);
        console.log("종료!");
    }
}, 1000)    