import React, {Component} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import SplashScreen from 'react-native-splash-screen';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import Home from './home/Home';
import Subject from './subject/Subject';
import Classify from './classify/Classify';
import Myself from './myself/Myself';

type Props = {};

export default class App extends Component<Props> {
  async componentWillMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <AppContainer/>
    );
  }
}

const AppNavigator = createBottomTabNavigator({
  home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '首页',
      tabBarIcon: ({focused, tintColor}) => (focused ? <MaterialCommunityIcons name="home" size={20}/>: <MaterialCommunityIcons name="home-outline" size={20}/>)
    })
  },
  classify: {
    screen: Classify,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '分类',
      tabBarIcon: ({focused, tintColor}) => (focused ? <FontAwesome5 name="list-ul" size={20}/>: <FontAwesome5 name="list-alt" size={20}/>)
    })
  },
  subject: {
    screen: Subject,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '专题',
      tabBarIcon: ({focused, tintColor}) => (focused ? <MaterialCommunityIcons name="view-grid" size={20}/>: <Feather name="grid" size={20}/>)
    })
  },
  myself: {
    screen: Myself,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '我的',
      tabBarIcon: ({focused, tintColor}) => (focused ? <FontAwesome name="user" size={20}/>: <FontAwesome name="user-o" size={20}/>)
    })
  }
},{
  initialRouteName: 'home',
  order: ['home', 'classify', 'subject', 'myself'],
  tabBarOptions: {
    labelStyle: {
      fontSize: 12
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);
