    import React,{Component} from 'react';
    import {
      View,
      StyleSheet,
      TouchableOpacity,
      ScrollView,
      TouchableHighlight,
      SafeAreaView,
      Navigator
    } from 'react-native';
    import {
      Text,
      Header,
      Button,
      Body,
      Title,
      Subtitle,
    } from 'native-base';
    import Swiper from 'react-native-swiper';

    export default class Home extends Component {
      render () {
        return (

          <ScrollView  style={styles.container}>
            <SafeAreaView  style={{ flex: 1, marginBottom: 25 }}>
              <View>

              <Header
              style={styles.header}>
                <Subtitle
                style={styles.subtitle}>home</Subtitle>
              </Header>

              <Text
              style={styles.title}>Slider AutoPlay</Text>

              <Swiper
              height={200}
              vertical={false}
              autoplay
              >
                <View style={styles.slide}>
                  <Text style={styles.texttwo}>SLIDE</Text>
                  <Text style={styles.text}>SATU</Text>
                </View>
                <View style={styles.slide}>
                  <Text style={styles.text}>SLIDE</Text>
                  <Text style={styles.texttwo}>DUA</Text>
                </View>
                <View style={styles.slide}>
                  <Text style={styles.texttwo}>SLIDE</Text>
                  <Text style={styles.text}>TIGA</Text>
                </View>
              </Swiper>

              <Button
              block
              style={styles.Btn}
              onPress={() =>
                this.props.navigation.navigate('DetailHome')}
                >
                <Text>Detail Slide</Text>
              </Button>

              <Text
              style={styles.title}>SliderHorizontal</Text>

              <Swiper
              height={200}
              direction={"row"}
              loop
              autoplayTimeout={-2.5}
              overRangeButtonsOpacity={0.3}
              >
                <View style={styles.slide}>
                  <Text style={styles.text}>SLIDE</Text>
                  <Text style={styles.texttwo}>SATU</Text>
                </View>
                <View style={styles.slide}>
                  <Text style={styles.texttwo}>SLIDE</Text>
                  <Text style={styles.text}>DUA</Text>
                </View>
                <View style={styles.slide}>
                  <Text style={styles.text}>SLIDE</Text>
                  <Text style={styles.texttwo}>TIGA</Text>
                </View>
              </Swiper>

              <Button block
              style={styles.Btn}
              onPress={() =>
                this.props.navigation.navigate('Movies')}
                >
                <Text>Detail Slider Manual</Text>
              </Button>

              <Text
              style={styles.title}>Slider Manual</Text>

              <Swiper
              height={200}
              horizontal={true}
              autoplay={false}
              showsButtons={true}
              >
                <View style={styles.slide}>
                  <Text style={styles.texttwo}>SLIDE</Text>
                  <Text style={styles.text}>SATU</Text>
                </View>
                <View style={styles.slide}>
                  <Text style={styles.text}>SLIDE</Text>
                  <Text style={styles.texttwo}>DUA</Text>
                </View>
                <View style={styles.slide}>
                  <Text style={styles.texttwo}>SLIDE</Text>
                  <Text style={styles.text}>TIGA</Text>
                </View>
              </Swiper>

              <Button block
              style={styles.Btn}
              onPress={() =>
                this.props.navigation.navigate('DetailSliderManual')}
                >
                <Text>Detail Slider Manual</Text>
              </Button>

              </View>
            </SafeAreaView>
          </ScrollView>
        )
      }
    }

    const styles = StyleSheet.create(
    {
      container: {
        flex: 1,
        backgroundColor: '#252526',
      },
      slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#252526',

      },
      text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textShadowColor: '#000000',
        textShadowOffset: {width: -5, height: 5},
        textShadowRadius: 10
      },
      texttwo: {
        color: 'orange',
        fontSize: 30,
        fontWeight: 'bold',
        textShadowColor: '#000000',
        textShadowOffset: {width: -5, height: 5},
        textShadowRadius: 10
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
      title: {
        fontSize: 15,
        fontFamily: 'sans-serif',
        color: '#05a5d1',
        margin: 10,
      },
      bodyScroll: {
        resizeMode: 'cover',
        height: 380,
      },
      body : {
        backgroundColor: '#252526',
        justifyContent: 'center',
        alignItems: 'center'
      },
      Btn: {
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
      }
    });
