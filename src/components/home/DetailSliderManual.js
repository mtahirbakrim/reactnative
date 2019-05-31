// @flow

import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
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

import type Moment from 'moment';
import CalenderBody from './detailslidermanual/CalenderBody';

export default class DetailSliderManual extends React.Component {


  render() {
    return (
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
            style={styles.subtitle}>detailslidermanual</Subtitle>
          </Body>
        </Header>
        <StatusBar hidden={true} />
        <CalenderBody />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252526',
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#252526',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
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
});
