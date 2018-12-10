import React, {Component} from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Swiper from 'react-native-swiper';

var Diemnsions = require('Dimensions');
var w = Diemnsions.get('window').width;

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
      <View style={{flex: 1}}>
        <View style={styles.banner}>
          <Swiper showButtons={true} loop={true} autoplay={true} autoplayTimeout={3}>
            <Image style={styles.img} source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg' }} />
            <Image style={styles.img} source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg' }} />
            <Image style={styles.img} source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg' }} />
          </Swiper>
        </View>
      </View>
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
  banner: {
    width: w,
    height: 188
  },
  img: {
    flex: 1
  }
});
