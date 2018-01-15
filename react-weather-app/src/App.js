import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
import Weather from './Weather/Weather';

class App extends Component {
  constructor() {
    super();
    this.state = {
      toast: [],
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

  //api call to get weather using long and lat coordinates
  apiUrl(latitude, longitude) {
    return `${this.state.baseURL}?lat=${latitude}&lon=${longitude}&appid=${this.state.apiKEY}`;
  }

  //convert degrees to Cel and return
  convertKelvinToCel(deg) {
    return Math.round(parseInt(deg,2 ) - 273.15);
  }

  mapData({
    weather
          }) {
              this.weather.fTemp = this.convertKelvinToFahrenheit(this.state.toast.body.main.temp);
              this.weather.fTempMax = this.convertKelvinToFahrenheit(temp_max);
              this.weather.fTempMin = this.convertKelvinToFahrenheit(temp_min);
              this.weather.cTemp = this.convertKelvinToCelcius(temp);
              this.weather.cTempMax = this.convertKelvinToCelcius(temp_max);
              this.weather.cTempMin = this.convertKelvinToCelcius(temp_min);
              this.weather.weatherNiceName = weather[0].description;
              this.weather.icon = this.weatherIcon(weather[0].icon);
              // console.log(data);
          }
  // dataMap(data) {
  //   this.setState({toast:data})
  //   console.log(this.state.toast);
  //   this.mapData(this.state.toast);
  // }
        

  componentDidMount = () => {
    //get location, and cater for if location is provided

    const getLocation = ({ latitude, longitude }) => {
      request
        .get(this.apiUrl(latitude, longitude))
        .set('accept', 'json')
        .end((err, res) => {
          // console.log(res);
          // this.mapData(res)
          // Calling the end function will send the request
          this.setState({toast:res})
          console.log(this.state.toast);
          this.mapData(this.state.toast);
        });
    }

    //success scenario
    const geoSuccess = ({ coords }) => {
      this.setState({ showError: false });
      getLocation(coords);
    };

    //failure scenario
    const geoError = () => {
      this.errorMessage = true;
      this.setState({ showError: true });
      console.log('You meant to let me have access');
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

    var errorStyle = {
      color: '#D8000C',
      backgroundColor: '#FFD2D2',
      position: 'relative',
      margin: '200',
      padding: '23',
      borderStyle: 'solid',
      borderColor: '#D8000C',
      borderWidth: '1px',
      borderRadius: '5px',
      textAlign: 'center'
    }

    let showContent = null;

    if (this.state.showError) {
      showContent = (
        <div style={errorStyle}>
          {<p> Please enable your GPS location to provide you with the latest weather updates.  </p>}
        </div>
      )
    } else
      showContent = (
        <Weather latitude={this.state.latitude}
          longitude={this.state.latitude} />
      )


    return (
      <div>

        {showContent}

      </div>

    );
  }
}

export default App;
