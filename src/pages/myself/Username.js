import React from 'react'
import { View, Text, Button } from 'react-native'

import globalStyle from '../../../assets/nativeStyles/global';

export default class Username extends React.Component {
  static navigationOptions = {
    title: '名字',
    headerTitleStyle: globalStyle.commonFont,
    headerTintColor: 'gray',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>名字</Text>
      </View>
    );
  }
}
