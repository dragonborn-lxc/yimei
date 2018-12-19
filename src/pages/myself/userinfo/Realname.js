import React from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import Goback from '../../../common/Goback';
import globalStyle from '../../../../assets/nativeStyles/global';
import styles from './styles'


export default class Realname extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.navigation.getParam('id', 'NO-ID'),
      realName: this.props.navigation.getParam('realName', 'some default value'),
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: '真实姓名',
    headerTitleStyle: globalStyle.black15,
    headerLeft:(
         	<Goback navigation={navigation}/>
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

  render() {
    return (
      <View style={{flex:1}}>
        <View style={[styles.eachInputView]}>
          <View style={styles.inputFontView}>
            <TextInput value={this.state.realName}
              onChangeText={(realName) => this.setState({realName})}
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
