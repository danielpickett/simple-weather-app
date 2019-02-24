import React from 'react';

const WeatherReport = (props) => {
  if (props.temp !== null) {
    return <p>The current temperature in {props.city} is {props.temp}</p>
  }
  return  <p>Enter your zip code to retrieve the current temporature.</p>

}

export default WeatherReport;