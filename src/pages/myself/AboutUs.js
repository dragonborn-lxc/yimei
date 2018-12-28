import React from 'react'
import { View, Text } from 'react-native'

import globalStyle from '../../../assets/nativeStyles/global';
import {getLocalStorage, setLocalStorage, request} from '../../common/util';
import Goback from '../../common/Goback';


export default class AboutUs extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: '关于我们',
    headerTitleStyle: globalStyle.black15,
    headerLeft: <Goback navigation={navigation}/>,
  });


  render() {
    return (
      <View style={{flex: 1,  alignItems: 'center', marginTop: 70, marginLeft: 22, marginRight: 22}}>
        <Text style={[globalStyle.black12, {lineHeight:22}]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上海艺魅咖啡画廊以百年剧院上海人民大舞台的一楼二楼为旗舰，发展艺家艺术超市、艺魅咖啡画廊及艺魅艺术网三大品牌，通过线上线下同步，场馆内外结合，主题活动和陈列展示交易相结合的方式，创新经营。</Text>
      </View>

    );
  }
}
