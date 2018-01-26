import React, { Component } from 'react';
import request from 'superagent';
import './App.css';

import Weather from './components/Weather';
import ErrorMessage from './components/ErrorMessage';

import { setTimeout } from 'timers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      latitude: null,
      longitude: null,
      error: null,
      showError: false,
      apiKEY: '53f9d8e4213222cf517d86dc406d67fc',
      baseURL: 'http://api.openweathermap.org/data/2.5/weather',
      src: '',
      weather: {
        cTemp: '--',
        fTemp: '--',
        weatherNiceName: '--',
        cTempMin: '--',
        cTempMax: '--',
        fTempMin: '--',
        fTempMax: '--',
        icon: '',
      },
    }
  }
  refresh = () => {
    console.log('this is gonna refresh the api call');
    
  }
  //api call to get weather using long and lat coordinates
  apiUrl(latitude, longitude) {
    return `${this.state.baseURL}?lat=${latitude}&lon=${longitude}&appid=${this.state.apiKEY}`;
  }

  //convert degrees to Cel and return
  convertKelvinToCel(deg) {
    return Math.round(parseInt(deg, 10) - 273.15);
  }

  mapData(data) {
    const fTemp = data.main.temp;
    const fTempMax = data.main.temp_max;
    const fTempMin = data.main.temp_min;
    const cTemp = this.convertKelvinToCel(fTemp);
    const cTempMax = this.convertKelvinToCel(fTempMax);
    const cTempMin = this.convertKelvinToCel(fTempMin);
    const weatherNiceName = data.weather[0].description;
    const icon = data.weather[0].icon;

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
        icon,
      }
    });
  }

  componentDidMount = () => {
    setTimeout(() => this.setState({ isLoading: false }), 1500);
    //get location, and cater for if location is provided

    const getLocation = ({ latitude, longitude }) => {
      request
        .get(this.apiUrl(latitude, longitude))
        .set('accept', 'json')
        .then((res) => {
          this.mapData(res.body);
        })
        .catch(function (err) {
          // err.message, err.response
        });
    }

    //success scenario
    const geoSuccess = ({ coords }) => {
      this.setState({ showError: false });
      getLocation(coords);
    };

    //failure scenario
    const geoError = () => {
      this.setState({ showError: true });
    }

    //what to do if location is found
    if (navigator.geolocation) {
      var gl = navigator.geolocation;
      gl.getCurrentPosition(geoSuccess, geoError);

    } else {
      //if something larger than life fails
      console.log('check yo browser out');
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {

    const {
      latitude,
      longitude,
      isLoading,
      showError,
      weather: {
        cTemp,
        weatherNiceName,
        cTempMax,
        cTempMin
      },
    } = this.state;

    // let showContent = null;

    // if (isLoading) {
    //   showContent = (
    //     <div className="loader"></div>
    //   )
    // }
    // else if (showError) {
    //   showContent = (
    //     <div>
    //       <ErrorMessage />
    //     </div>
    //   )
    // } else {
    //   showContent = (
    //     <div>
    //       <Weather
    //         cTemp={cTemp}
    //         weatherNiceName={weatherNiceName}
    //         cTempMax={cTempMax}
    //         cTempMin={cTempMin}
            
    //       />
    //       <button class="button" onClick={this.refresh}>Refresh</button>
    //     </div>
    //   )
    // }

    return (
      <div>
        <div className="icon"></div>
        {showError} <ErrorMessage />
        {/* {!showError}  */}
      </div>

    );
  }
}

export default App;
