import React, {Component} from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {createStackNavigator, NavigationActions} from 'react-navigation';
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
import Dropdown from '../../components/Dropdown';
import Detail from './Detail';

const Diemnsions = require('Dimensions');
const w = Diemnsions.get('window').width;

var paint = [
  {
    id: 1,
    author: '达芬奇',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'
  },
  {
    id: 1,
    author: '达芬奇',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'
  },
  {
    id: 1,
    author: '达芬奇',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'
  },
  {
    id: 1,
    author: '达芬奇',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'
  },
  {
    id: 1,
    author: '达芬奇',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'
  },
  {
    id: 1,
    author: '达芬奇',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'
  }
];

var goods = [
  {
    id: 2,
    brand: '自创品牌',
    url: 'https://img.zcool.cn/community/01c56959cc8b6ba801218e18217f50.jpg@1280w_1l_2o_100sh.jpg'
  },
  {
    id: 2,
    brand: '自创品牌',
    url: 'https://img.zcool.cn/community/01c56959cc8b6ba801218e18217f50.jpg@1280w_1l_2o_100sh.jpg'
  },
  {
    id: 2,
    brand: '自创品牌',
    url: 'https://img.zcool.cn/community/01c56959cc8b6ba801218e18217f50.jpg@1280w_1l_2o_100sh.jpg'
  },
  {
    id: 2,
    brand: '自创品牌',
    url: 'https://img.zcool.cn/community/01c56959cc8b6ba801218e18217f50.jpg@1280w_1l_2o_100sh.jpg'
  },
  {
    id: 2,
    brand: '自创品牌',
    url: 'https://img.zcool.cn/community/01c56959cc8b6ba801218e18217f50.jpg@1280w_1l_2o_100sh.jpg'
  },
  {
    id: 2,
    brand: '自创品牌',
    url: 'https://img.zcool.cn/community/01c56959cc8b6ba801218e18217f50.jpg@1280w_1l_2o_100sh.jpg'
  }
];

var drop1 = ['全部', '油画', '版画', '水墨', '书法', '雕塑', '摄影', '装置', '手稿', '设计艺术', '其他'];
var drop2 = ['全部', '人物', '风景', '静物', '抽象', '具象', '观念', '传统国画', '其他'];
var drop3 = ['价格升序', '价格降序', '年代升序', '年代降序'];
var drop4 = ['全部', '1～5000', '5000～20000', '20000以上', '大尺寸', '中尺寸', '小尺寸'];

var drop11 = ['全部', '家居家饰', '珠宝首饰', '时尚配饰', '服装', '鞋履', '箱包', '腕表', '家电数码', '图文工具', '玩具', '其他'];
var drop12 = ['全部', '现代简约', '美式乡村', '复古怀旧', '现代中式', '新古典', '东南亚', '田园', '欧式', '后现代', '工业风', '其他'];
var drop13 = ['价格升序', '价格降序', '年代升序', '年代降序'];
var drop14 = ['全部', '1～500', '500～2000', '2000以上', '大尺寸', '中尺寸', '小尺寸'];

class Main extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null,
    gesturesEnabled: false,
  };

  constructor(props){
    super(props);
  }

  render() {
    return (
      <ScrollableTabView style={styles.navbar} tabBarActiveTextColor='#000000' tabBarInactiveTextColor='#8D8D8D' tabBarTextStyle={styles.label} tabBarUnderlineStyle={styles.underline}>
        <View tabLabel='艺术品'>
          <View style={styles.selections}>
            <Dropdown data={drop1}/>
            <Dropdown data={drop2}/>
            <Dropdown data={drop3}/>
            <Dropdown data={drop4} icon="filter"/>
          </View>
          <View style={{height: 514}}>
          <FlatList
            data={paint}
            renderItem={({ index, item }) => this.showArtCell(index, item)}
            keyExtractor={(item, index) => (index + '')}
          />
          </View>
        </View>
        <View tabLabel='衍生品'>
          <View style={styles.selections}>
            <Dropdown data={drop11}/>
            <Dropdown data={drop12}/>
            <Dropdown data={drop13}/>
            <Dropdown data={drop14} icon="filter"/>
          </View>
          <View style={{height: 514}}>
          <FlatList
            data={goods}
            renderItem={({ index, item }) => this.showDerivativeCell(index, item)}
            keyExtractor={(item, index) => (index + '')}
          />
          </View>
        </View>
      </ScrollableTabView>
    );
  }

  showArtCell(index, item) {
    return (
      <View style={styles.row}>
        <TouchableOpacity style={styles.items} onPress={() => {this.props.navigation.navigate('Detail', {id: item.id})}}>
          <Image style={styles.img} source={{url: item.url}} />
          <View style={styles.desc}>
            <Text style={styles.name}>最后的晚餐</Text>
            <Text style={styles.price}>99999元</Text>
            <Text style={styles.author}>{item.author}</Text>
            <Text style={styles.other}>题材/材质/大小/创作年份</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items} onPress={() => {this.props.navigation.navigate('Detail', {id: item.id})}}>
          <Image style={styles.img} source={{url: item.url}} />
          <View style={styles.desc}>
            <Text style={styles.name}>最后的晚餐</Text>
            <Text style={styles.price}>99999元</Text>
            <Text style={styles.author}>{item.author}</Text>
            <Text style={styles.other}>题材/材质/大小/创作年份</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  showDerivativeCell(index, item) {
    return (
      <View style={styles.row}>
        <TouchableOpacity style={styles.items} onPress={() => {this.props.navigation.navigate('Detail', {id: item.id})}}>
          <Image style={styles.img} source={{ url: item.url }} />
          <View style={styles.desc}>
            <Text style={styles.name}>中秋节木盒</Text>
            <Text style={styles.price}>200元</Text>
            <Text style={styles.brand}>{item.brand}</Text>
            <Text style={styles.other}>风格/材质/尺寸/创作年份</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items} onPress={() => {this.props.navigation.navigate('Detail', {id: item.id})}}>
          <Image style={styles.img} source={{ url: item.url }} />
          <View style={styles.desc}>
            <Text style={styles.name}>中秋节木盒</Text>
            <Text style={styles.price}>200元</Text>
            <Text style={styles.brand}>{item.brand}</Text>
            <Text style={styles.other}>风格/材质/尺寸/创作年</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const ClassifyNavigator = createStackNavigator({
  Main: Main,
  Detail: Detail
});

export default class Classify extends Component {
  static router = ClassifyNavigator.router;

  render() {
    return (
      <ClassifyNavigator navigation={this.props.navigation}/>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    marginTop: 20
  },
  label: {
    marginTop: 6,
    fontSize: 15,
    fontWeight: '300'
  },
  underline: {
    height: 1,
    backgroundColor: '#000000'
  },
  selections: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#DCDCDC',
    height: 26,
    width: w,
    marginTop: 8,
    paddingLeft: 26
  },
  row: {
    flexDirection: 'row'
  },
  items: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    height: 258,
  },
  img: {
    width: 160,
    height: 150,
    top: 10,
    left: 14
  },
  desc: {
    flexDirection: 'column',
    position: "absolute",
    bottom: 7
  },
  name: {
    left:14,
    flex: 1,
    marginBottom: 2
  },
  price: {
    left:14,
    flex: 1,
    fontSize: 14,
    color: 'red',
    marginBottom: 10
  },
  author: {
    left:14,
    flex: 1,
    fontSize: 11,
    marginBottom: 6
  },
  brand: {
    left:14,
    flex: 1,
    fontSize: 11,
    marginBottom: 6
  },
  other: {
    left:14,
    flex: 1,
    fontSize: 11,
    color: '#696969'
  }
});
