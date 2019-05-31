import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground
} from 'react-native';

const screen = Dimensions.get('window');

export default class Row extends Component {
  render({ movie, onPress } = this.props) {
    const { title, image } = movie;
    return (
      <TouchableOpacity
      style={styles.row}
      onPress={onPress}
      activeOpacity={0.7}
      >
        <ImageBackground source={{uri: image }} style={styles.imageBackground}>
          <Text style={[styles.text, styles.title]}>{title.toUpperCase()}</Text>
          <View style={styles.rating}>
            <ImageBackground
            source={{uri: 'https://staticv2.rottentomatoes.com/static/images/icons/cf-lg.png'}}
            style={styles.icon}
            />

          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  row: {
    paddingBottom: 4,
  },
  imageBackground: {
    height: screen.height / 3,
    margin: 10,
    alignItems: 'center',
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
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 5,
  },
});
