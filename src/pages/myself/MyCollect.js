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
    Image,
    DeviceEventEmitter
} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import globalStyle from '../../../assets/nativeStyles/global';
import Goback from '../../common/Goback';
import {getLocalStorage, request, post} from '../../common/util';

let totalPage=5;//总的页数
export default class MyCollect extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userId: this.props.navigation.getParam('userId'),
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
      headerLeft: <Goback navigation={navigation} additionalFun={() => {
        DeviceEventEmitter.emit('refresh',{})
      }}/>,
    });

    fetchData() {
      post("/app/operate/collect/all",
        {
          "pageNumber": this.state.page,
          "pageSize": totalPage,
          "userId": this.state.userId
        },
        (responseData)=>{
          if (responseData.result  &&  responseData.result.length > 0) {
            this.setState({
              data: [...this.state.data, ...responseData.result],
              error: responseData.error || null,
              loading: false,
              refreshing: false,
              showFoot: 0
            })
     		 	} else {
     		 		this.setState({
  						showFoot: 1
  					});
     		 	}
        },
        'POST'
      );
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
              {item.thumbnailImgUrl == null || item.thumbnailImgUrl == ""? <Image style={styles.image}/>: <Image style={styles.image} source={{ uri: item.thumbnailImgUrl }} />}
            </View>
            <View style={styles.rowContentData}>
              <View style={styles.rowContentTitle}>
                <Text style={globalStyle.black15}>{item.name}</Text>
              </View>
              <View style={styles.rowContentAuther}>
                <Text style={globalStyle.black12}>{item.brand}{item.artist? "/":""}{item.artist}</Text>
              </View>
              <View style={styles.rowContentPrice}>
                <Text style={globalStyle.red14}>{item.price}元</Text>
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

    deleteRow = (deleteItem)=> {
      post("/app/operate/collect/uncollect",
        {"userId": this.state.userId, "prodId": deleteItem.id},
        (responseData)=>{
          const newData = [...this.state.data];
          const prevIndex = this.state.data.findIndex(item => item === deleteItem);
          newData.splice(prevIndex, 1);
          this.setState({data: newData});
          this._flatListRef._onClose();
        },
        'POST'
      );
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
