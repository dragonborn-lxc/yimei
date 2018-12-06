import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Text, View, Image, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

import UserInfo from './UserInfo';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import OrderList from './OrderList';
import MyCollect from './MyCollect';


const styles = StyleSheet.create({
  imageView: {
    marginTop: 68,
    height: 110,
  },
  image: {
    width: 60,
    height: 60,
    left: 155,
  },
  scoreView: {
    flexDirection: 'row',
    backgroundColor: 'steelblue',
    marginLeft: 40,
    height: 35
  },
  scoreText: {

  },
  scoreTypeView: {
    flexDirection: 'row',
    backgroundColor: 'skyblue',
    marginLeft: 40,
    height: 48
  },
  scoreType: {

  },
  touchView :{
    height: 68,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  touchContentView: {
    top: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,

  },
  touchContentText: {
    fontSize: 30
  }

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
          <Text style={styles.scoreText} >0</Text>
          <Text>0</Text>
          <Text>0</Text>
        </View>
        <View style={styles.scoreTypeView}>
          <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('OrderList', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                });
              }}>
            <View>
              <Text >订单</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('MyCollect', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                });
              }}>
            <View>
              <Text >收藏</Text>
            </View>
          </TouchableOpacity>
          <Text>积分</Text>
        </View>
        <View style={styles.touchView}>
          <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('UserInfo', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                });
              }}>
            <View style={styles.touchContentView} >
              <Text style={styles.touchContentText}>用户信息</Text>
              <Text style={styles.touchContentText}>></Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.touchView}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('ContactUs')}}>
            <View style={styles.touchContentView} >
              <Text style={styles.touchContentText}>联系客服</Text>
              <Text style={styles.touchContentText}>></Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.touchView, {borderBottomWidth: 1,
        borderBottomColor: 'gray',}]}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('AboutUs')}}>
            <View style={styles.touchContentView} >
              <Text style={styles.touchContentText}>关于我们</Text>
              <Text style={styles.touchContentText}>></Text>
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
        headerTintColor: {
          color: 'red'
        }
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
