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
  Easing
} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";
import {Actions} from 'react-native-router-flux';
import LottieView from 'lottie-react-native';
import PoweredBy from './login/PoweredBy';
import TypingText from './login/TypingText';



export default class Login extends Component{

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
          toValue: 1,
          duration: 10000
    })
    ).start() ;
    }

  _goToHome(){
    Actions.home();
  }

  render(){

      return(

          <View style={styles.container}>
              <LottieView
              style={{width: 200, height: 200}}
              source={require('../images/robo.json')} progress={this.state.progress}/>
              <TypingText style={styles.logoText}/>
            <KeyboardAvoidingView>
              <TextInput
              style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Username"
              autoCapitalized='none'
              autoCorrect={false}
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
              <TextInput
              style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Password"
              autoCapitalized='none'
              placeholderTextColor = "#ffffff"
              autoCorrect={false}
              secureTextEntry={true}
              />
              <TouchableOpacity
              style={styles.button}
               onPress={()=>this.props.navigation.navigate('TabNav')}>
              <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
            <PoweredBy />
          </View>

      );
  }


}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#252526',
  },
  logoText : {
  marginVertical: 15,
  fontSize:18,
  color:'rgba(255, 255, 255, 0.7)'
  },
  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10,
    textAlign:'center',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    shadowColor: "#808080",
      shadowOffset: {
      width: 0,
      height: 2,
      },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    width:300,
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
    elevation: 5,
  },
  buttonText: {
    fontSize:20,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
});
