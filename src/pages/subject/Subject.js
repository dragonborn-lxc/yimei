import React, {Component} from 'react';
import {Text, View, Image, ScrollView, Dimensions, TouchableOpacity, FlatList, StyleSheet, RefreshControl, Linking} from 'react-native';
import {request} from '../../common/util';

const Diemnsions = require('Dimensions');
const w = Diemnsions.get('window').width;

export default class Subject extends Component {
  constructor(props){
    super(props);
    this.state = {
      subjectList: [],
      isRefreshing: false
    };
  }

  componentWillMount() {
    this._loadData();
  }

  _loadData() {
    request("/app/subject/index",
      (responseData)=>{
        this.setState({
          subjectList: responseData.result
        });
      },
      'POST'
    );
  }

  _onRefresh() {
    this.setState({
      isRefreshing: true,
      subjectList: []
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
      <View style={styles.container}>
        <Text style={styles.topic}>专题</Text>
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
            data={this.state.subjectList}
            renderItem={({ index, item }) => this._showCell(index, item)}
            keyExtractor={(item, index) => (index + '')}
          />
        </ScrollView>
      </View>
    );
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
