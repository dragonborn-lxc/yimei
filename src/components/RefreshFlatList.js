import React, {Component} from 'react';
import {Text, View, FlatList, ActivityIndicator, ScrollView, Image} from 'react-native';

export default class RefreshFlatList extends Component {

  onEndReached = () => {
    if (this.props.onEndReached) {
      this.props.onEndReached()
    }
  };

  renderFooter = () => {
    switch (this.props.showFoot) {
      case 0:
        {
          return null;
        }
      case 1:
        {
          return (
            <View style = {
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                height: 60
              }
            }>
              <ActivityIndicator/>
              <Text style = {{color: '#999999', fontSize: 14}}>
                正在加载更多数据...
              </Text>
            </View>
          )
        }
      case 2:
        {
          return (
            <View style = {{height: 60, alignItems: 'center', justifyContent: 'center'}}>
              <Text style = {{color: '#999999', fontSize: 14}}>
                没有更多数据了
              </Text>
            </View>
          );
        }
      default:
        return null;
    }
  };


  ListEmptyComponent = () => {
    return (
      <ScrollView contentContainerStyle = {{justifyContent: 'center', alignItems: 'center'}}>
        <Text style = {{color: '#9c9c9c'}}> {'暂无数据'} </Text>
      </ScrollView>
    )
  };

  ListFooterComponent = () => {
    return (
      <View>{this.props.ListFooterComponent}{this.renderFooter()}</View>
    )
  };

  render() {
    return (
      <FlatList
        {...this.props}
        data = {this.props.data}
        onEndReachedThreshold = {0.2}
        onEndReached = {this.onEndReached}
        ListEmptyComponent = {!this.props.noEmptyRemind && this.props.showFoot == 0 && this.ListEmptyComponent}
        ListFooterComponent = {this.ListFooterComponent}
        ref = {ref => this.flatList = ref}/>
    );
  }
}
