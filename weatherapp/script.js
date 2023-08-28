const userTab = document.querySelector("[data-useWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchform]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".userInfo-container");
const errorContainer = document.querySelector(".error-container");
const API_key = "08072930eb4436ae037ac2437ad724d7";
let currentTab = userTab;
currentTab.classList.add("current-tab");

function switchTab(clickedTab) {
    if(clickedTab != currentTab) {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

         if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
         }
         else{
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            // will check local storage first for coordinates
            getfromSessionStorage();
         }
    }
}
userTab.addEventListener('click', () => {
    // pass clicked tab as userTab;
    switchTab(userTab);
});

searchTab.addEventListener('click', () => {
    switchTab(searchTab);
});

getfromSessionStorage();
// checks if coordinates are already present in local storage
function getfromSessionStorage(){
    const localCoordinates = sessionStorage .getItem("user-coordinates");
    if(!localCoordinates){
        grantAccessContainer.classList.add("active");
    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates){
    const {lat, lon} = coordinates;
    console.log("latit", lat);
    // make grant container invisible
    errorContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");
    // make loader viible;
    loadingScreen.classList.add("active");
    // API CALL

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`);
        const data = await response.json();
        
        loadingScreen.classList.remove("active")
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err){
        loadingScreen.classList.remove("active");
    }
}


function renderWeatherInfo(weatherinfo){
    const cityname = document.querySelector("[data-cityname]");
    const countryIcon = document.querySelector("[data-countryicon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weathericon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]")

    // fetch values from weatherinfo and put it.
    cityname.innerText = weatherinfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherinfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherinfo?.weather?.[0]?.description;
    weathericon.src = `http://openweathermap.org/img/w/${weatherinfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherinfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherinfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherinfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherinfo?.clouds?.all}%`;
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        alert("No location available");
    }
}

function showPosition(position){
    const userCoordinates={
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }
    sessionStorage.setItem("user-coordinates",  JSON.stringify(userCoordinates));
}
const grantAcessButton = document.querySelector("[data-grantAccess]")
grantAcessButton.addEventListener('click', getLocation);

let searchInput = document.querySelector("[data-searchInput]");
searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    if(searchInput.value === "") return;
    console.log(searchInput.value);
    fetchSearchWeatherInfo(searchInput.value);
})

async function fetchSearchWeatherInfo(city){
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");
    // errorContainer.classList.remove("active");
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
        const data = await response.json();
        console.log(data.cod);
        if(data?.cod == 404){
            throw new Error("Couldn't find weather")
        }
        else {
            errorContainer.classList.remove("active");
            loadingScreen.classList.remove("active");
            userInfoContainer.classList.add("active");
            renderWeatherInfo(data);
        }
    }
    catch(err){
        // Instead of only prining out the errorou sould do somethig beteer because your site will crash otherwse
        userInfoContainer.classList.remove("active");
        loadingScreen.classList.remove("active");
        errorContainer.classList.add("active");
        console.log(err);
    }
}

