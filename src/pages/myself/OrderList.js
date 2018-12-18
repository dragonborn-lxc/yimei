import React from 'react'
import { Text, View, Image, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import globalStyle from '../../../assets/nativeStyles/global';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';




export default class OrderList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.navigation.getParam('itemId', 'NO-ID'),
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: '订单列表',
    headerTitleStyle: globalStyle.gray15,
    headerTintColor: 'black',
  });

  render() {


  return (
      <View style={{ flex: 1}}>
        <View>
          <Icon name="wallet-giftcard" size={30} />
          <Text>全部</Text>
        </View>
        <View>
          <Icon name="wallet-membership" size={30} />
          <Text>待付款</Text>
        </View>
        <View>
          <Icon2 name="store-mall-directory" size={30} />
          <Text>待发货</Text>
        </View>
        <View>
          <Icon name="wallet-travel" size={30} />
          <Text>待收货</Text>
        </View>

      </View>
    );
  }
}
