import React, {Component} from 'react';
import {Text, View, Image, ScrollView, Dimensions, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import Goback from '../../common/Goback';

const Diemnsions = require('Dimensions');
const w = Diemnsions.get('window').width;

export default class Detail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '详情',
    headerLeft: <Goback navigation={navigation}/>
  });

  componentWillMount() {
    var artItems = [];
    var derivativeItems = [];
  }

  render() {
    const {params} = this.props.navigation.state;
    return (
      <ScrollView>
        <Image style={styles.cover} source={{url: params.item.cover}} />
        <View style={styles.desc}>
          <Text style={styles.title}>{params.item.name}</Text>
          {params.item.type == "1" ? <Text style={styles.parm}>{params.item.category}/{params.item.theme}/{params.item.size}/{params.item.year}</Text>: <Text style={styles.parm}>{params.item.category}/{params.item.style}/{params.item.size}/{params.item.year}</Text>}
          <View style={styles.row}>
            <Text style={styles.price}>{params.item.price}元</Text>
            <Text style={styles.freight}>运费： ￥50</Text>
          </View>
          
          <Text style={styles.introduce}>{params.item.description}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cover: {
    width: w,
    height: w,
    marginBottom: 14
  },
  desc: {
    marginLeft: 18,
    marginRight: 18
  },
  title: {
    fontSize: 15,
    marginBottom: 16
  },
  parm: {
    fontSize: 11,
    color: '#505050',
    marginBottom: 16
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  price: {
    color: 'red'
  },
  freight: {
    fontSize: 11
  },
  introduce: {
    fontSize: 11,
    color: '#A1A1A1'
  }
})
