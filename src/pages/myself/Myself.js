import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Text, View, Image, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';


import globalStyle from '../../../assets/nativeStyles/global';
import UserInfo from './UserInfo';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import OrderList from './OrderList';
import MyCollect from './MyCollect';



const styles = StyleSheet.create({
  imageView: {
    marginTop: 66,
    height: 100,
  },
  image: {
    width: 60,
    height: 60,
    left: 155,
  },
  scoreView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 86,
    marginRight: 90,
    height: 40
  },
  scoreText: {
    fontSize: 20,
  },
  scoreTypeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 80,
    marginRight: 80,
    height: 48,

  },
  scoreType: {

  },
  touchView :{
    height: 68,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  touchContentView: {
    top: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,


  },

});

class MySelfHome extends React.Component {
  static navigationOptions = {
    header: null,

    };
  render() {
    return (
      <View >
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
        </View>
        <View style={styles.scoreView}>
          <View>
            <Text>0</Text>
          </View>
          <View>
            <Text >0</Text>
          </View>
          <View>
            <Text >0</Text>
          </View>
        </View>
        <View style={styles.scoreTypeView}>
          <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('OrderList', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                });
              }}>
            <View>
              <Text style={globalStyle.commonFont}>订单</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('MyCollect', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                });
              }}>
            <View>
              <Text style={globalStyle.commonFont}>收藏</Text>
            </View>
          </TouchableOpacity>
          <Text style={globalStyle.commonFont}>积分</Text>
        </View>
        <View style={styles.touchView}>
          <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('UserInfo', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                });
              }}>
            <View style={styles.touchContentView} >
              <Text style={globalStyle.commonFont}>用户信息</Text>
              <Text style={globalStyle.commonFont}>></Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.touchView}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('ContactUs')}}>
            <View style={styles.touchContentView} >
              <Text style={globalStyle.commonFont}>联系客服</Text>
              <Text style={globalStyle.commonFont}>></Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.touchView, {borderBottomWidth: 1,
        borderBottomColor: 'gray',}]}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('AboutUs')}}>
            <View style={styles.touchContentView} >
              <Text style={globalStyle.commonFont}>关于我们</Text>
              <Text style={globalStyle.commonFont}>></Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const MySelfNavigator = createStackNavigator(
  {
    MySelfHome: {
      screen: MySelfHome,
      navigationOptions: () => ({
        title: `A`,
        headerBackTitle: null
      }),

    },
    MyCollect: {
      screen: MyCollect,
      navigationOptions: () => ({
        title: `A`,
        headerBackTitle: null
      }),

    },
    OrderList: {
      screen: OrderList,
      navigationOptions: () => ({
        title: `A`,
        headerBackTitle: null
      }),

    },
    UserInfo: {
      screen: UserInfo,
      navigationOptions: () => ({
        title: `A`,
        headerBackTitle: null
      }),

    },
    ContactUs: {
      screen: ContactUs,
      navigationOptions: () => ({
        title: `联系我们`,
        headerBackTitle: null
      }),

    },
    AboutUs: {
      screen: AboutUs,
      navigationOptions: () => ({
        title: '关于我们',

      }),
    },

  },
  {
    initialRouteName: 'MySelfHome',
  }
);


export default class Myself extends React.Component {
  static router = MySelfNavigator.router;

  render() {
    return (
      <MySelfNavigator navigation={this.props.navigation} />
    );
  }
}
