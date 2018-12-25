import React from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import globalStyle from '../../../../assets/nativeStyles/global';
import Goback from '../../../common/Goback';
import styles from './styles'
import FinishedBtn from './FinishedBtn';

export default class Mobile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.navigation.getParam('id', 'NO-ID'),
      mobile: this.props.navigation.getParam('mobile', 'some default value'),
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: '联系方式',
    headerTitleStyle: globalStyle.black15,
    headerLeft: <Goback navigation={navigation}/> ,
    headerRight: <FinishedBtn navigation={navigation}/>
  });

  render() {
    return (
      <View style={{flex:1}}>
        <View style={[styles.eachInputView]}>
          <View style={styles.inputFontView}>
            <TextInput value={this.state.mobile}
              onChangeText={(mobile) => this.setState({mobile})}
              blurOnSubmit={true}
              maxLength={50}
              clearButtonMode={'while-editing'}
              placeholder={'请输入联系方式'}
            />
          </View>
        </View>
      </View>

    );
  }
}
