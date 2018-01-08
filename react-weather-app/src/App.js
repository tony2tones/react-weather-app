import React, { Component } from 'react';
import './App.css';
import Weather from './Weather/Weather';

class App extends Component {
  state = {
    latitude: null,
    longitude: null,
    error: null,
    showError: false
  }

  componentDidMount = () => {
    //get location, and cater for if location is provided

    const geoSuccess = ({ coords }) => {
      this.setState({ showError: false });
      this.getLocation(coords);
    };

    const geoError = () => {
      this.errorMessage = true;
      this.setState({ showError: true });
      console.log('You meant to let me have access');
    }

    if (navigator.geolocation) {
      var gl = navigator.geolocation;
      gl.getCurrentPosition(geoSuccess, geoError);
    } else {
      //if something larger than life fails
      console.log('check yo browser out');
    }

    // const getLocation = ({ latitude, longitude }) => {
    //   const self = this;
    //   $.getJSON(this.apiUrl(latitude, longitude), function (data) {
    //     self.mapData(data)
    //   });
    // }

    // }
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
