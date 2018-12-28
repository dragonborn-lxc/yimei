import React from 'react'
import { View, Text } from 'react-native'

import globalStyle from '../../../assets/nativeStyles/global';
import {getLocalStorage, setLocalStorage, request} from '../../common/util';
import Goback from '../../common/Goback';


export default class ContactUs extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: '联系客服',
    headerTitleStyle: globalStyle.black15,
    headerLeft: <Goback navigation={navigation}/>,
  });


  render() {
    return (
      <View style={{flex: 1,  alignItems: 'flex-start', marginTop: 70, marginLeft: 22, marginRight: 22}}>
        <Text style={[globalStyle.black12, {lineHeight:22}]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;很抱歉我们给您带来了不便，有任何问题请您拨打我们的客服热线，我们将竭尽所能为您解决困难。</Text>
        <Text style={[globalStyle.black12, { marginTop: 20}, {lineHeight:22}]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;客服热线服务时间： 9:00~18:00</Text>
        <Text style={[globalStyle.black12, { marginTop: 20}, {lineHeight:22}]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;热线电话：61371941</Text>
      </View>

    );
  }
}
