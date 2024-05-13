const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    const title = document.querySelector('.title')

    title.innerHTML = "제목아니다!!"
});

function sum(num1, num2) {
    return num1 + num2
};

console.log(sum(2,3));

function isEvenOrOdd (num) {
    if(num % 2 === 0) {
        console.log("짝수입니다")
    } else {
        console.log("홀수입니다")
    }
};
console.log(isEvenOrOdd(9));
console.log(isEvenOrOdd(10))

let person = {
    name: "병수 튜터님",
    age: 20
};
console.log("이름:" + person.name);
console.log("나이:" + person.age);