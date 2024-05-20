const users = [
  {
    이름: "찰수",
    나이: 19,
    성별: "남",
  },
  {
    이름: "짱구",
    나이: 20,
    성별: "남",
  },
  {
    이름: "유리",
    나이: 21,
    성별: "여",
  },
];

console.log(users);

users.forEach((user) => {
    const userBox = document.querySelector('.user-box');
    const div = document.createElement('div');
    div.classList.add('user')
    div.innerHTML = `
        <p>이름: ${user.이름}</p>
        <p>나이: ${user.나이}</p>
        <p>성별: ${user.성별}</p>
        `;
        userBox.appendChild(div);
});

const 여자 = users.find(user => user.성별 === "여");
console.log(여자);

const 남자 = users.filter(user => user.성별 === "남");
console.log(...남자);

const practiceMap = users.map((user) => ({
    ...user,
    나이: user.나이 + 10
}))
console.log(practiceMap);

const users1 = [...users];
console.log(users);
console.log(users1);

users1.sort((a,b) => b.나이 - a.나이);
console.log(users1);

const user = {
	이름: "병수",
	나이: 20,
	주소: "시골",
};

const {이름, 나이, 주소} = user;
console.log("이름:", 이름, "나이:", 나이, "주소:", 주소);