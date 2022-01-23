const API_KEY = "8dd6c09130c20e35c82805cc1bf895b3";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // lat : 37.5682  lon : 126.9977
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url);
    //     .then((response) => response.json())
    //     .then((data) => {
            

    //     });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");

}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);