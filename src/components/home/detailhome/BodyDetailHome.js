import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Category from './Category';
import CategoryMed from './CategoryMed';

const { height, width } = Dimensions.get('window')

export default class BodyDetailHome extends Component{

  componentWillMount() {
      this.startHeaderHeight = 80
      if (Platform.OS == 'android') {
          this.startHeaderHeight = 100 + StatusBar.currentHeight
      }
  }

  render() {
      return (
          <SafeAreaView style={{ flex: 1, paddingBottom: 25 }}>
              <View style={styles.container}>
                  <ScrollView
                      scrollEventThrottle={64}
                  >
                      <View style={styles.body}>
                          <Text style={styles.maintext}>
                              ScrollView Horizontall true
                          </Text>
                          <Text style={styles.textAll}>
                          Selengkapnya >>
                          </Text>

                          <View style={styles.bodyhorizontall}>

                              <ScrollView
                                  horizontal={true}
                                  showsHorizontalScrollIndicator={true}
                              >
                                  <Category imageUri={require('../../../placeholder.png')}
                                      name="Card Satu"
                                  />
                                  <Category imageUri={require('../../../placeholder.png')}
                                      name="Card Dua"
                                  />
                                  <Category imageUri={require('../../../placeholder.png')}
                                      name="Card Tiga"
                                  />
                                  <Category imageUri={require('../../../placeholder.png')}
                                      name="Card Empat"
                                  />
                                  <Category imageUri={require('../../../placeholder.png')}
                                      name="Card Lima"
                                  />
                                  <Category imageUri={require('../../../placeholder.png')}
                                      name="Card Enam"
                                  />
                                  <Category imageUri={require('../../../placeholder.png')}
                                      name="Card Tujuh"
                                  />
                                  <Category imageUri={require('../../../placeholder.png')}
                                      name="Card Delapan"
                                  />
                                  <Category imageUri={require('../../../placeholder.png')}
                                      name="Card Sembilan"
                                  />
                              </ScrollView>
                          </View>

                          <View style={styles.body}>
                              <Text style={styles.maintext}>
                                  ScrollView Horizontall true Med
                              </Text>
                              <Text style={styles.textAll}>
                              Selengkapnya >>
                              </Text>

                              <View style={styles.bodyhorizontallmed}>
                                  <ScrollView
                                      horizontal={true}
                                      showsHorizontalScrollIndicator={true}
                                  >
                                      <CategoryMed imageUri={require('../../../placeholder.png')}
                                      />
                                      <CategoryMed imageUri={require('../../../placeholder.png')}
                                      />
                                      <CategoryMed imageUri={require('../../../placeholder.png')}
                                      />
                                      <CategoryMed imageUri={require('../../../placeholder.png')}
                                      />
                                      <CategoryMed imageUri={require('../../../placeholder.png')}
                                      />
                                      <CategoryMed imageUri={require('../../../placeholder.png')}
                                      />
                                      <CategoryMed imageUri={require('../../../placeholder.png')}
                                      />
                                      <CategoryMed imageUri={require('../../../placeholder.png')}
                                      />
                                      <CategoryMed imageUri={require('../../../placeholder.png')}
                                      />
                                  </ScrollView>
                              </View>

                          </View>
                          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                              <Text style={{ fontSize: 24, fontWeight: '700', color: 'white'}}>
                                    Lorem Ipsum dolor
                              </Text>
                              <Text style={{ fontWeight: '100', marginTop: 10, color: 'white' }}>
                                  Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet

                              </Text>
                              <View style={{ width: width - 40, height: 200, margin: 8,  backgroundColor: '#252526', }}>
                                  <Image
                                      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                      source={require('../../../placeholder.png')}
                                  />

                              </View>
                          </View>
                      </View>
                  </ScrollView>

              </View>
          </SafeAreaView>
      );
  }
}



const styles = StyleSheet.create(
  {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
      flex: 1,
      backgroundColor: '#252526',
      paddingTop: 20
    },
    maintext: {
      fontSize: 22,
      fontWeight: '700',
      paddingHorizontal: 20,
      color: 'white'
    },
    bodyhorizontall: {
      height: 130,
      marginTop: 20
    },
    bodyhorizontallmed: {
      height: 240,
      marginTop: 10
    },
    textAll: {
      fontSize: 15,
      fontFamily: 'sans-serif',
      marginRight: 25,
      paddingTop: 10,
      color: '#05a5d1',
      textAlign: 'right'
    },
    bodyCard: {
       marginTop: 40,
       paddingHorizontal: 20
    }

});
