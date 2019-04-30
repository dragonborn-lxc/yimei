import React, {Component} from 'react';
import {Text, View, Image, ScrollView, Dimensions, TouchableOpacity, FlatList, PixelRatio, StyleSheet, RefreshControl, ActivityIndicator} from 'react-native';
import Swiper from 'react-native-swiper';
import {request} from '../../common/util';

const Diemnsions = require('Dimensions');
const w = Diemnsions.get('window').width;
const h = Diemnsions.get('window').height;

export default class Recommend extends Component {
  constructor(props){
    super(props);
    this.state = {
      recommendTypeList: [],
      recommendProductList: [],
      isRefreshing: false
    };
  }

  componentWillMount() {
    this._loadData();
  }

  _loadData() {
    request("/app/home/recommend/index",
      (responseData)=>{
        this.setState({
          recommendTypeList: responseData.result.recommendTypeList,
          recommendProductList: responseData.result.recommendProductList
        });
      },
      'POST'
    );
  }

  _onRefresh() {
    this.setState({
      isRefreshing: true,
      recommendTypeList: [],
      recommendProductList: []
    });
    setTimeout(() => {
      this._loadData();
      this.setState({isRefreshing: false});
    }, 3000)
  }

  _showSubject(index, item) {
    return (
      <View style={styles.subject}>
        <View style={styles.topic}>
          <Text style={styles.topicname}>{item.name}</Text>
          <TouchableOpacity>
            <Text style={styles.more}>更多＞</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.show}>
          <FlatList
            data={this.state.recommendProductList[item.id]}
            renderItem={({index, item}) => this._showProduct(index, item)}
            keyExtractor={(item, index) => (index + '')}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    )
  };

  _showProduct(index, item) {
    return (
      <View style={styles.items}>
        <Image style={styles.item} source={{uri: item.url}} />
        <Text style={styles.itemname} numberOfLines={1}>{item.name}</Text>
      </View>
    )
  };

  render() {
    return (
      <ScrollView refreshControl={
        <RefreshControl
          refreshing={this.state.isRefreshing}
          onRefresh={this._onRefresh.bind(this)}
          title="数据加载中"
          titleColor="#696969"
          colors={['#ff0000', '#00ff00', '#0000ff']}
          progressBackgroundColor="#ffffff"/>
      }>
        <View style={{flex: 1}}>
          <View style={styles.banner}>
            <Swiper showButtons={true} loop={true} autoplay={true} autoplayTimeout={3}
              dot={<View style={{
                backgroundColor: '#C0C0C0',
                width: 3,
                height: 3,
                borderRadius: 6,
                marginLeft: 2,
                marginRight: 2,
                top: 20
              }}/>}
              activeDot={<View style={{
                backgroundColor: 'white',
                width: 3,
                height: 3,
                borderRadius: 6,
                marginLeft: 2,
                marginRight: 2,
                top: 20
              }}/>}
            >
              <Image style={styles.img} source={{uri: 'https://www.pgtartcentre.com/img/banner/banner-1.jpg?v=' + Math.random()}} />
              <Image style={styles.img} source={{uri: 'https://www.pgtartcentre.com/img/banner/banner-2.jpg?v=' + Math.random()}} />
              <Image style={styles.img} source={{uri: 'https://www.pgtartcentre.com/img/banner/banner-3.jpg?v=' + Math.random()}} />
            </Swiper>
          </View>
          <FlatList
            data={this.state.recommendTypeList}
            renderItem={({index, item}) => this._showSubject(index, item)}
            keyExtractor={(item, index) => (index + '')}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    width: w,
    height: 250
  },
  img: {
    flex: 1
  },
  subject: {
    width: w,
    height: 134,
    borderBottomWidth: 1/PixelRatio.get(),
    borderColor:'#8D8D8D'
  },
  topic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 8,
    marginLeft: 13,
    marginRight: 8
  },
  topicname: {
    fontSize: 12,
    fontWeight: '300'
  },
  more: {
    fontSize: 7,
    fontWeight: '200',
    color: '#8D8D8D'
  },
  show: {
    justifyContent: 'space-around',
    marginTop: 5,
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
  },
  itemname: {
    width:80,
    fontSize:8,
    fontWeight: '300',
    color: '#8D8D8D'
  }
});
