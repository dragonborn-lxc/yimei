import React, {Component} from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity, FlatList, StyleSheet} from 'react-native';

const Diemnsions = require('Dimensions');
const w = Diemnsions.get('window').width;

var info = [
  {
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549019262775&di=39f8a1535fbd0790bc2ed53a838677bf&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fe2b6bc362580149464a16ca78c3f52f692c4b02c302f-ZCO77F_fw658'
  },
  {
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549019262775&di=39f8a1535fbd0790bc2ed53a838677bf&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fe2b6bc362580149464a16ca78c3f52f692c4b02c302f-ZCO77F_fw658'
  },
  {
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549019262775&di=39f8a1535fbd0790bc2ed53a838677bf&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fe2b6bc362580149464a16ca78c3f52f692c4b02c302f-ZCO77F_fw658'
  },
  {
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549019262775&di=39f8a1535fbd0790bc2ed53a838677bf&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fe2b6bc362580149464a16ca78c3f52f692c4b02c302f-ZCO77F_fw658'
  },
  {
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549019262775&di=39f8a1535fbd0790bc2ed53a838677bf&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fe2b6bc362580149464a16ca78c3f52f692c4b02c302f-ZCO77F_fw658'
  },
  {
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549019262775&di=39f8a1535fbd0790bc2ed53a838677bf&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fe2b6bc362580149464a16ca78c3f52f692c4b02c302f-ZCO77F_fw658'
  }
]

export default class Subject extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.topic}>专题</Text>
        <FlatList
          data={info}
          renderItem={({ index, item }) => this.showCell(index, item)}
          keyExtractor={(item, index) => (index + '')}
        />
      </View>
    );
  }

  showCell(index, item) {
    return (
      <View style={styles.items}>
        <Image style={styles.img} source={{ uri: item.url }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 36,
    alignItems: 'center'
  },
  topic: {
    fontSize: 15,
    marginBottom: 16
  },
  items: {
    marginBottom: 1,
    width: w,
    height: 160,
    marginBottom: 20
  },
  img: {
    flex:1
  }
});
