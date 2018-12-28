import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import globalStyle from '../../../../assets/nativeStyles/global';
import {getLocalStorage, setLocalStorage, request} from '../../../common/util';
import styles from './styles';

export default class FinishedBtn extends React.Component {
  constructor (props) {
    super(props);
  }


  saveAndGoback = () => {
    request("/app/user/open/merge",
     (responseData)=>{
      let user = responseData.result;
      user.loginStatus = 'LOGGED_IN';
      setLocalStorage("user", user);
      this.props.navigation.navigate('UserInfo', {});
    }, 'POST', {'Content-Type': 'application/json'}, this.props.navigation.getParam("user"));

  }

  render() {
    return (
      <View style={{justifyContent:'center', marginRight: 10,}}>
        <TouchableOpacity onPress={this.saveAndGoback} >
            <View>
              <Text style={globalStyle.gray14}>完成</Text>
            </View>
        </TouchableOpacity>
      </View>
    )
  }
}
