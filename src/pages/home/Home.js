import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
import Recommend from './Recommend'

export default class Home extends Component {
  render() {
    return (
      <ScrollableTabView style={styles.navbar} tabBarActiveTextColor='#020202' tabBarInactiveTextColor='#938D8C'>
        <View tabLabel='推荐'>
          <Recommend/>
        </View>
        <Text tabLabel='资讯'></Text>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
});
