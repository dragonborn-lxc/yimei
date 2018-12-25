import React from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import globalStyle from '../../../../assets/nativeStyles/global';
import Goback from '../../../common/Goback';
import styles from './styles';
import MyCountTime from './MyCountTime';

const GET_CODE='GET_CODE';
const WAIT_CODE='WAIT_CODE';
export default class ForgetPassword extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mobile: null,
      code: null,
      getCodeType: GET_CODE,
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: '忘记密码',
    headerTitleStyle: globalStyle.black15,
    headerLeft: <Goback navigation={navigation}/> ,
  });

  getCode=()=>{
    this.setState({
      getCodeType: WAIT_CODE
    })

    fetch("https://cnodejs.org/api/v1/topics?page=1&limit=1")
      .then((response) => response.json())
      .then((responseData) => {   // 获取到的数据处理

      })
      .catch((error) => {
        console.log('==> fetch error', error);
        this.setState({ error: error, loading: false, refreshing: false});
      })
      .done();
  }

  verifyCode=()=>{

    fetch("https://cnodejs.org/api/v1/topics?page=1&limit=1")
      .then((response) => response.json())
      .then((responseData) => {   // 获取到的数据处理
        this.props.navigation.navigate('ResetPassword');
      })
      .catch((error) => {
        console.log('==> fetch error', error);
        this.setState({ error: error, loading: false, refreshing: false});
      })
      .done();
  }




  renderCode =()=> {
    return (
      <View style={{marginLeft: 170, marginTop: -20}}>
      {
        this.state.getCodeType === GET_CODE ?
        <TouchableOpacity onPress={this.getCode}>
          <View style={{
              width: 68,
              height: 18,
              color: 'black',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              backgroundColor: 'black',
              marginTop: 10,
            }}>
            <Text style={globalStyle.white10}>获取验证码</Text>
          </View>
        </TouchableOpacity>
        :
        <View style={{marginTop: 10}}>
          <MyCountTime
            ref='myCountTime'
            timeLeft={5} //倒计时的总时间
            width={68}
            height={18}
            color={'#fff'}
            fontSize={10}
            fontWeight={'normal'}
            borderColor={'transparent'}
            borderRadius={4}
            let backgroundColor={'gray'}
            textContent = {'秒再次获取'}
            afterEnd={()=>{
              this.setState({ getCodeType: GET_CODE });
            }}
            />
        </View>
      }
      </View>
    )
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
        <View style={styles.input}>
          <View style={{width: 150}}>
            <TextInput
              onChangeText={(code) => this.setState({code})}
              blurOnSubmit={true}
              maxLength={50}
              clearButtonMode={'while-editing'}
              placeholder={'请获取验证码'}
            />
          </View>
          {
            this.renderCode()
          }
        </View>

        {
          this.state.mobile && this.state.code ?
          <TouchableOpacity onPress={this.verifyCode}>
            <View style={styles.validBtn}>
              <Text style={globalStyle.white12}>下一步</Text>
            </View>
          </TouchableOpacity>
          :
          <View style={styles.invalidBtn}>
            <Text style={globalStyle.white12}>下一步</Text>
          </View>
        }
      </View>

    );
  }
}
