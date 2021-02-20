import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {
  CodeField,
  Cursor
} from 'react-native-confirmation-code-field';
import { pxToDp } from '../utils/styleKits';
export default class demo extends Component {
  state={
    vcodeValue:''
  }
  //输入验证码修改
  handleVcode=(text)=>{
    this.setState({
      vcodeValue:text
    })
  }
  render() {
    return (
      <View style={{marginTop:pxToDp(100)}}>
        <CodeField
          value={this.state.vcodeValue}
          onChangeText={this.handleVcode}
          cellCount={6}
          rootStyle={styles.codeFiledRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    color: '#774aec'

  },
  focusCell: {
    borderColor: '#774aec',
  },
});