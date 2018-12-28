import React from 'react'
import { Text, View, Image, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import {getLocalStorage, setLocalStorage, request} from '../../../common/util';
import Entypo from 'react-native-vector-icons/Entypo';
import Goback from '../../../common/Goback';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import globalStyle from '../../../../assets/nativeStyles/global';
import styles from './styles'

export default class UserInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        nickname: "",
        realName: "",
        sexEnum: "",
        birthday: "",
        mobile: "",
      },
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    this.setUser();
  }

  componentDidUpdate() {
    this.setUser();
  }

  setUser=()=> {
    getLocalStorage("user", (res)=>{
      this.setState({
        user: res,
      })
    });
  }

  static navigationOptions =({navigation})=> ({
    title: '个人信息',
    headerTitleStyle: globalStyle.black15,
    headerLeft: <Goback navigation={navigation}/>,
    headerBackTitle: null,
  });

  renderSex() {
    if(this.state.user.sexEnum === 'MALE') {
      return <Text style={globalStyle.black12}>男&nbsp;&nbsp;</Text>
    } else if (this.state.user.sexEnum === 'FEMALE') {
      return <Text style={globalStyle.black12}>女&nbsp;&nbsp;</Text>
    } else {
      return null
    }
  }

  render() {

    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View >
        <View style={styles.eachView}>
          <View style={styles.fontView} ><Text style={globalStyle.gray14}>用户名</Text></View>
          <View style={styles.fontView} ><Text style={globalStyle.black12}>{this.state.user.nickname}</Text></View>
        </View>
        <View style={styles.eachView}>
          <View style={styles.fontView} ><Text style={globalStyle.gray14}>真实姓名</Text></View>
          <View style={styles.fontView} >
            <Text style={globalStyle.black12}>{this.state.user.realname}&nbsp;&nbsp;</Text>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Realname', {
              id: this.state.user.id, realname: this.state.user.realname
            }) }}>
              <Entypo name="chevron-with-circle-right" size={14} color='gray' />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.eachView}>
          <View style={styles.fontView} ><Text style={globalStyle.gray14}>性别</Text></View>
          <View style={styles.fontView} >
            {this.renderSex()}
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Sex',  {
              id: this.state.user.id, sexEnum: this.state.user.sexEnum,
            })}}>
              <Entypo name="chevron-with-circle-right" size={14} color='gray' />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.eachView}>
          <View style={styles.fontView} ><Text style={globalStyle.gray14}>出生年月</Text></View>
          <View style={styles.fontView} >
            <Text style={globalStyle.black12}>{this.state.user.birthday}&nbsp;&nbsp;</Text>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Birthday', {
                id: this.state.user.id, birthday: this.state.user.birthday,
              })}}>
              <Entypo name="chevron-with-circle-right" size={14} color='gray' />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.eachView}>
          <View style={styles.fontView} ><Text style={globalStyle.gray14}>联系方式</Text></View>
          <View style={styles.fontView} ><Text style={globalStyle.black12}>{this.state.user.mobile}</Text></View>
        </View>
      </View>
    );
  }
}
