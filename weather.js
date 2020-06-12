class Weather {
  constructor(city,country){
    this.apiKey = '08c71bd5cc7997589f91dc2220f274ee'
    this.city = city 
    this.country = country
  }

  //fetch weather
  async getWeather() {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`
    )

    const responseData = await response.json()
    return responseData
}

//change location
changeLocation(city, country) {
    this.city = city
    this.country = country
}
}

