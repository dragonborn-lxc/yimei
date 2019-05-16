import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const Diemnsions = require('Dimensions');
const w = Diemnsions.get('window').width;

export default class Dropdown extends Component {
  static defaultProps = {
    defaultIndex: 0,
    defaultStyleFlex: 2,
    defaultTextSize: 13,
    defaultTextWeight: '200',
    defaultSeparatorHeight: 1,
    defaultSeparatorColor: 'black',
    defaultColor: 'black'
  };

  static propTypes = {
    data: PropTypes.array.isRequired,
    onSelect: PropTypes.func,
    icon: PropTypes.string,
    styleFlex: PropTypes.number,
    textSize: PropTypes.number,
    textWeight: PropTypes.string,
    separatorHeight: PropTypes.number,
    separatorColor: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      ...props,
      defaultValue: props.data && props.data.length > 0 ? props.data[0] : '无'
    }
  }

  render() {
    return (
      <ModalDropdown defaultIndex={this.props.defaultIndex} options={this.props.data}
      style={{flex: 2}}
      dropdownStyle={{width:w}}
      dropdownTextStyle={{
        fontSize: (this.props.textSize) ? this.props.textSize: this.props.defaultTextSize,
        fontWeight: (this.props.textWeight) ? this.props.textWeight: this.props.defaultTextWeight
      }}
      renderSeparator={() => <View style={{
        height: (this.props.separatorHeight) ? this.props.separatorHeight: this.props.defaultSeparatorHeight,
        color: (this.props.separatorColor) ? this.props.separatorColor: this.props.defaultSeparatorColor
      }}/>}
      adjustFrame={style => this._dropdown_adjustFrame(style)}
      onSelect={(idx, value) => this._dropdown_onSelect(idx, value)}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{
            fontSize: (this.props.textSize) ? this.props.textSize: this.props.defaultTextSize,
            fontWeight: (this.props.textWeight) ? this.props.textWeight: this.props.defaultTextWeight
          }}>
            {this.state.defaultValue}
          </Text>
          {this.props.icon == 'filter'? <Feather name="bar-chart" size={9} color="black" style={styles.filter}/>: <FontAwesome name="sort-down" size={9} color="black" style={styles.sort}/>}
        </View>
      </ModalDropdown>
    );
  }

  _dropdown_adjustFrame(style) {
    style.top += 6
    style.left = 0;
    return style;
  }

  _dropdown_onSelect(idx, value) {
    this.setState({defaultValue: value});
    this.props.onSelect(idx, value);
  }
}

const styles = StyleSheet.create({
  filter: {
    marginBottom:1,
    marginLeft: 5,
    transform: [{rotateY:'180deg'},{rotateZ:'270deg'}]
  },
  sort: {
    marginBottom:1,
    marginLeft: 5
  }
});
