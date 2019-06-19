import React, {Component} from "react";
import PropTypes from 'prop-types';
import {
    TouchableOpacity,
    View,
} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Goback extends Component {
  static propTypes = {
    additionalFun: PropTypes.func
  };

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{justifyContent:'center', marginLeft: 10,}}>
        <TouchableOpacity onPress={() => {
          this.props.navigation.goBack(null);
          if (this.props.additionalFun != null) {
            this.props.additionalFun();
          }
        }} >
            <View>
              <AntDesign name="left" size={16} color='gray' />
            </View>
        </TouchableOpacity>
      </View>
    )
  }
}
