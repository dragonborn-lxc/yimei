import React, { Component } from 'react';
import {
  DatePickerIOS,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import moment from 'moment';
import globalStyle from '../../../../assets/nativeStyles/global';
import Goback from '../../../common/Goback';
import FinishedBtn from './FinishedBtn';

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
    headerLeft: <Goback navigation={navigation}/> ,
    headerRight: <FinishedBtn navigation={navigation}/> ,
  });

  setDate =(newDate)=> {
    this.setState({
      birthday: moment(newDate).format('YYYY-MM-DD'),
      chosenDate: newDate,
    });
    this.props.navigation.setParams({
      user: {
        id: this.state.id,
        birthday: moment(newDate).format('YYYY-MM-DD'),
      }
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
