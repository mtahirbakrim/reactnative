import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker, Polyline } from 'react-native-maps';
import PolyLine from "@mapbox/polyline";
import mapstyle from './maps/mapstyle';
import GoogleAutoPlace from './maps/GoogleAutoPlace';

export default class Maps extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      latitude: -7.2207332,
      longitude: 112.7589751,
      error: null,
      markers: {
        latitude: -7.3107332,
        longitude: 112.7589751,
      },
      destinationOne: {
        latitude: -7.2862967,
        longitude: 112.7598053,
      },
      destinationTwo: {
        latitude: -7.2462364,
        longitude: 112.7356327,
      },
      destinationThree: {
        latitude: -7.2232321,
        longitude: 112.6207648,
      },
      destinationFour: {
        latitude: -7.2520246,
        longitude: 112.7539838,
      },
      destinationFive: {
        latitude: -7.2634152,
        longitude: 112.738152,
      }
    };
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null
      });
    },
    error => this.setState({ error: error.message}),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 }
  );
  }


  render(){

      return(
        <View style={styles.container}>
          <MapView
            style={styles.map}
            customMapStyle={mapstyle}
            initialRegion={{ // initial region set to Bileto -7.2207332, 112.7589751,
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
              showsUserLocation={true}
            >

            <MapView.Marker
            coordinate={this.state.destinationOne}
            />
            <MapView.Marker
            coordinate={this.state.destinationTwo}
            />
            <MapView.Marker
            coordinate={this.state.destinationThree}
            />
            <MapView.Marker
            coordinate={this.state.destinationFour}
            />
            <MapView.Marker
            coordinate={this.state.destinationFive}
            />

          </MapView>
          <GoogleAutoPlace/>
        </View>
      );
  }

}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
