import React, { Component } from 'react';
import request from 'superagent';
import './App.css';

import Weather from './components/Weather';
import ErrorMessage from './components/ErrorMessage';
import BrokenErrorMessage from './components/BrokenErrorMessage';

class App extends Component {
  // Convert degrees to Cel and return
  static convertKelvinToCel(deg) {
    return Math.round(parseInt(deg, 10) - 273.15);
  }
  constructor() {
    super();
    this.state = {
      showWeather: false,
      broken: false,
      isLoading: true,
      latitude: null,
      longitude: null,
      hasChanged: false,
      error: null,
      showError: false,
      apiKEY: '53f9d8e4213222cf517d86dc406d67fc',
      baseURL: 'http://api.openweathermap.org/data/2.5/weather',
      src: '',
      imageSource: [],
      weather: {
        cTemp: '--',
        fTemp: '--',
        weatherNiceName: '--',
        cTempMin: '--',
        cTempMax: '--',
        fTempMin: '--',
        fTempMax: '--',
        location: '--',
        icon: '',
      },
    };
  }

  componentDidMount() {
    // Get location, and cater for if location is provided
    const getLocation = ({ latitude, longitude }) => {
      request
        .get(this.apiUrl(latitude, longitude))
        .set('accept', 'json')
        .then((res) => {
          this.mapData(res.body);
        })
        .catch(() => {
          brokenError();
          // err.message, err.response
        });
    };

    // Success scenario
    const geoSuccess = ({ coords }) => {
      this.setState({ showError: false });
      getLocation(coords);
    };

    // Failure scenario
    const geoError = () => {
      this.setState({ showError: true, isLoading: false });
    };

    const brokenError = () => {
      this.setState({ broken: true, isLoading: false });
    };

    // What to do if location is found
    if (navigator.geolocation) {
      const gl = navigator.geolocation;
      gl.getCurrentPosition(geoSuccess, geoError);
    } else {
      brokenError();
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  // api call to get weather using long and lat coordinates
  apiUrl(latitude, longitude) {
    return `${this.state.baseURL}?lat=${latitude}&lon=${longitude}&appid=${this.state.apiKEY}`;
  }

  mapData(data) {
    const fTemp = data.main.temp;
    const fTempMax = data.main.temp_max;
    const fTempMin = data.main.temp_min;
    const cTemp = App.convertKelvinToCel(fTemp);
    const cTempMax = App.convertKelvinToCel(fTempMax);
    const cTempMin = App.convertKelvinToCel(fTempMin);
    const weatherNiceName = data.weather[0].main;
    const location = data.name;
    const { icon } = data.weather[0];

    this.setState({
      ...this.state,
      weather: {
        fTemp,
        fTempMax,
        fTempMin,
        cTemp,
        cTempMax,
        cTempMin,
        weatherNiceName,
        location,
        icon,
      },
    });
    this.setState({ isLoading: false, showWeather: true });
  }
  

  render() {
    const {
      isLoading,
      broken,
      showError,
      showWeather,
      weather: {
        cTemp,
        weatherNiceName,
        cTempMax,
        cTempMin,
        location,
        icon,
      },
    } = this.state;
    return (
      <div>
        <div className="icon" />
        {isLoading && <div className="loader" />}
        {broken && <BrokenErrorMessage />}
        {showError && <ErrorMessage />}
        {showWeather && <Weather
          cTemp={cTemp}
          location={location}
          weatherNiceName={weatherNiceName}
          cTempMax={cTempMax}
          cTempMin={cTempMin}
          icon={icon}
        />}
        {showWeather &&
          <button className="button" onClick={() => window.location.reload()}>
            Refresh
          </button>}
      </div>
    );
  }
}

export default App;
