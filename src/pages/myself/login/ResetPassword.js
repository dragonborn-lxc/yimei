import React from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import globalStyle from '../../../../assets/nativeStyles/global';
import Goback from '../../../common/Goback';
import styles from './styles';

import {LOGGED_IN} from './LoginType';

export default class ResetPassword extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mobile: this.props.navigation.getParam('mobile'),
      password: null,
      confirmPassword: null,
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: '重置密码',
    headerTitleStyle: globalStyle.black15,
    headerLeft: <Goback navigation={navigation}/> ,
  });

  resetPassword=()=>{
    fetch("https://cnodejs.org/api/v1/topics?page=1&limit=1")
      .then((response) => response.json())
      .then((responseData) => {   // 获取到的数据处理

        let fakeUser = {
          id: 1,
          mobile: '13816978323',
          nickname: 'poha',
          token: 'test-token',
          portal: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
          loginStatus: LOGGED_IN
        }
        console.info('resetPassword', this.props.navigation);
        this.props.navigation.navigate('MySelfHome', {user: fakeUser});
      })
      .catch((error) => {
        console.log('==> fetch error', error);
        this.setState({ error: error, loading: false, refreshing: false});
      })
      .done();
  }

  render() {
    return (
      <View style={styles.inputWrap}>
        <TextInput style={styles.input}
          onChangeText={(password) => this.setState({password})}
          blurOnSubmit={true}
          maxLength={50}
          clearButtonMode={'while-editing'}
          placeholder={'请输入密码'}
        />
        <View style={styles.input}>
          <TextInput
            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
            blurOnSubmit={true}
            maxLength={50}
            clearButtonMode={'while-editing'}
            secureTextEntry={true}
            placeholder={'请确认密码'}
          />
        </View>
        {
          this.state.password && this.state.confirmPassword && this.state.password === this.state.confirmPassword ?
          <TouchableOpacity onPress={this.resetPassword}>
            <View style={styles.validBtn}>
              <Text style={globalStyle.white12}>重置密码</Text>
            </View>
          </TouchableOpacity>
          :
          <View style={styles.invalidBtn}>
            <Text style={globalStyle.white12}>重置密码</Text>
          </View>
        }
      </View>

    );
  }
}
