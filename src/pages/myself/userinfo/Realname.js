import React from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import Goback from '../../../common/Goback';
import globalStyle from '../../../../assets/nativeStyles/global';
import styles from './styles';
import FinishedBtn from './FinishedBtn';


export default class Realname extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        id: this.props.navigation.getParam('id', ''),
        realname: this.props.navigation.getParam('realname', ''),
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: '真实姓名',
    headerTitleStyle: globalStyle.black15,
    headerLeft: <Goback navigation={navigation}/> ,
    headerRight: <FinishedBtn navigation={navigation} /> ,
  });

  render() {
    return (
      <View style={{flex:1}}>
        <View style={[styles.eachInputView]}>
          <View style={styles.inputFontView}>
            <TextInput value={this.state.realname}
              onChangeText={(realname) => {
                this.setState({realname: realname});
                this.props.navigation.setParams({
                    user: {
                        id: this.state.id,
                        realname: realname,
                    }
                });
              }}
              blurOnSubmit={true}
              maxLength={50}
              clearButtonMode={'while-editing'}
              placeholder={'请输入真实姓名'}
            />
          </View>
        </View>
      </View>
    );
  }
}
