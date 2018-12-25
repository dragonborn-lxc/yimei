import React from 'react'
import { View, Text, Button } from 'react-native'

import globalStyle from '../../../assets/nativeStyles/global';
import Goback from '../../common/Goback';

export default class RuleInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  test() {
    if (navigation.getItem('type') === '0') {
      return '用户协议';
    } else {
      return '隐私条款';
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: '用户协议',
    headerTitleStyle: globalStyle.black15,
    headerLeft: <Goback navigation={navigation}/> ,
  });

  render() {
    if (this.props.navigation.getItem('type') === '0') {
      renderSecurity();
    } else {
      renderRule();
    }
  }

  renderSecurity() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>我是用户协议</Text>
      </View>
    )
  }

  renderRule() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>我是隐私条款</Text>
      </View>
    )
  }
}
