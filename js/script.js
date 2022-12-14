const apiKey = "b904c364ed9a69cb3cd3febf9b2de935"; 
const apiCountry = "https://countryflagsapi.com/png/"; 


const cityinput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#seach");

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const umidityElement = document.querySelector("#umidity span")
const windElement = document.querySelector("#wind span")

// Funções 
const getWeatherData = async(city) => { 
     const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

     const res = await fetch(apiWeatherURL)
     const data = await res.json()
     
     return data; 
    };

const showWeatherdata = async (city) => {
   const data = await getWeatherData(city);

   cityElement.innerText = data.name; 
   tempElement.innerText = parseInt(data.main.temp); 
   descElement.innerText = data.weather[0].description;
   weatherElement.setAttribute(
    "src",
   `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
   const countryAbb = (data.sys.country).toLowerCase()


   countryElement.setAttribute("src", apiCountry + countryAbb);
    umidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;

};



// Eventos

searchBtn.addEventListener("click", (e)=> {
 e.preventDefault();

const city= cityinput.value;

 showWeatherdata(city)

})
