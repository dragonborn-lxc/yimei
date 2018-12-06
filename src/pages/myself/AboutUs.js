import React from 'react'
import { View, Text } from 'react-native'

import globalStyle from '../../../assets/nativeStyles/global';

export default class AboutUs extends React.Component {

  static navigationOptions = {
    title: '关于我们',
    headerTitleStyle: globalStyle.commonFont,
  };

  render() {

    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>关于我们</Text>
      </View>
    );
  }
}
