import React, {Component} from 'react';
import {Text, View, Image, ScrollView, Dimensions, TouchableOpacity, FlatList, StyleSheet, RefreshControl, Linking} from 'react-native';
import {request} from '../../common/util';

const Diemnsions = require('Dimensions');
const w = Diemnsions.get('window').width;

export default class News extends Component {
  constructor(props){
    super(props);
    this.state = {
      newsList: [],
      isRefreshing: false
    };
  }

  componentWillMount() {
    this._loadData();
  }

  _loadData() {
    request("/app/home/news/index",
      (responseData)=>{
        this.setState({
          newsList: responseData.result
        });
      },
      'POST'
    );
  }

  _onRefresh() {
    this.setState({
      isRefreshing: true,
      newsList: []
    });
    setTimeout(() => {
      this._loadData();
      this.setState({isRefreshing: false});
    }, 3000)
  }

  _open(url) {
		Linking.openURL(url)
	}

  _showCell(index, item) {
    return (
      <TouchableOpacity style={styles.items} onPress={() => this._open(item.url)}>
        <Image style={styles.img} source={{uri: item.imgUrl}} />
      </TouchableOpacity>
    )
  }

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
        <FlatList
          data={this.state.newsList}
          renderItem={({ index, item }) => this._showCell(index, item)}
          keyExtractor={(item, index) => (index + '')}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  items: {
    marginBottom: 1,
    width: w,
    height: 198,
  },
  img: {
    flex:1
  }
});
