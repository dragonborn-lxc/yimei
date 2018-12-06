import React from 'react'
import { Text, View, Image, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import globalStyle from '../../../../assets/nativeStyles/global';


export default class Birthday extends React.Component {
  static navigationOptions = {
    title: '出生年月',
    headerTitleStyle: globalStyle.commonFont,
    headerTintColor: 'gray',
  };
  render() {

    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>生日</Text>
      </View>
    );
  }
}
