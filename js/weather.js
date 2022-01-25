const API_KEY = "8dd6c09130c20e35c82805cc1bf895b3";
const city = document.querySelector(".weather span:first-child");
const weather = document.querySelector(".weather span:nth-child(2)");
const temp = document.querySelector(".weather span:nth-child(3)");
const feel = document.querySelector(".weather span:last-child");

function GeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // lat : 37.5682  lon : 126.9977
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = `${data.name}`;
            weather.innerText = `${data.weather[0].main}`;
            temp.innerText = `${data.main.temp}℃`;
            feel.innerText = `${data.main.feels_like}℃`;
        });
}
function GeoFail(){
    alert("SORRY. CAN'T FIND INFO.");

}
navigator.geolocation.getCurrentPosition(GeoSuccess, GeoFail);