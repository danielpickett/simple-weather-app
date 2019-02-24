import React, { Component } from 'react';
import './App.css';


import apiKey from './apiKey';
import ZipCodeForm from './ZipCodeForm';
import WeatherReport from './WeatherReport';


class App extends Component {

  state = {
    weather: null
  }

  handleGetWeather = (zipCode) => {
    console.log('Getting weather for zip code: ', zipCode);
    fetch('https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=' + zipCode + '&appid=' + apiKey)
    .then(response => response.json())
    .then(json => {
      this.setState({weather: json});
    });
  }

  handleSubmitSizeCode(zipCode) {
    console.log('Zip Code Submitted', zipCode)
  }

  render() {
    let temp;
    let city;
    if (this.state.weather !== null) {
      temp = this.state.weather.main.temp;
      city = this.state.weather.name;
    } else {
      temp = null;
      city = null;
    }
    console.log('weather: ', this.state.weather)
    return (
      <>
      <div className="App">
        <ZipCodeForm 
          getWeather={this.handleGetWeather}
        />
      </div>
      <WeatherReport 
        temp={temp} 
        city={city}
      />
      </>
    );
  }
}

export default App;
