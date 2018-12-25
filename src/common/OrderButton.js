
import React, {Component} from "react";
import {
    ActivityIndicator,
    RefreshControl,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    Image,
    Alert
} from "react-native";

export default class OrderButton extends Component {

  static defaultProps = {
    buttonName: '按钮',
    onPress: () => null,
    width: 60,
    height: 20,
    cycleColor: 'black',
    fontColor: 'rgb(0,0,0)',
    fontSize: 11,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.submit, {
          borderColor: this.props.cycleColor,
          height: this.props.height,
          width: this.props.width,
        }]}>
        <TouchableOpacity
          onPress={this.props.onPress}>
          <Text style={[styles.submitText, {
            fontSize: this.props.fontSize,
            color: this.props.fontColor
            }]}>{this.props.buttonName}</Text>
        </TouchableOpacity>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  submit:{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    borderWidth: 1,
  },
  submitText:{
      textAlign:'center',
  }
})
