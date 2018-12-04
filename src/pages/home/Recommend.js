import React, {Component} from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
import AntDesign from 'react-native-vector-icons/AntDesign'

var Diemnsions = require('Dimensions');
var w = Diemnsions.get('window').width;
var h = Diemnsions.get('window').height;

var paint = [
  {
    author: '达芬奇',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'
  },
  {
    author: '达芬奇',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'
  },
  {
    author: '达芬奇',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'
  },
  {
    author: '达芬奇',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'
  },
  {
    author: '达芬奇',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'
  },
  {
    author: '达芬奇',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'
  }
]

export default class Recommend extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <FlatList
        data={paint}
        renderItem={({ index, item }) => this.showCell(index, item)}
        keyExtractor={(item, index) => (index + '')}
      />
    );
  }

  showCell(index, item) {
    return (
      <View style={styles.items}>
        <Image style={styles.img} source={{ url: item.url }} />
        <View style={styles.desc}>
          <Text style={{left:20, flex: 1}}>{item.author}</Text>
          <TouchableOpacity activeOpacity={0.5}  style={{left: 180, flex: 2}}>
            <AntDesign name="heart" size={14} color='red'>
              <Text style={{color: 'rosybrown'}}>收藏</Text>
            </AntDesign>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  items: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    top: 6,
    left: 12,
    marginBottom: 12,
    width: 352,
    height: 280,
  },
  img: {
    width: 310,
    height: 220,
    top: 18,
    left: 18
  },
  desc: {
    flexDirection: 'row',
    position: "absolute",
    bottom: 10,
  },
});
