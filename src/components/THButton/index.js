import React, { Component } from 'react'
import { Text,StyleSheet,TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { pxToDp } from '../../utils/styleKits';
export default class index extends Component {
  static defaultProps={
    style:{},
    textStyle:{},
    disabled:false
  }
  render() {
    return (
      <TouchableOpacity disabled={this.props.disabled} onPress={this.props.onPress} style={{width:"100%",height:"100%",overflow:"hidden",...this.props.style}}>
        <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} colors={['#9e65ca', '#dc6788']} style={styles.linearGradient}>
          <Text style={{...styles.buttonText,...this.props.textStyle}}>
            {this.props.children}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: pxToDp(15),
    paddingRight: pxToDp(15),
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems:'center'
  },
  buttonText: {
    fontSize: pxToDp(18),
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: pxToDp(10),
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
