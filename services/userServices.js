import { post } from "../index.js";
import { URL_USER } from "../routes.js";

const form = document.querySelector("form");
const userNameInput = document.getElementById("userName")
const passwordInput = document.getElementById("password")
const userTypeInput = document.getElementById("userType")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = userNameInput.value;
    const password = passwordInput.value;
    const userType = userTypeInput.value;

    post(URL_USER, {
        "userName": userName,
        "password": password,
        "userType": userType
    })
})

fetch(URL_USER, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}).catch(error => console.log(error));

