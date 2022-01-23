
const loginInput = document.querySelector(".login-form__name input");
const loginForm = document.querySelector(".login-form");
const loginHello = document.querySelector(".login-form__hello");
const greeting = document.querySelector(".greeting");
const clock = document.querySelector(".clock-Box__clock");

const USERNAME_KEY = "username";

function loginSubmit(event){
    event.preventDefault();
    const name = loginInput.value;
    loginInput.value = "";
    greeting.innerText = name;
    localStorage.setItem(USERNAME_KEY, name);
    loginInput.classList.add("hidden");
    loginHello.classList.add("hidden");
    clock.classList.remove("hidden");
    
    
}
loginForm.addEventListener("submit", loginSubmit);



/* clock 에 대한 js */
function getClock(){
    const date = new Date();
    const hour = String(date.getHours());
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hour}:${minute}:${second}`;
}
getClock();
setInterval(getClock, 1000);
