import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import globalStyle from '../../../../assets/nativeStyles/global';
import styles from './styles';

export default class FinishedBtn extends React.Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    save: () => null,
  };

  saveAndGoback = () => {
    this.props.navigation.goBack(null);
    this.props.save;
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
