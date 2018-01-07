import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    latitude: null,
    longitude: null,
    error: null
  }

componentDidMount = () => {
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
    <div></div>
    // <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Latitude: {this.state.latitude}</Text>
    //   <Text>Longitude: {this.state.longitude}</Text>
    //   {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
    // </View>
  );
}
}

export default App;
