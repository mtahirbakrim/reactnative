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
    Dimensions,
    ActivityIndicator,
    FlatList
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

  class Project extends Component
  {
    constructor()
    {
      super();
    }

    render()
    {
      return(
        <View style = { styles.imageHolder }>
          <Image source = {{ uri: this.props.imageURI }} style = { styles.image }/>
          <View style = { styles.textViewHolder }>
            <Text numberOfLines = { 1 } style = { styles.textOnImage }>
              { this.props.name }
            </Text>
          </View>
        </View>
      );
    }
  }

  export default class App extends Component
  {
      constructor()
      {
          super();
          this.state = { imagesData: null, loading: true, gridView: false, btnText: 'Show Grid' }
      }

      componentDidMount()
      {
          fetch('http://www.gunakaryapembangunan.com/AdminGKP/fetch.php')
           .then((response) => response.json())
           .then((responseJson) =>
           {
             this.setState({ imagesData: responseJson, loading: false });
           })
           .catch((error) =>
           {
             console.error(error);
           });
      }

      changeView = () =>
      {
        this.setState({ gridView: !this.state.gridView }, () =>
        {
            if(this.state.gridView)
            {
              this.setState({ btnText: 'Show List' });
            }
            else
            {
              this.setState({ btnText: 'Show Grid' });
            }
        });
      }


      render()
      {
          return(
            <View
            style = { styles.container }>

            <Header
            style={styles.header}>
              <TouchableOpacity
              style={{ flex: 1 }}
              onPress={()=>this.props.navigation.navigate('Profil')}>
                <Icon
                name="arrow-left"
                size= {25}
                color= "#05a5d1"
                />
             </TouchableOpacity>
             <Body
             style={styles.body}>
              <Subtitle
              style={styles.subtitle}>project</Subtitle>
             </Body>

            </Header>

            {
              (this.state.loading)
              ?
                  (<View style = { styles.loadingContainer }>
                      <ActivityIndicator size = "large" />
                      <Text style = { styles.loadingText }>Please Wait...</Text>
                  </View>)
              :

              (<View style = {{ flex: 1 }}>
                <TouchableOpacity activeOpacity = { 0.8 } style = { styles.Btn } onPress = { this.changeView }>
                  <Text style = { styles.btnText }>{ this.state.btnText }</Text>
                </TouchableOpacity>
                <FlatList keyExtractor = {(item) => item.id} key = {( this.state.gridView ) ? 1 : 0 } numColumns = { this.state.gridView ? 2 : 1 } data = { this.state.imagesData } renderItem = {({ item }) =>
                    <Project imageURI = { item.file_path } name = { item.name.toUpperCase() } />
                  }/>
                  <Button
                  danger
                  block
                  style={styles.Btn}
                  onPress={() =>
                    this.props.navigation.navigate('ReactNative')
                  }
                  title="selengkapnya"
                  />
              </View>)
            }

            </View>

          );
      }
  }

  const styles = StyleSheet.create(
  {
    container:
    {
      flex: 1,
      paddingTop: (Platform.OS === 'android') ? 20 : 0,
      backgroundColor: '#252526',
    },

    imageHolder:
    {
      margin: 5,
      height: 160,
      flex: 1,
      position: 'relative'
    },

    image:
    {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
      paddingTop: 40,
      paddingBottom: 40
    },

    textViewHolder:
    {
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.75)',
      paddingHorizontal: 10,
      paddingVertical: 13,
      alignItems: 'center'
    },

    textOnImage:
    {
      color: 'white'
    },

    loadingContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    loadingText:
    {
      paddingTop: 10,
      fontSize: 18,
      fontFamily: 'sans-serif',
      fontStyle: 'italic',
      color: '#05a5d1'
    },

    Btn:
    {
      padding: 15,
      backgroundColor: '#252526'
    },

    btnText:
    {
      color: 'white',
      textAlign: 'center',
      alignSelf: 'stretch'
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
    buttonProject: {
      flex: 1,
      padding: 10,
      backgroundColor: '#252526',
    }
  });
