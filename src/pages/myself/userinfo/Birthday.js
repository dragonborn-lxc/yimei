import React, { Component } from 'react';
import {
  DatePickerIOS,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import moment from 'moment';
import AntDesign from 'react-native-vector-icons/AntDesign';
import globalStyle from '../../../../assets/nativeStyles/global';

export default class Birthday extends Component {
  constructor(props) {
    super(props);

    let param = this.props.navigation.getParam('birthday', '1900-01-01');
    let dateParam = moment(param).toDate();

    this.state = {
      id: this.props.navigation.getParam('id', 'NO-ID'),
      birthday: param,
      chosenDate: dateParam,
     };

  }

  static navigationOptions = ({ navigation }) => ({
    title: '出生年月',
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

  setDate =(newDate)=> {
    this.setState({
      birthday: moment(newDate).format('YYYY-MM-DD'),
      chosenDate: newDate,
    });
  }


  render() {
    return (
      <View style={{flex: 1,
      justifyContent: 'center'}}>
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
          locale='zh-Hans'
          mode='date'
          maximumDate={new Date()}
        />
      </View>
    )
  }
}
