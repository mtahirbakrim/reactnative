import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar     // Allows to hide the status bar
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import List from './List';
import Movie from './Movie';

const RouteMapper = (route, navigationOperations, onComponentRef) => {
  if (route.name === 'list') {
    return (
      <List navigator={navigationOperations} />
    );
  } else if (route.name === 'movie') {
    return (
      <Movie
        // Pass movie object passed with route down as a prop
        movie={route.movie}
        // Pass navigationOperations as navigator prop
        navigator={navigationOperations}
      />
    );
  }
};

export default class CalenderBody extends Component {
  componentDidMount() {
    // Hide the status bar
    StatusBar.setHidden(true);
  }

  render() {
    return (
      // Handle navigation between screens
      <Navigator
        // Default to list route
        initialRoute={{name: 'list'}}
        // Use FloatFromBottom transition between screens
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottomAndroid}
        // Pass a route mapper functions
        renderScene={RouteMapper}
      />
    );
  }
}
