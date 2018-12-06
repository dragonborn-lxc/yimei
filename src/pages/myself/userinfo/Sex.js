import React from 'react'
import { Text, View, Image, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import globalStyle from '../../../../assets/nativeStyles/global';


export default class Sex extends React.Component {
  static navigationOptions = {
    title: '性别',
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
        <Text>用户名称</Text>
      </View>
    );
  }
}
