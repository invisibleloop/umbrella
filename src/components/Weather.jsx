import React, { Component } from 'react';

export default class Weather extends Component  {

  constructor(props) {
    super(props);
    this.weather = this.props.weather;
    this.timeDescription = 'today';
    const d = new Date();
    const n = d.getHours();
    if (n > 18) {
      this.timeDescription = 'tonight';
    }
    this.message = `Not ${this.timeDescription}, free yourself from the shackles of the brolly.`;
    if (this.weather.main.toLowerCase() === 'cloud') {
      this.message = 'You may need an umbrella. Better safe than sorry.';
    } else if (this.weather.main.toLowerCase() === 'rain') {
      this.message = 'You should definitely take a brolly dude.';
    }
  }

  render() {
    return (
    <div className="message" key={this.weather.id.toString()}>&quot;{this.message}&quot;</div>
    )
  }
}
