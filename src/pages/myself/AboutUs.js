import React from 'react'
import { View, Text } from 'react-native'

export default class AboutUs extends React.Component {

  componentDidMount (){
    console.info("123");
  }

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
