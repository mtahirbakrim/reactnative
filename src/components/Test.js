import React, { Component } from 'react';
import { Animated, TouchableHighlight, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SIZE = 80;

class Test extends React.Component{
  mode = new Animated.Value(0);

  toogleView = () => {
    Animated.timing(this.mode, {
      toValue: this.mode._value === 0 ? 1 : 0,
      duration: 300
    }).start();
  };

  render () {
    const firstX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [20, -40]
    });
    const firstY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -30]
    });
    const secondX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 20]
    });
    const secondY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -55]
    });
    const thirdX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 80]
    });
    const thirdY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -30]
    });

    const opacity = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    const rotation = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg']
    });

    return (
      <View style= {{
        position: 'absolute',
        alignItems: 'center'
      }}>
      <Animated.View style={{
        position: 'absolute',
        left: firstX,
        top: firstY,
        opacity
      }}>
      <TouchableHighlight
      onPress={ () => {
      }}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: SIZE/2,
        height: SIZE/2,
        borderRadius: SIZE/4,
        backgroundColor: '#252526'
      }}
      >
      <Icon name="expand" size={16} color="#F8F8F8"/>
      </TouchableHighlight>
      </Animated.View>

      <Animated.View style={{
        position: 'absolute',
        left: secondX,
        top: secondY,
        opacity
      }}>
      <TouchableHighlight
      onPress={ () => {
      }}
      style={{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: SIZE/2,
        height: SIZE/2,
        borderRadius: SIZE/4,
        backgroundColor: '#252525'
      }}
      >
      <Icon name="expand" size={16} color="#F8F8F8"/>
      </TouchableHighlight>
      </Animated.View>
      <Animated.View style={{
        position: 'absolute',
        left: thirdX,
        top: thirdY,
        opacity
      }}
      >
      <TouchableHighlight
      onPress={ () => {
      }}
      style={{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: SIZE/2,
        height: SIZE/2,
        borderRadius: SIZE/4,
        backgroundColor: '#252525'
      }}
      >
      <Icon name="expand" size={16} color="#F8F8F8"/>
      </TouchableHighlight>
      </Animated.View>

      <TouchableHighlight
      onPress={this.toogleView}
      underlayColor="#252526"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        backgroundColor: '#252526'
      }}
      >
      <Animated.View style={{
        transform: [
          {rotate: rotation}
        ]
      }}>
      <Icon name="plus" size={30} color="#F8F8F8"/>
      </Animated.View>
      </TouchableHighlight>
      </View>
    );
  }
}

export default Test;
