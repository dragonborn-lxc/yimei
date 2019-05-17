import React, {Component} from 'react';
import {Text, View, Image, ScrollView, Dimensions, TouchableOpacity, FlatList, StyleSheet, RefreshControl} from 'react-native';
import {createStackNavigator, NavigationActions} from 'react-navigation';
import {request} from '../../common/util';
import UrlView from '../../components/UrlView';

const Diemnsions = require('Dimensions');
const w = Diemnsions.get('window').width;
const h = Diemnsions.get('window').height;

class SubjectMain extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null,
    gesturesEnabled: false,
  };

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

  _showCell(index, item) {
    return (
      <TouchableOpacity style={styles.items} onPress={() => {this.props.navigation.navigate('Detail', {url: item.url})}}>
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

const SubjectNavigator = createStackNavigator({
  Home: {
    screen: SubjectMain
  },
  Detail: {
    screen: UrlView
  }
});

export default class Subject extends Component {
  static router = SubjectNavigator.router;

  render() {
    return (
      <SubjectNavigator navigation={this.props.navigation}/>
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
