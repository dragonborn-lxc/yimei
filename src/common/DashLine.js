import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
const screenWidth = Dimensions.get('window').width;

export default class DashLine extends Component{
    render(){

        var len = Math.ceil(screenWidth/4);
        var arr = [];

        for(let i=0; i<len; i++){
            arr.push(i);
        }
        return <View style={styles.dashLine}>
            {
                arr.map((item, index)=>{
                    return <View style={styles.dashItem} key={'dash'+index} />
                })
            }
        </View>
    }
}

const styles = StyleSheet.create({
  dashLine: {
      flexDirection:"row",
      justifyContent:'space-between'
  },
  dashItem: {
    width: 2,
    height: 1,
    marginRight: 2,
    backgroundColor: 'rgb(141,141,141)',
}
})
