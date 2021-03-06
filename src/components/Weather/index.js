import PropTypes from 'prop-types';
import React from 'react';
import './weather.css';
import Footer from './Footer/Footer';
import Location from './Location/Location';
import CTemp from './CTemp/CTemp';
import CTempMax from './CTempMax/CTempMax';
import CTempMin from './CTempMin/CTempMin';

import Images from '../Images';

const Weather = ({ location, cTemp, cTempMax, cTempMin, weatherNiceName, icon }) => (
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
          <td data-qa="weather__location">
            <Location location={location} />
          </td>
        </tr>
        <tr>
          <td>Temperature: </td>
          <td data-qa="weather__temperature__celcius">
            <CTemp cTemp={cTemp} />
          </td>
        </tr>
        <tr>
          <td>Max Temperature: </td>
          <td data-qa="weather__temperature__celcius__max">
            <CTempMax cTempMax={cTempMax} />
          </td>
        </tr>
        <tr>
          <td>Min Temperature: </td>
          <td data-qa="weather__temperature__celcius__min">
            <CTempMin cTempMin={cTempMin} />
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
    <div className="iconHeader">
      <p data-qa="weather__name">{weatherNiceName}</p>
      <Images data-qa="icon" icon={icon} />
    </div>
    <Footer />
  </div>
);

Weather.propTypes = {
  location: PropTypes.string.isRequired,
  cTemp: PropTypes.string.isRequired,
  cTempMax: PropTypes.string.isRequired,
  cTempMin: PropTypes.string.isRequired,
  weatherNiceName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Weather;
