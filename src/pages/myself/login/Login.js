import React from 'react'
import { Text, View, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';
import globalStyle from '../../../../assets/nativeStyles/global';
import {getLocalStorage, setLocalStorage, request} from '../../../common/util';
import Goback from '../../../common/Goback';
import styles from './styles';

import {LOGGED_OUT, LOGGED_IN} from './LoginType';

export default class Mobile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mobile: null,
      password: null,
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: '登录',
    headerTitleStyle: globalStyle.black15,
    headerLeft: <Goback navigation={navigation}/> ,
    headerRight: (
      <View style={{justifyContent:'center', marginRight: 10,}}>
        <TouchableOpacity onPress={()=>{ navigation.navigate('Register') }} >
            <View>
              <Text style={globalStyle.gray14}>注册</Text>
            </View>
        </TouchableOpacity>
      </View>
  )
  });

  login=()=>{
    request("/app/auth/open/login?mobile=" + this.state.mobile + "&password="+this.state.password,
     (responseData)=>{
      let user = responseData.result;
      user.loginStatus = 'LOGGED_IN';
      setLocalStorage("user", user);
      this.props.navigation.navigate('MySelfHome', {});
    }, 'POST');
  }

  render() {
    return (
      <View style={styles.inputWrap}>
        <TextInput style={styles.input}
          onChangeText={(mobile) => this.setState({mobile})}
          blurOnSubmit={true}
          maxLength={50}
          clearButtonMode={'while-editing'}
          placeholder={'请输入手机号'}
        />
        <TextInput style={styles.input}
          onChangeText={(password) => this.setState({password})}
          blurOnSubmit={true}
          maxLength={50}
          clearButtonMode={'while-editing'}
          secureTextEntry={true}
          placeholder={'请输入密码'}
        />
        {
          this.state.mobile && this.state.password ?
          <TouchableOpacity onPress={this.login}>
            <View style={styles.validBtn}>
              <Text style={globalStyle.white12}>登 录</Text>
            </View>
          </TouchableOpacity>
          :
          <View style={styles.invalidBtn}>
            <Text style={globalStyle.white12}>登 录</Text>
          </View>
        }

        <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgetPassword')}>
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10, marginLeft: 10}}>
              <Text style={globalStyle.gray10}>忘记密码？</Text>
            </View>
        </TouchableOpacity>
      </View>



    );
  }
}
