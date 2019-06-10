import React, {Component} from 'react';
import {Text, View, Image, ScrollView, Dimensions, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Goback from '../../common/Goback';
import {request} from '../../common/util';

const Diemnsions = require('Dimensions');
const w = Diemnsions.get('window').width;
const h = Diemnsions.get('window').height;

export default class Detail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '详情',
    headerLeft: <Goback navigation={navigation}/>
  });

  constructor(props){
    super(props);
    this.state = {
      cover: '',
      diagram: [],
      product: '',
    }
  }

  componentWillMount() {
    request("/app/detail/index?id=" + this.props.navigation.state.params.item.id,
      (responseData)=>{
        this.setState({
          cover: responseData.result.cover,
          diagram: responseData.result.diagram,
          product: responseData.result.product
        });
      },
      'POST'
    );
  }

  _showCell(index, item) {
    return (
      <Image style={styles.diagram} source={{uri: item}}/>
    )
  }

  render() {
    const {params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          { this.state.cover == null ? <Image style={styles.cover}/> : <Image style={styles.cover} source={{url: this.state.cover}}/>}
          <View style={styles.desc}>
            <Text style={styles.title}>{params.item.name}</Text>
            {( ()=>{
              switch(params.type){
                case 1:
                  return <Text style={styles.parm}>{params.item.category}/{params.item.theme}/{params.item.size}/{params.item.year}</Text>;
                  break;
                case 2:
                  return <Text style={styles.parm}>{params.item.category}/{params.item.texture}/{params.item.size}/{params.item.year}</Text>;
                  break;
                default:
                  return null;
              }
            })()}
            <View style={styles.row}>
              <Text style={styles.price}>{params.item.price}元</Text>
              <Text style={styles.freight}>运费： ￥50</Text>
            </View>
            <Text style={styles.introduce}>{this.state.product.description}</Text>
            <FlatList
              data={this.state.diagram}
              renderItem={({index, item}) => this._showCell(index, item)}
              keyExtractor={(item, index) => (index + '')}
            />
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.collect}>
              <FontAwesome name="star-o" size={25} color="#505050" style={{marginTop:6}}/>
              <Text style={styles.collecttext}>收藏</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.buy}>
              <Text style={styles.buytext}>立即购买</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  },
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
    paddingBottom: 10,
    fontSize: 11,
    color: '#A1A1A1'
  },
  diagram: {
    width: w,
    height: w
  },
  footer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  actions: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttons: {
    flex: 1
  },
  collect: {
    width: 40,
    alignItems: 'center',
  },
  collecttext: {
    fontSize: 11,
    color: "#505050"
  },
  buy: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange'
  },
  buytext: {
    fontSize: 18,
    color: '#F5F5F5'
  }
})
