import React,{Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  Animated,
  Easing,
  ScrollView
} from 'react-native';
import {
  Header,
  Left,
  Body,
  Right,
  Title,
  Subtitle,
  Container
} from 'native-base';

import Icon from "react-native-vector-icons/FontAwesome";
import { movies } from './detailscrollview/data';
import MoviePoster from './detailscrollview/MoviePoster';
import MoviePopup from './detailscrollview/MoviePopup';
import Option from './detailscrollview/Option';
import Options from './detailscrollview/Options';

export default class DetailFlexBox extends Component{

  state =
  {
    popupIsOpen: false,

    chosenDay: 0,

    chosenTime: null,
  }

openMovie = (movie) => {
  this.setState({
    popupIsOpen: true,
    movie,
  });
}

closeMovie = () => {
  this.setState({
    popupIsOpen: false,

    chosenDay: 0,
    chosenTime: null,
  });
}

chooseDay = (day) => {
  this.setState({
    chosenDay: day,
  });
}

chooseTime = (time) => {
  this.setState({
    chosenTime: time,
  });
}

  render(){

      return(
        <View style={styles.container}>
          <Header
          style={styles.header}>
            <TouchableOpacity
            style={{ flex: 1 }}
            onPress={()=>this.props.navigation.navigate('Home')}>
             <Icon
             name="arrow-left"
             size= {25}
             color= "#05a5d1"
             />
            </TouchableOpacity>
            <Body
            style={styles.body}>
              <Subtitle
              style={styles.subtitle}>DetailFlexBox</Subtitle>
            </Body>
          </Header>

          <Text
          style={styles.text}>DetailFlexBox</Text>

          <Body
          style={styles.body}>
            <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
            >
              {movies.map((movie, index) => <MoviePoster
                movie={movie}
                onOpen={this.openMovie}
                key={index}
                />)}
            </ScrollView>
            <MoviePopup
            movie={this.state.movie}
            isOpen={this.state.popupIsOpen}
            onClose={this.closeMovie}
            chosenDay={this.state.chosenDay}
            chosenTime={this.state.chosenTime}
            onChooseDay={this.chooseDay}
            onChooseTime={this.chooseTime}
            />
          </Body>
        </View>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#252526',
  },
  header: {
    backgroundColor: '#252526',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  subtitle: {
    fontFamily: 'sans-serif',
    fontStyle: 'italic',
    color: '#05a5d1',
  },
  body : {
    backgroundColor: '#252526',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowOffset: {width: -5, height: 5},
    textShadowRadius: 10,
    textAlign: 'center',
    margin: 20
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap',       // allow multiple rows
  }
});
