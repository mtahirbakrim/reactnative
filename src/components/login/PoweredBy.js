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

import LottieView from 'lottie-react-native';

export default class Register extends Component{

  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
    }

    componentDidMount() {
    this.bootAnimation();
    }
    bootAnimation() {
      this.animation = Animated.loop(
        Animated.timing(this.state.progress,{
          toValue: 2,
          delay: 2000,
          duration: 8000
    })
    ).start() ;
    }


  render(){

      return(
        <View style={styles.container}>
          <LottieView style={{width: 50, height: 50}}
          source={require('../../images/powered.json')} progress={this.state.progress}/>
          <Subtitle
          style={styles.subtitle}>powered by</Subtitle>
        </View>
      );
  }
}


const styles = StyleSheet.create({
  container: {
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
  }
});
