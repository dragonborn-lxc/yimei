import React, {Component} from 'react';
import {Text, View, Image, ScrollView, Dimensions, TouchableOpacity, FlatList, PixelRatio, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

var Diemnsions = require('Dimensions');
var w = Diemnsions.get('window').width;

var info = [
  {
    name: '新品上架',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'
  },
  {
    name: '精品课程',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'
  },
  {
    name: '品牌专题1',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'
  }
];

var goods = [
  {
    name: '产品1',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'
  },
  {
    name: '产品2',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'
  },
  {
    name: '产品3',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'
  },
  {
    name: '产品4',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'
  },
  {
    name: '产品5',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'
  },
  {
    name: '产品6',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'
  }
]

export default class Recommend extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={styles.banner}>
            <Swiper showButtons={true} loop={true} autoplay={true} autoplayTimeout={3}>
              <Image style={styles.img} source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg' }} />
              <Image style={styles.img} source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg' }} />
              <Image style={styles.img} source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg' }} />
            </Swiper>
          </View>
          <FlatList
            data={info}
            renderItem={({index, item}) => this.showSubject(index, item)}
            keyExtractor={(item, index) => (index + '')}
          />
        </View>
      </ScrollView>
    );
  }

  showSubject(index, item) {
    return (
      <View style={styles.subject}>
        <View style={styles.topic}>
          <Text style={{fontSize: 13}}>{item.name}</Text>
          <TouchableOpacity>
            <Text style={styles.more}>更多＞</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.show}>
          <FlatList
            data={goods}
            renderItem={({index, item}) => this.showProduct(index, item)}
            keyExtractor={(item, index) => (index + '')}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    )
  };

  showProduct(index, item) {
    return (
      <View style={styles.items}>
        <Image style={styles.item} source={{uri: item.url}} />
        <Text style={{fontSize:8, color: '#938D8C'}}>{item.name}</Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  banner: {
    width: w,
    height: 188
  },
  img: {
    flex: 1
  },
  subject: {
    width: w,
    height: 136,
    borderBottomWidth: 1/PixelRatio.get(),
    borderColor:'#938D8C'
  },
  topic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 9,
    marginLeft: 15,
    marginRight: 8
  },
  more: {
    fontSize: 7,
    color: '#938D8C'
  },
  show: {
    justifyContent: 'space-around',
    marginTop: 4,
    marginLeft: 38,
    marginRight: 38
  },
  items: {
    alignItems: 'center',
    marginRight: 22
  },
  item: {
    height:80,
    width:80
  }
});
