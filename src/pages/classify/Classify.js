import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
import Art from './Art'

export default class Classify extends Component {
  render() {
    return (
      <ScrollableTabView style={styles.navbar}>
        <View tabLabel='艺术品'>
          <Art/>
        </View>
        <Text tabLabel='衍生品'></Text>
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
