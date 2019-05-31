/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
  } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer } from 'react-navigation';

import Login from './src/components/Login';
import Crud from './src/components/Crud';
import Home from './src/components/Home';
import Maps from './src/components/Maps';
import Profil from './src/components/Profil';
import Test from './src/components/Test';
import ReactNative from './src/components/profil/ReactNative';
import Project from './src/components/profil/Project';
import DetailHome from './src/components/home/DetailHome';
import Movies from './src/components/home/Movies';
import DetailSliderManual from './src/components/home/DetailSliderManual';

import Icon from "react-native-vector-icons/FontAwesome";

const TabNav = createBottomTabNavigator(
  {
    Home:{
      screen: Home,
      navigationOptions: () => ({
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <Icon
            name="home"
            color={tintColor}
            size={24}
            />
          )
        })
      },
    Crud:{
      screen: Crud,
      navigationOptions: () => ({
        tabBarLabel: 'Crud',
        tabBarIcon: ({ tintColor }) => (
            <Icon
            name="sign-in"
            color={tintColor}
            size={24}
            />
          )
        })
    },
    Test:{
      screen: () =>null,
      navigationOptions: () => ({
        tabBarLabel: "___",
        tabBarIcon: <Test />
        })
    },
    Maps:{
      screen: Maps,
      navigationOptions: () => ({
        tabBarLabel: 'maps',
        tabBarIcon: ({ tintColor }) => (
            <Icon
            name="map-o"
            color={tintColor}
            size={24}
            />
          )
        })
      },
    Profil:{
      screen: Profil,
      navigationOptions: () => ({
        tabBarLabel: 'Profil',
        tabBarIcon: ({ tintColor }) => (
            <Icon
            name="smile-o"
            color={tintColor}
            size={24}
            />
          )
        })
    },

    }, {
      tabBarOptions: {
        showLabel: true,
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: 'bottom',
        activeTintColor: '#F8F8F8',
        inactiveTintColor: '#252526',
        style: {
          backgroundColor: '#1c313a'
        },
        tabStyle: {}
      }
  }
  );

  const RootNav = createStackNavigator(
    {
      Login:{
        screen:Login,
      },
      Project:{
        screen:Project,
      },
      ReactNative: {
        screen:ReactNative,
      },
      DetailHome: {
        screen:DetailHome,
      },
      Movies: {
        screen:Movies,
      },
      DetailSliderManual: {
        screen:DetailSliderManual,
      },
      TabNav:{
        screen:TabNav,
      },
    },
    {
    headerMode:'none',
    mode:'modal'
    },
  );

  const AppContainer = createAppContainer(RootNav);

class App extends Component<{}> {
  render() {
    return (
      <RootNav/>
      );

  }
}

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252526',
    padding: 20,
  },
});
