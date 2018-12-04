import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
import Recommend from './Recommend'

export default class Home extends Component {
  render() {
    return (
      <ScrollableTabView style={styles.navbar}>
        <View tabLabel='推荐'>
          <Recommend/>
        </View>
        <Text tabLabel='艺术家'>favorite</Text>
        <Text tabLabel='品牌'>project</Text>
        <Text tabLabel='关注'>favorite</Text>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: '#FFFFFF'
  }
});
