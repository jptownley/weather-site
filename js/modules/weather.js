"use strict"
var placeName = "Brooklyn"
var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q={Brooklyn}&appid=d3a65e519935a92e81d73ae7127b3a6c`;

function weatherForecast(){
    $.ajax ({
        url: weatherUrl,
        success: function (result){
            console.log(result);
            console.log(result.name);

            let F = Math.round(result.main.temp * (9/5) - 459.67);
            let C = Math.round(result.main.temp - 273.15);
            let Fahrenheit = F.toString();
            let Celsius = C.toString();
            $("#tempF").text(Fahrenheit+"º F");
            $("#tempC").text(Celsius+"º C");
            $("#location").placeName;

            let wind = (result.wind.speed * 1.944);
            let windKnots = wind.toFixed(2);
        
            $("#windKnots").text(windKnots);

            let windKilometers = (result.wind.speed * 3.6);
            let windK = windKilometers.toString();
            $("#windK").text(windK+" KPH")
            let windMiles = Math.round(result.wind.speed * 2.23694);
            let windM = windMiles.toString();
            $("#windM").text(windM+" MPH")
            
            let skyConditions = (result.weather[0].description);
        $("#sky").text(skyConditions);
        }
    })
}
export { weatherForecast };