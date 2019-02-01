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

  render() {
    const {params} = this.props.navigation.state;
    return (
      <ScrollView>
        {params.id == "1" ? <Image style={styles.logoImg} source={{url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg'}} />:<Image style={styles.logoImg} source={{url: 'https://img.zcool.cn/community/01c56959cc8b6ba801218e18217f50.jpg@1280w_1l_2o_100sh.jpg'}} />}
        <View style={styles.desc}>
          {params.id == "1" ? <Text style={styles.title}>最后的晚餐</Text>: <Text style={styles.title}>中秋节木盒</Text>}
          {params.id == "1" ? <Text style={styles.parm}>题材/材质/大小/创作年份</Text>: <Text style={styles.parm}>题材/材质/大小/创作年份</Text>}
          {params.id == "1" ?
            <View style={styles.row}>
              <Text style={styles.price}>99999元</Text>
              <Text style={styles.freight}>运费： ￥100</Text>
            </View>
            :
            <View style={styles.row}>
              <Text style={styles.price}>200元</Text>
              <Text style={styles.freight}>运费： ￥100</Text>
            </View>
          }
          {params.id == "1" ?
            <Text style={styles.introduce}>作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍</Text>
            :
            <Text style={styles.introduce}>衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍衍生品介绍</Text>
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  logoImg: {
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
