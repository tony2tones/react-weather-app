import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    latitude: null,
    longitude: null,
    error: null
  }

  componentDidMount = () => {
    //get location, and cater for if location is provided

    const geoSuccess = ({ coords }) => {
      // this.getLocation(coords);
    };

    const geoError = () => {
      this.errorMessage = true;
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
    return (
      <div>
        <p>Latitude: {this.state.latitude}</p>
        <p>Longitude: {this.state.longitude}</p>

      </div>
      // <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   
      //   {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      // </View>
    );
  }
}

export default App;
