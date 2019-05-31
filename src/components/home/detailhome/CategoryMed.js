import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";

const { height, width } = Dimensions.get('window')

class CategoryMed extends Component {
    render() {
        return (
          <View style={{ width: width - 48, height: 240, paddingTop: 5, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
              <View style={{ flex: 1 }}>
                  <Image source={this.props.imageUri}
                      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', margin: 5 }}
                  />
              </View>
          </View>
        );
    }
}
export default CategoryMed;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
