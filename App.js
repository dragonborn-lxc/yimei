import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TabBarIOS, Dimensions, Image} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
var {height,width} =  Dimensions.get('window');

type Props = {};
export default class App extends Component<Props> {
constructor(props){
        super(props)
        this.state = {
            selectedIndex:0
        }
    }
  async componentWillMount()
    {
        SplashScreen.hide();
    }
  render() {
    return (
      <View style={styles.container}>
                <TabBarIOS style={{height:49, width: width}}  tintColor="black">
                    <TabBarIOS.Item title="首页" onPress={()=>{
                      this.setState({selectedIndex:0})
                    }} selected={this.state.selectedIndex == 0}>
                        <View style={{flex:1}}>
      <Image
        style={{flex:1,width:width,height:height}}
        source={require('./image/02.jpg')}
        />
      </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item title ="分类" onPress={()=>{
                      this.setState({selectedIndex:1})
                    }} selected={this.state.selectedIndex == 1}>
<View style={{flex:1}}>
      <Image
        style={{flex:1,width:width,height:height}}
        source={require('./image/07.jpg')}
        />
      </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item title ="专题" onPress={()=>{
                      this.setState({selectedIndex:2})
                    }} selected={this.state.selectedIndex == 2}>
<View style={{flex:1}}>
      <Image
        style={{flex:1,width:width,height:height}}
        source={require('./image/10.jpg')}
        />
      </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item title ="我的" onPress={()=>{
                      this.setState({selectedIndex:3})
                    }} selected={this.state.selectedIndex == 3}>
<View style={{flex:1}}>
      <Image
        style={{flex:1,width:width,height:height}}
        source={require('./image/13.jpg')}
        />
      </View>
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
