import React, {Component} from "react";
import {
    TouchableOpacity,
    View,
} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Goback extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{justifyContent:'center', marginLeft: 10,}}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack(null)} >
            <View>
              <AntDesign name="left" size={16} color='gray' />
            </View>
        </TouchableOpacity>
      </View>
    )
  }
}
