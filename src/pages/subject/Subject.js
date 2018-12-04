import React, {Component} from 'react';
import {Text, View, Image, FlatList, StyleSheet} from 'react-native';

const topic = [
  {
    uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543574357806&di=e97f9b4ebeed82dadfb25ef8d9e2e8ba&imgtype=0&src=http%3A%2F%2Fimg2.ph.126.net%2FLX9LqKEjkw5C9HCZXhMVFA%3D%3D%2F6597445799633346542.jpg'
  },
  {
    uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543574357806&di=e97f9b4ebeed82dadfb25ef8d9e2e8ba&imgtype=0&src=http%3A%2F%2Fimg2.ph.126.net%2FLX9LqKEjkw5C9HCZXhMVFA%3D%3D%2F6597445799633346542.jpg'
  },
  {
    uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543574357806&di=e97f9b4ebeed82dadfb25ef8d9e2e8ba&imgtype=0&src=http%3A%2F%2Fimg2.ph.126.net%2FLX9LqKEjkw5C9HCZXhMVFA%3D%3D%2F6597445799633346542.jpg'
  },
  {
    uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543574357806&di=e97f9b4ebeed82dadfb25ef8d9e2e8ba&imgtype=0&src=http%3A%2F%2Fimg2.ph.126.net%2FLX9LqKEjkw5C9HCZXhMVFA%3D%3D%2F6597445799633346542.jpg'
  },
  {
    uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543574357806&di=e97f9b4ebeed82dadfb25ef8d9e2e8ba&imgtype=0&src=http%3A%2F%2Fimg2.ph.126.net%2FLX9LqKEjkw5C9HCZXhMVFA%3D%3D%2F6597445799633346542.jpg'
  },
  {
    uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543574357806&di=e97f9b4ebeed82dadfb25ef8d9e2e8ba&imgtype=0&src=http%3A%2F%2Fimg2.ph.126.net%2FLX9LqKEjkw5C9HCZXhMVFA%3D%3D%2F6597445799633346542.jpg'
  }
];

export default class Subject extends Component {
  render() {
    return (
      <View style={styles.main}>
        <FlatList
          data={topic}
          renderItem={({ index, item }) => this.showCell(index, item)}
          keyExtractor={(item, index) => (index + '')}
        />
      </View>
    );
  }

  showCell(index, item) {
    return (
      <View style={styles.items}>
        <Image source={{ url: item.uri }}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    marginTop: 50
  },
  items: {
    marginBottom: 12,
    width: 300,
    height: 280,
    borderWidth: 1,
    borderColor: '#DCDCDC'
  }
});
