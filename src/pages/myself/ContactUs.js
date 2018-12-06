import React from 'react'
import { View, Text, Button } from 'react-native'

import globalStyle from '../../../assets/nativeStyles/global';

export default class ContactUs extends React.Component {
  static navigationOptions = {
    title: '联系我们',
    headerTitleStyle: globalStyle.commonFont,
    headerTintColor: 'gray',
  };



  componentDidMount() {
    console.info();
  }
  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>联系我们</Text>
      </View>
    );
  }
}
