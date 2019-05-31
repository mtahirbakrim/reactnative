// @flow

import React, { PureComponent } from 'react';
import {
  Text,
  View
} from 'react-native';
import Tag from './Tag';
import type { TagObject } from './types';

type Props = {
  tags: TagObject[],
  // Called when user taps 'Add new' button
  onPressAddNew: () => void,
  // Passes these two callbacks down to Tag component
  onPress: (tag: TagObject) => void,
  onRenderTag: (tag: TagObject, screenX: number, screenY: number, width: number, height: number) => void,
};

export default class TagsArea extends PureComponent {

  props: Props;

  render() {
    const {
      tags,
      onPress,
      onPressAddNew,
      onRenderTag,
    } = this.props;

    return (
      <View style={styles.container}>

        {tags.map(tag =>
          <Tag
            key={tag.title}
            tag={tag}
            onPress={onPress}
            onRender={onRenderTag}
          />
        )}

        <Text
          style={styles.add}
          onPress={onPressAddNew}
        >
          Tambah Data
        </Text>

      </View
      >
    );
  }

}

const styles = {
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: 'rgba(255,255,255,0.5)',
    borderRadius: 5,
    borderWidth: 2,
    paddingBottom: 10,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  add: {
    backgroundColor: '#1c313a',
    color: '#FFFFFF',
    paddingHorizontal: 5,
    paddingVertical: 5,
    textDecorationLine: 'underline',
    borderRadius: 25,
    marginVertical: 5,
    paddingVertical: 7,
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
  },
};
