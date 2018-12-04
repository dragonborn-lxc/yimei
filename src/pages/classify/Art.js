import React, {Component} from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
import ModalDropdown from 'react-native-modal-dropdown';

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

export default class Art extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View>
        <View style={styles.selections}>
          <ModalDropdown defaultValue="类别" options={['option 1', 'option 2']} textStyle={{fontSize: 18}} style={{flex: 2}}/>
          <ModalDropdown defaultValue="题材" options={['option 1', 'option 2']} textStyle={{fontSize: 18}} style={{flex: 2}}/>
          <ModalDropdown defaultValue="排序" options={['option 1', 'option 2']} textStyle={{fontSize: 18}} style={{flex: 2}}/>
          <ModalDropdown defaultValue="筛选" options={['option 1', 'option 2']} textStyle={{fontSize: 18}} style={{flex: 2}}/>
        </View>
        <FlatList
          data={paint}
          renderItem={({ index, item }) => this.showCell(index, item)}
          keyExtractor={(item, index) => (index + '')}
        />
      </View>
    );
  }

  showCell(index, item) {
    return (
      <View style={styles.items}>
        <Image style={styles.img} source={{ url: item.url }} />
        <View style={styles.desc}>
          <Text style={{left:20, flex: 1}}>最后的晚餐</Text>
          <Text style={{left:20, flex: 1, color: 'red'}}>99999元</Text>
          <Text style={{left:20, flex: 1}}>{item.author}</Text>
          <Text style={{left:20, flex: 1}}>题材/材质/大小/创作年份</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  selections: {
    flexDirection: 'row',
    height: 30,
    marginTop: 8,
    marginLeft: 34
  },
  items: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    marginLeft: 10,l
    width: 352,
    height: 320,
  },
  img: {
    width: 310,
    height: 220,
    top: 18,
    left: 18
  },
  desc: {
    flexDirection: 'column',
    position: "absolute",
    bottom: 10,
  },
});
