import React, { Component } from 'react';
import Weather from './Weather.jsx';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.API_KEY = '9151ebd71be0afd8b6212fabfb68359d';
    this.API_URL = 'http://api.openweathermap.org/data/2.5/weather';
    this.units = 'metric';
    this.location = 'Sidcup';
    this.state = {weather: []};

    fetch(`${this.API_URL}?q=${this.location}&appid=${this.API_KEY}&units=${this.units}`).then((data) => {
      return data.json();
    }).then((json) => {
      this.setState({weather: json.weather});
    });

  }

  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1><i className="fa fa-umbrella" aria-hidden="true"></i><br />Do I need an umbrella?</h1>
        {this.state.weather.map(item => {return <Weather weather={item} />})}
      </div>
    );
  }
}
