import React, { Component } from 'react';
import request from 'superagent';
import './App.css';

import Weather from './components/Weather';
import ErrorMessage from './components/ErrorMessage';

class App extends Component {
  constructor() {
    super();
    this.state = {
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
    this.setState({ isLoading: false });

  }

  //   weatherIcon(iconName) {
  //     // return iconName
  //     this.src = iconName;
  //     var self = this;
  //     if (iconName === '01d' || iconName === '01n') {
  //         self.imageLink = "http://mikeiamele.com/wp-content/uploads/2014/05/Sunny-Day-800x450.jpg";
  //     } else if (iconName === '02d' || iconName === '02n') {
  //         self.imageLink = "https://www.newvision.co.ug/w-images/6f544bf7-4a4a-46a0-be3d-f656bd88bd48/1/cloudy-703x422.jpg";
  //     } else if (iconName === '03d' || iconName === '03n') {
  //         self.imageLink = "https://i.ytimg.com/vi/rRL_9WxBJBc/maxresdefault.jpg";
  //     } else if (iconName === '04d' || iconName === '04n') {
  //         self.imageLink = "http://cdn.pcwallart.com/images/dark-clouds-wallpaper-4.jpg";
  //     } else if (iconName === '09d' || iconName === '09n') {
  //         self.imageLink = "https://pbs.twimg.com/media/CJb-mE_VEAAu-WB.jpg";
  //     } else if (iconName === '10d' || iconName === '10n') {
  //         self.imageLink = "https://tctechcrunch2011.files.wordpress.com/2015/08/clouds.jpg";
  //     } else if (iconName === '11d' || iconName === '11n') {
  //         self.imageLink = "https://pbs.twimg.com/media/CfvNkjbWsAATGV8.jpg";
  //     }
  // }

  componentDidMount = () => {
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
      isLoading,
      showError,
      weather: {
        cTemp,
        weatherNiceName,
        cTempMax,
        cTempMin,
        icon,
      },
    } = this.state;

    // if(!this.state.imageSource.length)
    //         return null;

    // let images = this.state.icon()=>{<img key={i} className='images' src={this.state.weather.icon}/>)


    return (

      <div>
        <div className="icon"></div>
        {showError ? <ErrorMessage /> :
          isLoading ? <div className="loader"></div>
            : <div>
              <Weather
                cTemp={cTemp}
                weatherNiceName={weatherNiceName}
                cTempMax={cTempMax}
                cTempMin={cTempMin}
              />
              <button class="button" onClick={this.componentDidMount}>Refresh</button>
              {/* {images} */}
            </div>
        }
        
      </div>
    )
  }

}

export default App;
