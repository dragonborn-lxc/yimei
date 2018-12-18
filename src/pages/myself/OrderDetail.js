import React from 'react'
import { Text, View, Image, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import globalStyle from '../../../assets/nativeStyles/global';

export default class OrderDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.navigation.getParam('itemId', 'NO-ID'),
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: '订单详情',
    headerTitleStyle: globalStyle.commonFont2,
    headerTintColor: 'gray',
  });

  render() {


  return (
      <View style={{ flex: 1}}>

      </View>
    );
  }
}
