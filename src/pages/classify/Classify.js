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
    type: 1,
    name: 'Lost in A Circle',
    price: '6,000',
    author: 'Baptiste Desjardin',
    category: '设计艺术',
    theme: '静物',
    size: '50 x 50cm',
    year: '2018',
    thumbnail: 'https://www.pgtartcentre.com/img/art/1/thumbnail.jpg',
    cover: 'https://www.pgtartcentre.com/img/art/1/cover.jpg'
  }
];

var goods = [
  {
    id: 1,
    type: 2,
    name: '蓝泡泡',
    price: '23,868',
    brand: 'MEW Rug',
    category: '家居家饰',
    style: '欧式',
    size: '206 x 303cm',
    year: '2018',
    thumbnail: 'https://www.pgtartcentre.com/img/derivative/1/thumbnail.jpg',
    cover: 'https://www.pgtartcentre.com/img/derivative/1/cover.jpg'
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

  componentWillMount() {
    var artItems = [];
    var derivativeItems = [];
  }

  render() {
    return (
      <ScrollableTabView style={styles.navbar} tabBarActiveTextColor='#000000' tabBarInactiveTextColor='#8D8D8D' tabBarTextStyle={styles.label} tabBarUnderlineStyle={styles.underline}>
        <View tabLabel='艺术品'>
          <View style={styles.selections}>
            <Dropdown data={drop1} onSelect={(idx, value) => {
            }}/>
            <Dropdown data={drop2} onSelect={(idx, value) => {
            }}/>
            <Dropdown data={drop3} onSelect={(idx, value) => {
            }}/>
            <Dropdown data={drop4} icon="filter" onSelect={(idx, value) => {
            }}/>
          </View>
          <View style={{height: 514}}>
          <FlatList
            data={paint}
            renderItem={({index, item}) => this.showArtCell(index, item)}
            keyExtractor={(item, index) => (index + '')}
            numColumns={2}
            horizontal={false}
          />
          </View>
        </View>
        <View tabLabel='衍生品'>
          <View style={styles.selections}>
            <Dropdown data={drop11} onSelect={(idx, value) => {
            }}/>
            <Dropdown data={drop12} onSelect={(idx, value) => {
            }}/>
            <Dropdown data={drop13} onSelect={(idx, value) => {
            }}/>
            <Dropdown data={drop14} icon="filter" onSelect={(idx, value) => {
            }}/>
          </View>
          <View style={{height: 514}}>
          <FlatList
            data={goods}
            renderItem={({index, item}) => this.showDerivativeCell(index, item)}
            keyExtractor={(item, index) => (index + '')}
            numColumns={2}
            horizontal={false}
          />
          </View>
        </View>
      </ScrollableTabView>
    );
  }

  showArtCell(index, item) {
    return (
      <TouchableOpacity style={styles.items} onPress={() => {this.props.navigation.navigate('Detail', {item: item})}}>
        <Image style={styles.img} source={{url: item.thumbnail}} />
        <View style={styles.desc}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}元</Text>
          <Text style={styles.author}>{item.author}</Text>
          <Text style={styles.other}>{item.category}/{item.theme}/{item.size}/{item.year}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  showDerivativeCell(index, item) {
    return (
      <TouchableOpacity style={styles.items} onPress={() => {this.props.navigation.navigate('Detail', {item: item})}}>
        <Image style={styles.img} source={{ url: item.thumbnail }} />
        <View style={styles.desc}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}元</Text>
          <Text style={styles.brand}>{item.brand}</Text>
          <Text style={styles.other}>{item.category}/{item.style}/{item.size}/{item.year}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const ClassifyNavigator = createStackNavigator({
  Main: {
    screen: Main
  },
  Detail: {
    screen: Detail
  }
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
