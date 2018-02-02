import React from 'react';
import './weather.css';

const Weather = () => (
  <div className="tablestyle">
    <hr />
    <table className="table">
      <thead>
        <tr>
          <th colSpan="4">Weather</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Location: </td>
          <td> {this.props.location}</td>
        </tr>
        <tr>
          <td>Temperature: </td>
          <td>{this.props.cTemp}°C</td>
        </tr>
        <tr>
          <td>Max Temperature: </td>
          <td> {this.props.cTempMax}°C</td>
        </tr>
        <tr>
          <td>Min Temperature: </td>
          <td> {this.props.cTempMin}°C</td>
        </tr>
      </tbody>
    </table>
    <div>
      <p>{this.props.weatherNiceName}</p>
    </div>
    <hr />
    <div>
      <p>Done by <a href="https://github.com/tony2tones" rel="noopener">Anthony</a></p>
    </div>
  </div>
);

export default Weather;
