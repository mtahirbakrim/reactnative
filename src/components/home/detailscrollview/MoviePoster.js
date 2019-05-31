import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';

// Get screen dimensions
const { width, height } = Dimensions.get('window');
// How many posters we want to have in each row and column
const cols = 3, rows = 3;

export default class MoviePoster extends Component {
  // Component prop types
  static propTypes = {
    // Movie object with title, genre, and poster
    movie: PropTypes.object.isRequired,
    // Called when user taps on a poster
    onOpen: PropTypes.func.isRequired,
  }
  render() {
    const { movie, movie: { title, genre, poster }, onOpen } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => onOpen(movie)}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: poster }} style={styles.image} />
        </View>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.genre} numberOfLines={1}>{genre}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20 - 20) / rows - 10,
    width: (width - 10) / cols - 10,
  },
  imageContainer: {
    flex: 1,                          // take up all available space
  },
  image: {
    borderRadius: 10,                 // rounded corners
    ...StyleSheet.absoluteFillObject, // fill up all space in a container
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowOffset: {width: -5, height: 5},
    textShadowRadius: 10,
    margin: 5,
    textAlign: 'center'
  },
  genre: {
    fontFamily: 'sans-serif',
    fontStyle: 'italic',
    color: '#05a5d1',
    textAlign: 'center'
  },
});
