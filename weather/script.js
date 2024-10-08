const keyApi = '7b10f914042c5404a175b777a676fdd1';

const btn       = document.querySelector("#btn");
const input     = document.querySelector("#input");
const weather   = document.querySelector(".weather");
const humidity  = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind");




async function getWeather(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keyApi}`;

    const response = await fetch(`${url}`);
    const data = await response.json();
    // console.log(data);

                          //weather
    weather.innerHTML = `
    
     <img width="100" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"" alt="cloud">
            <h3>${data.name}  ${(Math.floor(data.main.temp-273.15))}°c</h3>
            <h3>${data.weather[0].main}</h3>
    `
                      // humidity
    humidity.innerHTML= ` 
       
               <img src="./hum.svg" alt="humidity">
                <p>humidity ${data.main.humidity}%</p>
    `

                          //  wind  
    windSpeed.innerHTML = `  
      <i class="fa-solid fa-wind"></i>
    <p> wind Speed  ${data.wind.speed} m/s </p>
    `
}




btn.addEventListener("click", (e)=> {
    e.preventDefault();
    getWeather(input.value);
    
    console.log(input.value)
})





const time = document.querySelector(".time");

setInterval(() => {
            let date = new Date();
            time.innerHTML = `
            <div class="time">${date.toLocaleTimeString()} </div>
            `
            
        
        }, 1000);
   