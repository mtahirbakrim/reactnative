import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import {
  StyleSheet
} from 'react-native';

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text
} from 'native-base';

export default class GoogleAutoPlace extends React.Component {

  render(){
    return(

      <GooglePlacesAutocomplete
      placeholder="Google Places Auto complete..."
      minLength={2}
      autoFocus={false}
      keyboardAppearance={'light'}
      fetchDetails
      listViewDisplayed='auto'
      currentsLocation={true}
      query={{
        key: 'AIzaSyBUMYsM_pPIIreMWcQ0e8LCzHI3Z2NnIPk',
        language: 'id',
        types: '(cities)'
      }}
      nearbyPlacesAPI='GooglePlaceSearch'
      debounce={200}
      />

    )
  }

}
