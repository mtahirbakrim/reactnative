import React, { Component } from 'react';
import {
  ImageBackground,              // Renders background image
  ScrollView,         // Scrollable container
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Handles button presses
  View                // Container component
} from 'react-native';

export default class Movie extends Component {

  // Extract movie object passed as a prop from Row component
  render({ movie } = this.props) {
    // Extract values from movie object
    const { title, large, plot } = movie;
    return (
      <View style={styles.container}>
        {/* Background image with large image */}
        <ImageBackground source={{uri: large}} style={styles.imageBackground}>
          {/* Use ScrollView in case plot is too large to fit on the screen */}
          <ScrollView
            style={{flex: 1}}
          >
            {/* Title */}
            <Text style={[styles.text, styles.title]}>{title.toUpperCase()}</Text>
            {/* Rating */}
            <View style={styles.rating}>
              {/* Icon */}
              <ImageBackground
                source={{uri: 'https://staticv2.rottentomatoes.com/static/images/icons/cf-lg.png'}}
                style={styles.icon}
              />


            </View>
            {/* Plot */}
            <View style={styles.plot}>
              <Text style={styles.plotText}>{plot}</Text>
            </View>
          </ScrollView>
          {/* Button container */}
          <View style={styles.buttonContainer}>
            {/* Press handler */}
            <TouchableOpacity
              // Go to the previous screen
              onPress={() => {this.props.navigator.pop();}}
              // Dim button a little bit when pressed
              activeOpacity={0.7}
              // Pass button style
              style={styles.button}
            >
              <Text style={styles.buttonText}>CLOSE</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,                            // Take up all screen space
    backgroundColor: '#333',            // Dark background
  },
  // Background image
  imageBackground: {
    padding: 20,                         // Add padding for content inside
    flex: 1,
  },
  text: {
    backgroundColor: 'transparent',     // No background
    color: '#fff',                      // White text color
    fontFamily: 'Avenir',               // Change default font
    fontWeight: 'bold',                 // Bold font
    // Add text shadow
    textShadowColor: '#222',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
    textAlign: 'center'
  },
  title: {
    fontSize: 22,                       // Bigger font size
    marginTop: 30,                      // Add space between top screen edge
    marginBottom: 5,                    // Add space at the bottom
    textAlign: 'center',                // Center horizontally
  },
  icon: {
    width: 22,                          // Set width
    height: 22,                         // Set height
    marginRight: 5,                     // Add some margin between icon and rating
  },
  plot: {
    backgroundColor: 'rgba(255,255,255,0.9)', // Semi-transparent white background
    borderRadius: 10,                   // Rounder corners
    marginTop: 40,                      // Margin at the top
    padding: 10,                        // Padding for content inside
  },
  plotText: {
    color: '#333',                      // Dark text color
    fontFamily: 'Avenir',               // Change default font
    fontSize: 15,                       // Small font size
  },
  buttonContainer: {
    marginTop: 20,                      // Add some margin at the top
  },
  button: {
    backgroundColor:'#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
      },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,                       // Padding inside
  },
  buttonText: {
    color: '#fff',                      // White button text
    fontFamily: 'Avenir',               // Change default font
    fontWeight: 'bold',                 // Bold font
    textAlign: 'center',                // Center horizontally
  }
});
