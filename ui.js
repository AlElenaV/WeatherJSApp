class UI {
  constructor() {
      this.location = document.getElementById('w-location')
      this.desc = document.getElementById('w-desc')
      this.string = document.getElementById('w-string')
      this.details = document.getElementById('w-details')
      this.icon = document.getElementById('w-icon')
      this.humidity = document.getElementById('w-humidity')
      this.wind= document.getElementById('w-wind')
      this.feelsLike = document.getElementById('w-feels-like')

  }

  // getWindDirection() {
  //   const WindScope= new Array ['N','NNE','NE', 'ENE', 'E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW','N'];
  //let Index=this.windDirection.value-1;
  //   let windDirections;
  //   windDirections=WindScope[Index];
  //   console.log(windDirections);
  // }
 // this.windDirection.value = Math.round((weather.wind.deg/22.5,0)+1);



  paint(weather) {
      this.location.textContent = weather.name
      this.desc.textContent = weather.weather[0].description
      this.string.textContent = weather.main.temp + '°C'
      this.icon.setAttribute(
          'src',
          `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
      )
      this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`
      this.wind.textContent = `Wind Speed: ${weather.wind.speed}m/s`
      this.feelsLike.textContent= `Feels like  ${weather.main.feels_like}°C`
  }
      
}
