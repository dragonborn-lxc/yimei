import React, {Component} from 'react';
import {Text, View, Dimensions, WebView, StyleSheet} from 'react-native';
import Goback from '../common/Goback';

const Diemnsions = require('Dimensions');
const w = Diemnsions.get('window').width;
const h = Diemnsions.get('window').height;

export default class UrlView extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <Goback navigation={navigation}/>
  });

  render() {
    const {params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <WebView bounces={false}
          scalesPageToFit={true}
          source={{uri: params.url, method: 'GET'}}
          style={styles.page}>
        </WebView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  page: {
    width: w,
    height: h
  }
});
