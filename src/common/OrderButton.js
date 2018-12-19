
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
    height: 18,
    cycleColor: 'black',
    fontColor: 'rgb(0,0,0)',
    fontSize: 11,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.submit,{
            width : this.props.width,
            height: this.props.height,
            backgroundColor: this.props.cycleColor,
          }]}>
        <TouchableOpacity style={[styles.submit2,{
          width : this.props.width - 1,
          height: this.props.height - 1 ,
          }]}
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
  },
  submit2:{
    backgroundColor:'white',
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText:{
      textAlign:'center',
  }
})
