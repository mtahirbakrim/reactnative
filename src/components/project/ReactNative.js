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
  ScrollView,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import {
  Header,
  Left,
  Body,
  Right,
  Title,
  Subtitle,
  Container,
  Card,
  CardItem,
  Thumbnail
} from 'native-base';

import Icon from "react-native-vector-icons/FontAwesome";

const deviceWidth = Dimensions.get('window').width
const FIXED_BAR_WIDTH = 480
const BAR_SPACE = 5

const images = [
  'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png',
  'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png',
]

export default class ReactNative extends Component{

  numItems = images.length
  itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
  animVal = new Animated.Value(0)


    render(){

      let imageArray = []
      let barArray = []
      images.forEach((image, i) => {
        console.log(image, i)
        const thisImage = (
       <Image
         key={`image${i}`}
         source={{uri: image}}
         style={{ width: deviceWidth }}
       />
     )
     imageArray.push(thisImage)

     const scrollBarVal = this.animVal.interpolate({
       inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
       outputRange: [-this.itemWidth, this.itemWidth],
       extrapolate: 'clamp',
     })

     const thisBar = (
       <View
         key={`bar${i}`}
         style={[
           styles.track,
           {
             width: this.itemWidth,
             marginLeft: i === 0 ? 0 : BAR_SPACE,
           },
         ]}
       >
         <Animated.View

           style={[
             styles.bar,
             {
               width: this.itemWidth,
               transform: [
                 { translateX: scrollBarVal },
               ],
             },
           ]}
         />
       </View>
     )
     barArray.push(thisBar)
   })


      return(
        <View style={styles.container}>
          <Header
          style={styles.header}>
          <TouchableOpacity
          style={{ flex: 1 }}
          onPress={()=>this.props.navigation.navigate('Project')}>
           <Icon
           name="arrow-left"
           size= {25}
           color= "#05a5d1"
           />
          </TouchableOpacity>
          <Body
          style={styles.body}>
          <Subtitle
          style={styles.subtitle}>detail project</Subtitle>
          </Body>
          </Header>
          <Body
          style={styles.body}>

          <View style={styles.container}>
            <Body
            style={styles.body}>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={10}
            pagingEnabled
            onScroll={
            Animated.event(
            [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
            )
            }
            >

            {imageArray}

            </ScrollView>
            <View
            style={styles.barContainer}
            >
            {barArray}
            </View>
          </Body>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  body : {
    backgroundColor: '#252526',
    justifyContent: 'center',
    alignItems: 'center'
  },
  barContainer: {
  position: 'absolute',
  zIndex: 2,
  top: 40,
  flexDirection: 'row',
},
track: {
  backgroundColor: '#ccc',
  overflow: 'hidden',
  height: 2,
},
bar: {
  backgroundColor: '#05a5d1',
  height: 2,
  position: 'absolute',
  left: 0,
  top: 0,
},
});
