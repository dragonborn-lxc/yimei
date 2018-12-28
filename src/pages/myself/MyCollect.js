import React, {Component} from "react";
import {
    ActivityIndicator,
    RefreshControl,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    SwipeableFlatList,
    TouchableHighlight,
    Image
} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import globalStyle from '../../../assets/nativeStyles/global';
import Goback from '../../common/Goback';

let totalPage=5;//总的页数
export default class MyCollect extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.navigation.getParam('id', 'NO-ID'),
          tab: 'ask',
          data: [],
          page: 1,
          limit: 10,
          refreshing: false,
          loading: true,
          error: null,
          showFoot:0, // 控制foot， 0：隐藏footer  1：已加载完成,没有更多数据   2 ：显示加载中
        }
    }

    static navigationOptions = ({ navigation }) => ({
      title: '我的收藏',
      headerTitleStyle: globalStyle.black15,
      headerLeft: <Goback navigation={navigation}/>,
    });

    //网络请求——获取数据
    fetchData() {
      //这个是js的访问网络的方法
      fetch("https://cnodejs.org/api/v1/topics?tab=" + this.state.tab + "&page=" +this.state.page + "&limit=" + this.state.limit)
        .then((response) => response.json())        // json方式解析，如果是text就是 response.text()
        .then((responseData) => {   // 获取到的数据处理
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

    componentDidMount() {
        this.fetchData();
    }
    shouldComponentUpdate() {
        return true
    }
    handleRefresh = () => {
        this.setState({
            page:1,
            refreshing:true,//tag,下拉刷新中，加载完全，就设置成flase
            data:[],
        }, ()=>this.fetchData());

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
            <View >
              <Image style={styles.image} source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543510657993&di=cf476dc889bc6051174643644a996d6b&imgtype=0&src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0817%2Fthumb_1076_500_1439772675975.jpg' }} />
            </View>
            <View style={styles.rowContentData}>
              <View style={styles.rowContentTitle}>
                <Text style={globalStyle.black15}>{item.id}</Text>
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
        );
    }

    renderQuickActions({item}: Object): ?React.Element<any> {
      return (
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={[styles.actionButton]}
            onPress={this.deleteRow.bind(this, item)}>
            <Text style={styles.actionButtonText}>删除</Text>
          </TouchableOpacity>
        </View>
      );
    }

    deleteRow =(deleteItem)=> {
      // todo 删除数据
      const newData = [...this.state.data];

      const prevIndex = this.state.data.findIndex(item => item === deleteItem);
      newData.splice(prevIndex, 1);
      this.setState({data: newData});
      this._flatListRef._onClose();
    }

    renderData() {
        return (
            <SwipeableFlatList
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

                bounceFirstRowOnMount={false}
                maxSwipeDistance={100}
                renderQuickActions={this.renderQuickActions.bind(this)}
                ref={ref => {
                  this._flatListRef = ref;
                }}
            />

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
      height: 124,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: 'white',
    },
    image: {
      height: 105,
      width: 105,
    },
    rowContentData: {
      height: 105,
      width: 195,
      marginLeft: 25,
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
    actionsContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: '#FF0000',
    },
    actionButton: {
      padding: 10,
      width: 100,
      backgroundColor: '#FF0000',
    },
    actionButtonText: {
      textAlign: 'center',
      color: 'white',
    },
});
