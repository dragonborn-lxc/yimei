import React, {Component} from 'react';
import {Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import SplashScreen from 'react-native-splash-screen';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import DropdownAlert from 'react-native-dropdownalert';
import {DropDownHolder} from '../common/DropDownHolder'

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
      <>
        <AppContainer />
        <DropdownAlert ref={(ref) => DropDownHolder.setDropDown(ref)}/>
      </>

    );
  }
}

const AppNavigator = createBottomTabNavigator({
  home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '首页',
      tabBarIcon: ({focused, tintColor}) => (focused ? <MaterialCommunityIcons name="home" size={30} color={tintColor} style={{marginTop:4}}/>: <MaterialCommunityIcons name="home" size={30} color={tintColor} style={{marginTop:4}}/>)
    })
  },
  classify: {
    screen: Classify,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '分类',
      tabBarIcon: ({focused, tintColor}) => (focused ? <FontAwesome5 name="list-ul" size={23} color={tintColor} style={{marginTop:6}}/>: <FontAwesome5 name="list-ul" size={23} color={tintColor} style={{marginTop:6}}/>)
    })
  },
  subject: {
    screen: Subject,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '专题',
      tabBarIcon: ({focused, tintColor}) => (focused ? <MaterialCommunityIcons name="view-grid" size={25} color={tintColor} style={{marginTop:6}}/>: <Feather name="grid" size={24} color={tintColor} style={{marginTop:5}}/>)
    })
  },
  myself: {
    screen: Myself,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '我的',
      tabBarIcon: ({focused, tintColor}) => (focused ? <FontAwesome name="user" size={25} color={tintColor} style={{marginTop:4}}/>: <FontAwesome name="user" size={25} color={tintColor} style={{marginTop:4}}/>)
    })
  }
},{
  initialRouteName: 'home',
  order: ['home', 'classify', 'subject', 'myself'],
  tabBarOptions: {
    activeTintColor: '#000000',
    inactiveTintColor: '#8D8D8D',
    labelStyle: {
      fontSize: 11,
      marginBottom: 5
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);
