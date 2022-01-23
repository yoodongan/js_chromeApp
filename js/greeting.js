
const loginInput = document.querySelector(".login-form__name input");
const loginForm = document.querySelector(".login-form");
const welcomeBox = document.querySelector(".welcome-box");
const greeting = document.querySelector(".greeting");
const clock = document.querySelector(".clock-Box__clock");


const USERNAME_KEY = "username";
const HIDDEN_KEY = "hidden";

function loginSubmit(event){
    event.preventDefault();
    const name = loginInput.value;
    loginInput.value = "";
    paintGreetings(name);
    localStorage.setItem(USERNAME_KEY, name);
    loginForm.classList.add(HIDDEN_KEY);
    welcomeBox.classList.remove(HIDDEN_KEY);
}
loginForm.addEventListener("submit", loginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_KEY);
}
else{
    paintGreetings(savedUsername);
    loginForm.classList.add(HIDDEN_KEY);
}

function paintGreetings(name){
    greeting.innerText = `Hello, ${name}`;
    welcomeBox.classList.remove(HIDDEN_KEY);
}


/* clock 에 대한 js */
function getClock(){
    const date = new Date();
    const hour = String(date.getHours());
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hour} : ${minute} : ${second}`;
}
getClock();
setInterval(getClock, 1000);
