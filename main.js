const user = {
	이름: "병수",
	나이: 20,
	주소: "시골",
}

localStorage.setItem("user", JSON.stringify(user));

console.log(localStorage.getItem("user"));

localStorage.setItem("user", JSON.stringify({...user, 나이: 30}));

localStorage.removeItem("user");

function post() {
    const url = "https://jsonplaceholder.typicode.com/posts"

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("error =>", error);
    });
}

post();