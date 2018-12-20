import React from 'react'
import { Text, View, Image, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import globalStyle from '../../../assets/nativeStyles/global';
import Goback from '../../common/Goback';
import DashLine from '../../common/DashLine';

export default class OrderDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.navigation.getParam('itemId', 'NO-ID'),
      data: {}
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: '订单详情',
    headerTitleStyle: globalStyle.black15,
    headerLeft:<Goback navigation={navigation}/> ,
  });

  componentDidMount() {
    this.fetchData();
  }

  fetchData =()=> {
    //这个是js的访问网络的方法
    fetch("https://cnodejs.org/api/v1/topics?limit=1")
      .then((response) => response.json())        // json方式解析，如果是text就是 response.text()
      .then((responseData) => {   // 获取到的数据处理
        let item = {
          orderNo: '2019111101001578'
        }
        this.setState({
          data: item,
        })
      })
      .catch((error) => {
        // this.setState({});
      })
      .done();
  }

  render() {
    return (
      <View style={styles.row}>
        <View style={styles.rowTitle}>
          <View style={styles.rowTitleContent}>
            <Text style={globalStyle.black13}>订单编号:{this.state.data.orderNo}</Text>
          </View>
          <View style={styles.rowTitleContent}>
            <Text style={globalStyle.red13}>待付款</Text>
          </View>
        </View>
        <DashLine/>
        <View style={styles.rowContent}>
          <View>
            <Image style={styles.image} source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg' }} />
          </View>
          <View style={styles.rowContentData}>
            <View style={styles.rowContentTitle}>
              <Text style={globalStyle.black15}>作品名称作品名称作品名称作品名称作品名称作品名称</Text>
            </View>
            <View style={styles.rowContentAuther}>
              <Text style={globalStyle.black12}>作者名字</Text>
            </View>
            <View style={styles.rowContentDesc}>
              <Text style={globalStyle.gray11}>题材/</Text>
              <Text style={globalStyle.gray11}>材质/</Text>
              <Text style={globalStyle.gray11}>大小/</Text>
              <Text style={globalStyle.gray11}>创作年份</Text>
            </View>
            <View style={styles.rowContentPrice}>
              <Text style={globalStyle.red14}>999999.99元</Text>
            </View>
          </View>
        </View>
        <View style={styles.rowInfo}>
          <View style={[styles.rowInfoEach, {marginTop: 2,
          marginBottom: 4}]}>
            <Text style={globalStyle.black12}>订单信息</Text>
          </View>
          <View style={styles.rowInfoEach}>
            <Text style={globalStyle.gray10}>订单编号:{'  '} {this.state.data.orderNo}</Text>
          </View>
          <View style={styles.rowInfoEach}>
            <Text style={globalStyle.gray10}>下单时间:{'  '} 2018-01-16 17:46:06</Text>
          </View>
          <View style={[styles.rowInfoEach, {flexDirection: 'row'}]}>
            <Text style={globalStyle.gray10}>订单状态:{'  '}</Text>
            <Text style={globalStyle.green10}>订单完成</Text>
          </View>
        </View>
        <View style={styles.rowInfo}>
          <View style={[styles.rowInfoEach, {marginTop: 2,
          marginBottom: 4}]}>
            <Text style={globalStyle.black12}>订单明细</Text>
          </View>
          <View style={styles.rowDetailEach}>
            <Text style={globalStyle.black10}>商品金额:</Text>
            <Text style={globalStyle.black10}>999999.99元</Text>
          </View>
          <View style={styles.rowDetailEach}>
            <Text style={globalStyle.black10}>优惠金额:</Text>
            <Text style={globalStyle.black10}>0.00元</Text>
          </View>
          <View style={styles.rowDetailEach}>
            <Text style={globalStyle.black10}>应付金额:</Text>
            <Text style={globalStyle.red10}>999999.99元</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    row: {
      height: 350,
    },
    rowTitle: {
      height: 35,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    rowTitleContent: {
      justifyContent: 'center',
      marginLeft: 12,
      marginRight: 12,
    },
    rowContent: {
      padding: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 130,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5

    },
    image: {
      height: 105,
      width: 105,
    },
    rowContentData: {
      height: 105,
      width: 195,
      marginLeft: 25,
      marginRight: 35,
    },
    rowContentTitle: {
      height: 55,
    },
    rowContentAuther: {
      height: 16,
    },
    rowContentDesc: {
      height: 16,
      flexDirection: 'row',
    },
    rowContentPrice: {
      height: 16,
    },
    rowInfo: {
      height: 88,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
      padding: 8,
      paddingLeft: 14,
    },
    rowInfoEach: {
      marginTop: 2,
      marginBottom: 2,
    },
    rowDetailEach: {
      marginTop: 2,
      marginBottom: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
});
