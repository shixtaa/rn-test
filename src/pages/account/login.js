import React, { Component } from 'react'
import { View,Image, StatusBar,StyleSheet,Text } from 'react-native'
import {pxToDp,screenWidth} from '../../utils/styleKits'
import { Input } from 'react-native-elements';
import validator from '../../utils/validator'
import request from '../../utils/request'
import {ACCOUNT_LOGIN,ACCOUNT_VALIDATEVCODE} from '../../utils/pathMap'
import THButton from '../../components/THButton/index'
import Toast from '../../utils/toast'
import {
  CodeField,
  Cursor
} from 'react-native-confirmation-code-field';
export default class Login extends Component{
  state={
    phoneNumber:'18862800516',
    showError:false,
    showLogin:true,
    vcodeValue:'',
    btnText:'重新获取',
    isCountDowning:true
  }

  phoneNumberChange=(phoneNumber)=>{
    this.setState({
      phoneNumber
    })
    console.log(phoneNumber)
  }

  submit=async()=>{
    let result=validator.validatePhone(this.state.phoneNumber)
    //不合法
    if(!result){
      this.setState({
        showError:!result
      })
      return;
    }else{
      const res=await request.post(ACCOUNT_LOGIN,{phone:this.state.phoneNumber})
      console.log(res);
      if(res.code=='10000'){
        this.setState({
          showLogin:false
        })
        this.countDown()
      }
    }
  }
  //开启定时器
  countDown=()=>{
    this.setState({
      isCountDowning:true
    })
    let seconds=5
    this.setState({
      btnText:`重新获取${seconds}s`
    })
    let timer=setInterval(() => {
      seconds--
      this.setState({
        btnText:`重新获取${seconds}s`
      })
      if(seconds==0){
        clearInterval(timer)
        this.setState({
          btnText:"重新获取",
          isCountDowning:false
        })
      }
    }, 1000);
  }
  //重新获取
  resetCount=()=>{
    if(this.state.isCountDowning){
      return 
    }else{
      this.countDown()
    }
  }
  //渲染登陆界面
  renderLogin=()=>{
    return (
      <View>
          <Text style={{color:'#888',fontSize:26,fontWeight:'bold'}}>手机号登录注册</Text>
          <View style={{marginTop:pxToDp(30)}}>
            <Input
              placeholder='请输入手机号码'
              maxLength={11}
              keyboardType={'phone-pad'}
              // value="18862800516" //值 可以是固定的也可以是变量
              value={this.state.phoneNumber}
              onChangeText={this.phoneNumberChange}
              inputStyle={{color:'#333'}}
              errorMessage={this.state.showError?"手机号码格式不正确":""}
              onSubmitEditing={this.submit}
              leftIcon={{ type: 'font-awesome', name: 'phone' ,color:"#ccc",size:pxToDp(20)}}
            />
          </View>
          <View>
            <THButton 
              onPress={this.submit} 
              style={{width:"75%",height:pxToDp(40),alignSelf:'center',borderRadius:pxToDp(20)}}
            >
              获取验证码
            </THButton>
          </View>
        </View>
    )
  }

  //渲染验证码页面
  renderVcode=()=>{
    return(
      <View>
        <View>
          <Text>输入6位验证码</Text>
        </View>
        <View>
          <Text>已发到：+86 {this.state.phoneNumber}</Text>
        </View>
        <View style={{marginTop:pxToDp(10)}}>
          <CodeField
            value={this.state.vcodeValue}
            onChangeText={this.handleVcode}
            cellCount={6}
            rootStyle={styles.codeFiledRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            onSubmitEditing={this.onVcodeSubmitEditing}
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
        <View style={{marginTop:pxToDp(10)}}>
            <THButton 
              disabled={this.state.isCountDowning}
              onPress={this.resetCount}
              style={{width:"75%",height:pxToDp(40),alignSelf:'center',borderRadius:pxToDp(20)}}
            >
              {this.state.btnText}
            </THButton>
          </View>
      </View>
    )
  }

  //输入验证码修改
  handleVcode=(text)=>{
    this.setState({
      vcodeValue:text
    })
  }
   // 验证码输入完毕事件
   onVcodeSubmitEditing=async()=>{
    /* 
    1 对验证码做校验  长度
    2 将手机号码和验证码 一起发送到后台 
    2.5 
      将用户数据存放到 mobx中
    3 返回值 有 isNew  
    4 新用户 -> 完善个人信息的页面 
    5 老用户 -> 交友 - 首页
     */

     const { vcodeValue,phoneNumber}=this.state;
     if(vcodeValue.length!=6){
      Toast.message("验证码不正确",2000,"center");
       return;
     }

     const res=await request.post(ACCOUNT_VALIDATEVCODE,{
       phone:phoneNumber,
       vcode:vcodeValue
     });
     if(res.code!="10000"){
      console.log(res);
       return;
     }

     if(res.data.isNew){
      //  新用户 UserInfo
      this.props.navigation.navigate("UserInfo");
 
     }else{
      //  老用户
      alert("老用户")
     }
  }
  render() {
    return (
      <View>
      {/* 状态栏 透明 整个视图向上 */}
      <StatusBar backgroundColor="transparent" translucent={true}></StatusBar>
      <Image style={styles.bgcImg}  source={require("../../res/profileBackground.jpg")}></Image>
      {/* 内容 */}
      <View style={{padding:pxToDp(20)}}> 
        {this.state.showLogin?this.renderLogin():this.renderVcode()}
      </View>
    </View>
    )
  }
}

const styles=StyleSheet.create({
  bgcImg:{
    width:screenWidth,
    height:pxToDp(220)
  },
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
})
