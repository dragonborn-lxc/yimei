import React from 'react'
import { Text, View, Image, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Goback from '../../../common/Goback';
import globalStyle from '../../../../assets/nativeStyles/global';
import styles from './styles';
import FinishedBtn from './FinishedBtn';

export default class Sex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.navigation.getParam('id', 'NO-ID'),
      sexEnum: this.props.navigation.getParam('sexEnum', 'some default value'),
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: '性别',
    headerTitleStyle: globalStyle.black15,
    headerLeft: <Goback navigation={navigation}/> ,
    headerRight: <FinishedBtn navigation={navigation}/> ,
  });

  changeSex=(sexEnum)=>{
    let temp = this.state;
    temp.sexEnum = sexEnum;
    this.setState(temp);

    this.props.navigation.setParams({
      user: {
        id: this.state.id,
        sexEnum: sexEnum,
      }
    });
  }

  render() {

    return (

      <View style={{flex: 1}}>
        <TouchableOpacity onPress={this.changeSex.bind(this, 'MALE')}>
          <View style={[styles.eachView]}>
            <View style={[styles.fontView]} ><Text style={[globalStyle.gray15, styles.font2]}>男</Text></View>
            {
              this.state.sexEnum === 'MALE' ? <View style={[styles.fontView]} ><AntDesign name="check" size={14} /></View> : null
            }
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.changeSex.bind(this, 'FEMALE')}>
          <View style={[styles.eachView]}>
            <View style={[styles.fontView]} ><Text style={[globalStyle.gray15, styles.font2]}>女</Text></View>
            {
              this.state.sexEnum === 'FEMALE' ? <View style={[styles.fontView]} ><AntDesign name="check" size={14} /></View> : null
            }
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
