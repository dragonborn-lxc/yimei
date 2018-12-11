import React from 'react'
import { Text, View, Image, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import globalStyle from '../../../../assets/nativeStyles/global';
import styles from './styles'

export default class UserInfo extends React.Component {
  static navigationOptions = {
    title: '个人信息',
    headerTitleStyle: globalStyle.commonFont,
    headerTintColor: 'gray',
    headerBackTitle: null,
  };
  render() {

    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View >
        <View style={styles.eachView}>
          <View style={styles.fontView} ><Text style={[globalStyle.commonFont2, styles.font2]}>用户名</Text></View>
          <View style={styles.fontView} ><Text style={[globalStyle.commonFont, styles.font]}>balcksphinx</Text></View>
        </View>

        <View style={styles.eachView}>
          <View style={styles.fontView} ><Text style={[globalStyle.commonFont2, styles.font2]}>真实姓名</Text></View>
          <View style={styles.fontView} >
            <Text style={[globalStyle.commonFont, styles.font]}>暂无&nbsp;&nbsp;
            </Text>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Realname', {
              id: 86, realName: '暂无'
            }) }}>
              <Entypo name="chevron-with-circle-right" size={14} color='gray' />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.eachView}>
          <View style={styles.fontView} ><Text style={[globalStyle.commonFont2, styles.font2]}>性别</Text></View>
          <View style={styles.fontView} >
            <Text style={[globalStyle.commonFont, styles.font]}>高富帅&nbsp;&nbsp;</Text>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Sex',  {
              id: 86, sex: 'MALE',
            })}}>
              <Entypo name="chevron-with-circle-right" size={14} color='gray' />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.eachView}>
          <View style={styles.fontView} ><Text style={[globalStyle.commonFont2, styles.font2]}>出生年月</Text></View>
          <View style={styles.fontView} >
            <Text style={[globalStyle.commonFont, styles.font]}>2013-03-25&nbsp;&nbsp;</Text>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Birthday', {
                id: 86, birthday: '2013-03-25',
              })}}>
              <Entypo name="chevron-with-circle-right" size={14} color='gray' />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.eachView}>
          <View style={styles.fontView} ><Text style={[globalStyle.commonFont2, styles.font2]}>联系方式</Text></View>
          <View style={styles.fontView} >
            <Text style={[globalStyle.commonFont, styles.font]}>13213212312&nbsp;&nbsp;</Text>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Mobile', {
                id: 86, mobile: '13213212312',
              })}}>
              <Entypo name="chevron-with-circle-right" size={14} color='gray' />
            </TouchableOpacity>
          </View>
        </View>


        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      </View>
    );
  }
}

class Username extends React.Component {
  static navigationOptions = {
    title: '名字',
    headerTitleStyle: globalStyle.commonFont,
    headerTintColor: 'gray',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>名字</Text>
      </View>
    );
  }
}
