import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
import Recommend from './Recommend';
import News from './News';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../../assets/images/home_title.png')}/>
        <ScrollableTabView style={styles.navbar} tabBarActiveTextColor='#020202' tabBarInactiveTextColor='#938D8C' tabBarTextStyle={styles.label} tabBarUnderlineStyle={styles.underline}>
          <View tabLabel='推荐'>
            <Recommend/>
          </View>
          <View tabLabel='资讯'>
            <News/>
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    marginTop: 18,
    height: 42,
    width: 76
  },
  navbar: {
    flex: 1,
    marginTop: -25
  },
  label: {
    marginTop: 22,
    fontWeight: '300'
  },
  underline: {
    height: 1,
    backgroundColor: '#020202'
  }
});
