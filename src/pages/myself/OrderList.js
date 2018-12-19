import React, {Component} from "react";
import {
    ActivityIndicator,
    RefreshControl,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    Image,
    Alert
} from "react-native";
import globalStyle from '../../../assets/nativeStyles/global';
import DashLine from '../../common/DashLine';
import Goback from '../../common/Goback';
import OrderButton from '../../common/OrderButton';

let totalPage=5;//总的页数
export default class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.navigation.getParam('id', 'NO-ID'),
          tab: 'ask',
          data: [],
          page: 1,
          limit: 5,
          refreshing: false,
          loading: true,
          error: null,
          showFoot: 0, // 控制foot， 0：隐藏footer  1：已加载完成,没有更多数据   2 ：显示加载中
          selectItem: 0,
        }

        this.tabList = ['全部', '待付款', '待发货', '待收货', '已完成'];
    }

    static navigationOptions = ({ navigation }) => ({
      title: '我的订单',
      headerTitleStyle: globalStyle.black15,
      headerLeft:(
           	<Goback navigation={navigation}/>
          ),
    });

    //网络请求——获取数据
    fetchData() {
      //这个是js的访问网络的方法
      fetch("https://cnodejs.org/api/v1/topics?tab=" + this.state.tab + "&page=" +this.state.page + "&limit=" + this.state.limit)
        .then((response) => response.json())        // json方式解析，如果是text就是 response.text()
        .then((responseData) => {   // 获取到的数据处理
          console.info(this.state.page, this.state.tab, this.state.actionType);
          let foot = 0;
          if(this.state.page>=totalPage){
              foot = 1;//listView底部显示没有更多数据了
          }
          this.setState({
            // data:this.state.data.concat( tempArray),
            data: [...this.state.data, ...responseData.data],
            error: responseData.error || null,
            loading: false,
            refreshing: false,
            showFoot:foot,
          })
        })
        .catch((error) => {
          console.log('==> fetch error', error);
          this.setState({ error: error, loading: false, refreshing: false});
        })
        .done();
    }

    fetchData2() {
      let foot = 0;
      if(this.state.page>=totalPage){
          foot = 1;//listView底部显示没有更多数据了
      }
      this.setState({
        // data:this.state.data.concat( tempArray),
        data: [{
          id:1
        }, {id:2}],
        error: null,
        loading: false,
        refreshing: false,
        showFoot:foot,
      })
    }

    componentDidMount() {
        this.fetchData();
    }
    shouldComponentUpdate() {
        return true
    }
    handleRefresh = () => {
        this.setState({
            page:1,
            refreshing:false,//tag,下拉刷新中，加载完全，就设置成flase
            data:[],
        }, ()=>this.fetchData()
      );
    }

    //加载等待页
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={true}
                    color='blue'
                    size="large"
                />
            </View>
        );
    }

    _keyExtractor = (item, index) => index+'';
    //加载失败view
    renderErrorView() {
        return (
            <View style={styles.container}>
                <Text>
                    {this.state.error}
                </Text>
            </View>
        );
    }

    //返回itemView
    _renderItemView({item}) {
        return (
          <View style={styles.row}>
            <View style={styles.rowTitle}>
              <View style={styles.rowTitleContent}>
                <Text style={globalStyle.black13}>订单编号:2019111101001578</Text>
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
                  <Text style={globalStyle.black14}>作品名称作品名称作品名称作品名称作品名称作品名称作品名称</Text>
                </View>
                <View style={styles.rowContentPrice}>
                  <View style= {{marginTop: 5}}>
                    <Text style={globalStyle.gray12}>实付金额:</Text>
                  </View>
                  <View style={{marginLeft: 5}}>
                    <Text style={globalStyle.black18}>99999.99元</Text>
                  </View>
                </View>
                <View style={styles.rowContentButton}>
                  <View style={styles.rowContentButtonEach}>
                    <OrderButton buttonName='联系客服'/>
                  </View>
                  <View style={styles.rowContentButtonEach}>
                    <OrderButton buttonName='查看物流'/>
                  </View>
                  <View style={styles.rowContentButtonEach}>
                    <OrderButton cycleColor='red' fontColor='rgb(255,65,65)' buttonName='取消订单'/>
                  </View>
                </View>

              </View>
            </View>

          </View>
        );
    }

    _selectTab=(selectItem)=> {
      let tabTemp = '';
      if (selectItem === 0) {
        tabTemp = 'share';
      } else if (selectItem === 1) {
        tabTemp = 'ask';
      } else if (selectItem === 2) {
        tabTemp = 'ask';
      } else if (selectItem === 3) {
        tabTemp = 'ask';
      } else if (selectItem === 4) {
        tabTemp = 'ask';
      }

      this.setState({
        selectItem: selectItem,
        tab: tabTemp,
        data: [],
        page: 1,
        refreshing:false,//tag,下拉刷新中，加载完全，就设置成flase
      }, this.fetchData());
      ;
    }

    renderData() {

        return (
          <View>
            <View style={styles.tab}>
            {
              this.tabList.map((item, index)=>{
                console.info(index);
                  return (
                    <View key={index} style={this.state.selectItem === index ?
                         [styles.eachTab, {borderBottomColor: 'black', borderBottomWidth: 1,}] : [styles.eachTab]}>
                      <TouchableOpacity onPress={this._selectTab.bind(this, index)}>
                          <Text style={this.state.selectItem === index ?
                              [globalStyle.black15] : [globalStyle.gray15] }>{item}</Text>
                      </TouchableOpacity>
                    </View>
                  )
              })
            }
            </View>
            <FlatList
                onRef={this.onRef}
                data={this.state.data}
                renderItem={this._renderItemView}
                ListFooterComponent={this._renderFooter.bind(this)}
                onEndReached={this._onEndReached.bind(this)}
                onEndReachedThreshold={1}
                ItemSeparatorComponent={this._separator}
                keyExtractor={this._keyExtractor}
                //为刷新设置颜色
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.handleRefresh.bind(this)}
                        colors={['#ff0000', '#00ff00','#0000ff','#3ad564']}
                        progressBackgroundColor="#ffffff"
                    />
                }
            />
          </View>
        );
    }

    render() {
      //第一次加载等待的view
      if (this.state.isLoading && !this.state.error) {
        return this.renderLoadingView();
      } else if (this.state.error) {
        //请求失败view
        return this.renderErrorView();
      } else {
        //加载数据
        return this.renderData();
      }

    }
    _separator(){
        return <View style={{height:1,backgroundColor:'#999999'}}/>;
    }
    _renderFooter(){
        if (this.state.showFoot === 1) {
            return (
                <View style={{height:30,alignItems:'center',justifyContent:'flex-start',}}>
                    <Text style={{color:'#999999',fontSize:14,marginTop:5,marginBottom:5,}}>
                        没有更多数据了
                    </Text>
                </View>
            );
        } else if(this.state.showFoot === 2) {
            return (
                <View style={styles.footer}>
                    <ActivityIndicator />
                    <Text>正在加载更多数据...</Text>
                </View>
            );
        } else if(this.state.showFoot === 0){
            return (
                <View style={styles.footer}>
                    <Text></Text>
                </View>
            );
        }
    }

    _onEndReached(){
        //如果是正在加载中或没有更多数据了，则返回
        if(this.state.showFoot != 0 ){
            return ;
        }
        //如果当前页大于或等于总页数，那就是到最后一页了，返回
        if((this.state.page!=1) && (this.state.page>=totalPage)){
            return;
        } else {
            this.state.page++;
            //底部显示正在加载更多数据
            this.setState({
              showFoot:2,
            }, ()=>this.fetchData());
        }
    }
}

const styles = StyleSheet.create({
    tab: {
      flexDirection: 'row',
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
      justifyContent: 'space-between',
      height: 40,
    },
    eachTab: {
      justifyContent: 'center',
      marginLeft: 14,
      marginRight: 14,
    },
    container: {
        padding:10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    footer:{
        flexDirection:'row',
        height:24,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
    },
    content: {
        marginBottom:8,
        marginLeft:8,
        marginRight:8,
        fontSize: 14,
        color: 'black',
    },
    row: {
      height: 185,
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
      padding: 11,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    image: {
      height: 126,
      width: 126,
    },
    rowContentData: {
      height: 126,
      width: 210,
    },
    rowContentTitle: {
      height: 78,
    },
    rowContentPrice: {
      marginLeft: 44,
      height: 20,
      flexDirection: 'row',
    },
    rowDataDesc: {
      height: 16,
      flexDirection: 'row',
    },
    rowDataPrice: {
      height: 24,
    },
    rowContentButton: {
      flexDirection: 'row',
      marginTop: 10,
      marginRight: 20,
       justifyContent:'flex-end'
    },
    rowContentButtonEach: {
      marginRight: 3,
      marginLeft: 3
    }

});
