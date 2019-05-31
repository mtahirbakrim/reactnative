// @flow

import React, { PureComponent } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import {
  Text,
  Header,
  Button,
  Body,
  Title,
  Subtitle,
} from 'native-base';
import Tags from './crud/Tags';
import NewTagModal from './crud/NewTagModal';

const TAGS = [
  '#1',
  '#2',
  '#3',
  '#4',
  '#5',
  '#6',
  '#7',
  '#8',
  '#9',
  '#10',
  '#11',
  '#12',
  '#13',
  '#14',
  '#15',
  '#16',
  '#17',
  '#18',
  '#19',
  '#20',
  '#21',
  '#22',
  '#23',
  '#24',
  '#25',
  '#26',
  '#27',
  '#28',
  '#29',
  '#30',
];

type State = {
  modalVisible: boolean,
};

export default class Register extends PureComponent {

  constructor() {
      super();

      if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }

  state: State = {
    modalVisible: false,
  };

  // Reference Tags component
  _tagsComponent: ?Tags;

  openModal = (): void => {
    this.setState({ modalVisible: true });
  };

  closeModal = (): void => {
    this.setState({ modalVisible: false });
  };

  onSubmitNewTag = (tag: string) => {
    this._tagsComponent && this._tagsComponent.onSubmitNewTag(tag);
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />

        <NewTagModal
          visible={modalVisible}
          onSubmit={this.onSubmitNewTag}
          onClose={this.closeModal}
        />

        <Header
        style={styles.header}>
          <Subtitle
          style={styles.subtitle}>CRUD</Subtitle>
        </Header>

        <View style={styles.headertext}>
          <Text style={styles.text}>
          Coba Crud Local State React Native dengan flow, dndEnableddrag,onPanResponderMove dan setLayoutAnimationEnabledExperimental(true)
          </Text>
        </View>
        <Tags
          ref={component => this._tagsComponent = component }
          tags={TAGS}
          onPressAddNewTag={this.openModal}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252526',
  },
  headertext: {
    marginVertical: 25,
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
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
