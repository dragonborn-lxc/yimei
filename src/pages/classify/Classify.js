import React, {Component} from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {createStackNavigator, NavigationActions} from 'react-navigation';
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
import Dropdown from '../../components/Dropdown';
import RefreshFlatList from '../../components/RefreshFlatList';
import {request} from '../../common/util';
import Detail from './Detail';

const Diemnsions = require('Dimensions');
const w = Diemnsions.get('window').width;
var pageSize = 8;

var drop1 = ['全部', '油画', '版画', '水墨', '书法', '雕塑', '摄影', '装置', '手稿', '设计艺术', '其他'];
var drop2 = ['全部', '人物', '风景', '静物', '抽象', '具象', '观念', '传统国画', '其他'];
var drop3 = ['智能排序','价格升序', '价格降序', '年代升序', '年代降序'];
var drop4 = ['全部', '1～5000', '5000～20000', '20000以上', '大尺寸', '中尺寸', '小尺寸'];

var drop11 = ['全部', '家居家饰', '珠宝首饰', '时尚配饰', '服装', '鞋履', '箱包', '腕表', '家电数码', '图文工具', '玩具', '其他'];
var drop12 = ['全部', '现代简约', '美式乡村', '复古怀旧', '现代中式', '新古典', '东南亚', '田园', '欧式', '后现代', '工业风', '其他'];
var drop13 = ['智能排序','价格升序', '价格降序', '年代升序', '年代降序'];
var drop14 = ['全部', '1～500', '500～2000', '2000以上', '大尺寸', '中尺寸', '小尺寸'];

class Main extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null,
    gesturesEnabled: false,
  };

  constructor(props){
    super(props);
    this.state = {
      artItems: [],
      showArtFoot: 0,
      artPageNum: 1,
      artSort: 0,
      artCategory: 0,
      artTheme: 0,
      derivativeItems: [],
      showDerivativeFoot: 0,
      derivativePageNum: 1,
      derivativeSort: 0,
      derivativeCategory: 0,
      derivativeTexture: 0
    }
  }

  componentWillMount() {
    this.setState({
      showArtFoot: 1,
      showDerivativeFoot: 1
    });
    request("/app/classify/art/index",
      (responseData)=>{
        this.setState({
          artItems: responseData.result
        });
      },
      'POST',
      {'Content-Type': 'application/json'},
      {
        "pageNumber": this.state.artPageNum,
        "pageSize": pageSize,
        "sort": this.state.artSort,
        "category": this.state.artCategory,
        "theme": this.state.artTheme,
        "texture": 0
      }
    );
    request("/app/classify/derivative/index",
      (responseData)=>{
        this.setState({
          derivativeItems: responseData.result
        });
      },
      'POST',
      {'Content-Type': 'application/json'},
      {
        "pageNumber": this.state.derivativePageNum,
        "pageSize": pageSize,
        "sort": this.state.derivativeSort,
        "category": this.state.derivativeCategory,
        "theme": 0,
        "texture": this.state.derivativeTexture
      }
    );
  }

  _loadArtData = async() => {
    this.setState({
      showArtFoot: 1
    });
    request("/app/classify/art/index",
      (responseData)=>{
        if (responseData.result  &&  responseData.result.length > 0) {
          this.setState((preState, props) => {
						return {
              artItems: preState.artItems.concat(responseData.result),
              showArtFoot: 0
            };
					});
   		 	} else {
   		 		this.setState({
						showArtFoot: 2
					});
   		 	}
      },
      'POST',
      {'Content-Type': 'application/json'},
      {
        "pageNumber": this.state.artPageNum,
        "pageSize": pageSize,
        "sort": this.state.artSort,
        "category": this.state.artCategory,
        "theme": this.state.artTheme,
        "texture": 0
      }
    );
  }

  _loadDerivativeData = async() => {
    this.setState({
      showDerivativeFoot: 1
    });
    request("/app/classify/derivative/index",
      (responseData)=>{
        if (responseData.result  &&  responseData.result.length > 0) {
          this.setState((preState, props) => {
						return {
              derivativeItems: preState.derivativeItems.concat(responseData.result),
  						showDerivativeFoot: 0
            };
					});
   		 	} else {
   		 		this.setState({
						showDerivativeFoot: 2
					});
   		 	}
      },
      'POST',
      {'Content-Type': 'application/json'},
      {
        "pageNumber": this.state.derivativePageNum,
        "pageSize": pageSize,
        "sort": this.state.derivativeSort,
        "category": this.state.derivativeCategory,
        "theme": 0,
        "texture": this.state.derivativeTexture
      }
    );
  }

  _onArtEndReached = () => {
    this.setState({
      artPageNum: this.state.artPageNum + 1
    }, () => {
      this._loadArtData();
    });
  }

  _onDerivativeEndReached = () => {
    this.setState({
      derivativePageNum: this.state.derivativePageNum + 1
    }, () => {
      this._loadDerivativeData();
    });
  }

  render() {
    return (
      <ScrollableTabView style={styles.navbar} tabBarActiveTextColor='#000000' tabBarInactiveTextColor='#8D8D8D' tabBarTextStyle={styles.label} tabBarUnderlineStyle={styles.underline}>
        <View tabLabel='艺术品'>
          <View style={styles.selections}>
            <Dropdown data={drop1} onSelect={(idx, value) => {
              this.setState({
                artItems: [],
    						artCategory: idx,
                artPageNum: 1
    					}, () => {
                this._loadArtData();
              });
            }}/>
            <Dropdown data={drop2} onSelect={(idx, value) => {
              this.setState({
                artItems: [],
    						artTheme: idx,
                artPageNum: 1
    					}, () => {
                this._loadArtData();
              });
            }}/>
            <Dropdown data={drop3} onSelect={(idx, value) => {
              this.setState({
                artItems: [],
    						artSort: idx,
                artPageNum: 1
    					}, () => {
                this._loadArtData();
              });
            }}/>
            <Dropdown data={drop4} icon="filter" onSelect={(idx, value) => {
            }}/>
          </View>
          <View style={{height: 514}}>
          <RefreshFlatList
            data={this.state.artItems}
            renderItem={({index, item}) => this.showArtCell(index, item)}
            keyExtractor={(item, index) => (index + '')}
            numColumns={2}
            horizontal={false}
            showFoot={this.state.showArtFoot}
            onEndReached={() => this._onArtEndReached()}
          />
          </View>
        </View>
        <View tabLabel='衍生品'>
          <View style={styles.selections}>
            <Dropdown data={drop11} onSelect={(idx, value) => {
              this.setState({
                derivativeItems: [],
    						derivativeCategory: idx,
                derivativePageNum: 1
    					}, () => {
                this._loadDerivativeData()
              });
            }}/>
            <Dropdown data={drop12} onSelect={(idx, value) => {
              this.setState({
                derivativeItems: [],
    						derivativeTexture: idx,
                derivativePageNum: 1
    					}, () => {
                this._loadDerivativeData()
              });
            }}/>
            <Dropdown data={drop13} onSelect={(idx, value) => {
              this.setState({
                derivativeItems: [],
    						derivativeSort: idx,
                derivativePageNum: 1
    					}, () => {
                this._loadDerivativeData()
              });
            }}/>
            <Dropdown data={drop14} icon="filter" onSelect={(idx, value) => {
            }}/>
          </View>
          <View style={{height: 514}}>
          <RefreshFlatList
            data={this.state.derivativeItems}
            renderItem={({index, item}) => this.showDerivativeCell(index, item)}
            keyExtractor={(item, index) => (index + '')}
            numColumns={2}
            horizontal={false}
            showFoot={this.state.showDerivativeFoot}
            onEndReached={() => this._onDerivativeEndReached()}
          />
          </View>
        </View>
      </ScrollableTabView>
    );
  }

  showArtCell(index, item) {
    return (
      <TouchableOpacity style={styles.items} onPress={() => {this.props.navigation.navigate('Detail', {type: 1, item: item})}}>
        <Image style={styles.img} source={{url: item.thumbnailImgUrl}} />
        <View style={styles.desc}>
          <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
          <Text style={styles.price}>{item.price}元</Text>
          <Text style={styles.author} numberOfLines={1}>{item.artist}</Text>
          <Text style={styles.other} numberOfLines={1}>{item.category}/{item.theme}/{item.size}/{item.year}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  showDerivativeCell(index, item) {
    return (
      <TouchableOpacity style={styles.items} onPress={() => {this.props.navigation.navigate('Detail', {type: 2, item: item})}}>
        <Image style={styles.img} source={{ url: item.thumbnailImgUrl }} />
        <View style={styles.desc}>
          <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
          <Text style={styles.price}>{item.price}元</Text>
          <Text style={styles.brand} numberOfLines={1}>{item.brand}</Text>
          <Text style={styles.other} numberOfLines={1}>{item.category}/{item.texture}/{item.size}/{item.year}</Text>
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
    borderWidth: 1,
    borderColor: '#DCDCDC',
    height: 258,
    width: 0.5*w
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
    left: 14,
    flex: 1,
    marginBottom: 2,
    marginRight: 20
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
