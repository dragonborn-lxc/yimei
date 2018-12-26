import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Text, View, Image, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import {getLocalStorage, setLocalStorage, request} from '../../common/util';
import globalStyle from '../../../assets/nativeStyles/global';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import OrderList from './OrderList';
import OrderDetail from './OrderDetail';
import MyCollect from './MyCollect';
import UserInfo from './userinfo/UserInfo';
import Realname from './userinfo/Realname';
import Sex from './userinfo/Sex';
import Birthday from './userinfo/Birthday';
import Mobile from './userinfo/Mobile';
import Login from './login/Login';
import ForgetPassword from './login/ForgetPassword';
import ResetPassword from './login/ResetPassword';
import Register from './login/Register';
import RuleInfo from './RuleInfo';

import {LOGGED_OUT, LOGGED_IN} from './login/LoginType'

const styles = StyleSheet.create({
  imageWrap: {
    height: 100,
    alignItems: 'center',
    height: 147,
  },
  loginBtn: {
    marginTop: 10,
    marginLeft: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height:22,
    backgroundColor:'black',
    borderRadius: 8
  },
  scoreWrap: {
    height: 108,
  },
  scoreView: {
    marginTop: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 86,
    marginRight: 90,
    height: 40,
  },
  scoreTypeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 80,
    marginRight: 80,
    height: 47,
  },
  touchView :{
    height: 69,
    borderTopWidth: 0.5,
    borderTopColor: 'gray',
  },
  touchContentView: {
    top: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
  },

});


class MySelfHome extends React.Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null,
    gesturesEnabled: false,
    };

  constructor(props) {
    super(props);
    console.info('constructor')
    this.state = {
      user: null,
      loginType: LOGGED_OUT,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentDidUpdate() {
    this.onLogin();
  }

  onLogin=()=> {
    if ( !this.state.user) {
      getLocalStorage("user", (res)=>{
        let loginUser = res;
        let loginStatus = loginUser && loginUser.loginStatus === LOGGED_IN ? LOGGED_IN : LOGGED_OUT;
        loginUser.portal = 'https://facebook.github.io/react-native/docs/assets/favicon.png';
        
        this.setState({
          user: loginUser,
          loginType: loginStatus,
        })
      });

    }
  }

  renderPortal(){
    return(
      <View style={styles.imageWrap}>
      {
        this.state.loginType === LOGGED_IN ?

        <View style={{marginTop: 48}}>

          <Card
            containerStyle={{width: 60, height: 60, borderRadius: 100 }}
            imageStyle={{
              borderRadius: 100,
              width: 60,
              height: 60,
              overflow: 'hidden', // This does the magic
            }}
            image={{ uri: this.state.user.portal}}
          />
        </View>

        :
        <View style={{marginTop: 58}}>
          <EvilIcons name="user" size={90} />
        </View>
      }
      </View>
    )
  }

  renderScore(){
    return (
      <View style={styles.scoreWrap}>
        {
          this.state.loginType === LOGGED_IN ?
          <>
            <View style={styles.scoreView}>
              <View>
                <Text>0</Text>
              </View>
              <View>
                <Text>0</Text>
              </View>
              <View>
                <Text>0</Text>
              </View>
            </View>
            <View style={styles.scoreTypeView}>
              <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('OrderList', {
                      itemId: 86,
                      otherParam: 'anything you want here',
                    });
                  }}>
                <View>
                  <Text style={globalStyle.black15}>订单</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('MyCollect', {
                      itemId: 86,
                      otherParam: 'anything you want here',
                    });
                  }}>
                <View>
                  <Text style={globalStyle.black15}>收藏</Text>
                </View>
              </TouchableOpacity>
              <Text style={globalStyle.black15}>积分</Text>
            </View>
          </>
          :
          <View style={[styles.scoreView, {justifyContent: 'center' }]}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Login')}}>
              <View style={styles.loginBtn}>
                <Text style={globalStyle.white15}>登录</Text>
              </View>
            </TouchableOpacity>
          </View>
        }
      </View>
    )
  }
  render() {
    return (
      <View >
        {
          this.renderPortal()
        }
        {
          this.renderScore()
        }

        {
          this.state.loginType === LOGGED_IN ?
          <View style={styles.touchView}>
            <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('UserInfo', {
                    itemId: 86,
                    otherParam: 'anything you want here',
                  });
                }}>
              <View style={styles.touchContentView} >
                <Text style={globalStyle.black15}>用户信息</Text>
                <Text style={globalStyle.black15}>></Text>
              </View>
            </TouchableOpacity>
          </View>
          :
          <View style={{height: 69,}} />
        }
        <View style={styles.touchView}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('ContactUs')}}>
            <View style={styles.touchContentView} >
              <Text style={globalStyle.black15}>联系客服</Text>
              <Text style={globalStyle.black15}>></Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.touchView, {borderBottomColor: 'gray', borderBottomWidth: 0.5}]}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('AboutUs')}}>
            <View style={styles.touchContentView} >
              <Text style={globalStyle.black15}>关于我们</Text>
              <Text style={globalStyle.black15}>></Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const MySelfNavigator = createStackNavigator(
  {
    MySelfHome: MySelfHome,
    MyCollect: MyCollect,
    OrderList: OrderList,
    OrderDetail: OrderDetail,
    ContactUs: ContactUs,
    AboutUs: AboutUs,
    UserInfo: UserInfo,
    Realname: Realname,
    Sex: Sex,
    Birthday: Birthday,
    Mobile: Mobile,
    Login: Login,
    RuleInfo: RuleInfo,
    ForgetPassword: ForgetPassword,
    ResetPassword: ResetPassword,
    Register: Register,
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
