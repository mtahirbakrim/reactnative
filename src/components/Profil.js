import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Animated
} from 'react-native';

import {
  Text,
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Thumbnail,
  ListItem,
  Button,
  Title,
  Header
} from 'native-base';

import Icon from "react-native-vector-icons/FontAwesome";
import {Actions} from 'react-native-router-flux';

class Profil extends React.Component{

state = {
  data: {
    profilpic: require('../images/a.jpg'),
    name: 'Muhammad Tahir',
    position: 'UI / UX Developers',
    address: 'Wonosari Wetan Surabaya',
    summary: "Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet"
  }
}


  render(){

  const {name, position, address, summary, profilpic} = this.state.data
  return(

      <ScrollView>
      <SafeAreaView  style={{flex: 1}}>
        <Container style={styles.container}>
        <View style={styles.profilPic}>
          <Thumbnail
          large
          source={require('../images/a.jpg')}
          />
        </View>
          <Content style={{marginTop: 50}}>
            <Card>
              <CardItem>
                <Body style={styles.bodystyle}>
                  <Text style={styles.nameTitle}>{name}</Text>
                  <Text style={styles.position}>{position}</Text>
                  <Text style={styles.address}>{address}</Text>
                </Body>
              </CardItem>
            </Card>
            <Button
            primary block
            style={styles.buttonProject}
            onPress={() =>
              this.props.navigation.navigate('Project')
            }
            >
            <Text>project</Text>
            </Button>
            <Card>
              <CardItem>
                <Body style={styles.bodystyle}>
                  <Text style={styles.summary}>{summary}</Text>
                </Body>
              </CardItem>
            </Card>
              <Button
              primary block
              style={styles.buttonSocialPhone}>
              <Icon
              name="phone"
              size={24}
              style={styles.iconPhone}
              />
              <Text>Phone</Text>
              </Button>
              <Button
              primary block
              style={styles.buttonSocialGmail}>
              <Icon
              name="google"
              size={24}
              style={styles.iconGmail}
              />
              <Text>Gmail</Text>
              </Button>
              <Button
              primary block
              style={styles.buttonSocialFacebook}>
              <Icon
              name="facebook-official"
              size={24}
              style={styles.iconFacebook}
              />
              <Text>Facebook</Text>
              </Button>
              <Card>
                <CardItem>
                  <Body style={styles.bodystyle}>
                    <Text style={styles.summary}>{summary}</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body style={styles.bodystyle}>
                    <Text>Experiance</Text>
                    <Text style={styles.position}>Location</Text>
                    <Text style={styles.address}>2000-2010</Text>
                  </Body>
                  <Body style={styles.bodystyle}>
                    <Text>Experiance</Text>
                    <Text style={styles.position}>Location</Text>
                    <Text style={styles.address}>2000-2010</Text>
                  </Body>
                </CardItem>
              </Card>
          </Content>
        </Container>
      </SafeAreaView>
      </ScrollView>

      );
  }

}
export default Profil;

const styles = StyleSheet.create({
  container : {

    backgroundColor: '#252526',
  },
  bodystyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  profilPic: {
    paddingTop: 10,
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameTitle: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 20
  },
  position: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3b5998'
  },
  projectheader: {
    padding: 10,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff'
  },
  address: {
    fontSize: 14,
    textAlign: 'center'
  },
  summary: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    paddingTop: 5
  },
  project: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    alignItems: 'center'
  },
  iconFacebook: {
    color: '#3b5998',
  },
  iconGmail: {
    color: '#D44638',
  },
  iconPhone: {
    color: '#1A700D',
  },
  buttonSocialPhone: {
    flex: 1,
    padding: 10,
    backgroundColor: '#252526',
  },
  buttonSocialFacebook: {
    flex: 1,
    padding: 10,
    backgroundColor: '#252526',
  },
  buttonSocialGmail: {
    flex: 1,
    padding: 10,
    backgroundColor: '#252526',
  },
  buttonProject: {
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
})
