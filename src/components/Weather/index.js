import PropTypes from 'prop-types';
import React from 'react';
import './weather.css';

import Images from '../Images';

const Weather = ({ location, cTemp, cTempMax, cTempMin, weatherNiceName }) => {
  return (
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
            <td> {location}</td>
          </tr>
          <tr>
            <td>Temperature: </td>
            <td>{cTemp}°C</td>
          </tr>
          <tr>
            <td>Max Temperature: </td>
            <td> {cTempMax}°C</td>
          </tr>
          <tr>
            <td>Min Temperature: </td>
            <td> {cTempMin}°C</td>
          </tr>
        </tbody>
      </table>
      <div>
        <p>{weatherNiceName}</p>
      </div>
      <hr />
      <div>
        <p>Done by <a href="https://github.com/tony2tones" rel="noopener">Anthony</a></p>
      </div>
    </div>
  );
};

PropTypes.checkPropTypes = {
  location: PropTypes.string.isRequired,
  cTemp: PropTypes.string.isRequired,
  cTempMax: PropTypes.string.isRequired,
  cTempMin: PropTypes.string.isRequired,
  weatherNiceName: PropTypes.string.isRequired,
};

export default Weather;
