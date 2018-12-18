import React from 'react'
import { Text, View, Image, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

import globalStyle from '../../../../assets/nativeStyles/global';
import styles from './styles'

export default class Sex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.navigation.getParam('id', 'NO-ID'),
      sex: this.props.navigation.getParam('sex', 'some default value'),
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: '性别',
    headerTitleStyle: globalStyle.black15,
    headerLeft:(
         	<View style={{justifyContent:'center', marginLeft: 10,}}>
            <TouchableOpacity onPress={() => navigation.goBack(null)} >
                <View>
                  <AntDesign name="left" size={16} color='gray' />
                </View>
            </TouchableOpacity>
         	</View>
        ),
    headerRight:(
         	<View style={{justifyContent:'center', marginRight: 10,}}>
            <TouchableOpacity onPress={() => navigation.goBack(null)} >
                <View>
                  <Text style={globalStyle.gray14}>完成</Text>
                </View>
            </TouchableOpacity>
         	</View>
        ),
  });

  changeSex=(sex)=>{
    let temp = this.state;
    temp.sex = sex;
    this.setState(temp);
  }

  render() {

    return (

      <View style={{flex: 1}}>
        <TouchableOpacity onPress={this.changeSex.bind(this, 'MALE')}>
          <View style={[styles.eachView]}>
            <View style={[styles.fontView]} ><Text style={[globalStyle.gray15, styles.font2]}>男</Text></View>
            {
              this.state.sex === 'MALE' ? <View style={[styles.fontView]} ><AntDesign name="check" size={14} /></View> : null
            }
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.changeSex.bind(this, 'FEMALE')}>
          <View style={[styles.eachView]}>
            <View style={[styles.fontView]} ><Text style={[globalStyle.gray15, styles.font2]}>女</Text></View>
            {
              this.state.sex === 'FEMALE' ? <View style={[styles.fontView]} ><AntDesign name="check" size={14} /></View> : null
            }
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
