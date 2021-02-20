import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {pxToDp} from '../../utils/styleKits'
import SvgUri from'react-native-svg-uri'
import  DatePicker from 'react-native-datepicker' 
const female='<svg id="iconman-sel" viewBox="0 0 1024 1024"><path d="M299.148894 861.971499s153.977396-61.389681 152.971008-76.988698c-1.509582-27.675676-4.025553-66.421622-4.025553-66.421622 0-30.69484 24.656511-55.351351 55.351351-55.351351 30.191646 0 55.351351 24.656511 55.351352 55.351351v50.319411c0 14.592629 137.875184 159.009337 137.875184 159.009336" fill="#FDE8CF"></path><path d="M366.576904 810.142506s35.223587-0.503194 55.351352 0c23.650123 0.503194 51.325799 94.097297 85.039803 90.574939 41.261916-4.025553 55.351351-100.638821 81.014251-100.638821h60.383292c60.886486 0 98.12285 12.076658 98.12285 72.963145V1016.452088H265.938084v-143.410319c0-60.383292 39.752334-60.383292 100.63882-62.899263z" fill="#14AA82"></path><path d="M512 167.563636c150.958231 0 273.234398 122.276167 273.234398 273.234398v26.669288c0 150.958231-122.276167 273.234398-273.234398 273.234398s-273.234398-122.276167-273.234398-273.234398v-26.669288c0-150.958231 122.276167-273.234398 273.234398-273.234398z" fill="#FDE8CF"></path><path d="M834.54742 340.662408C834.54742 190.207371 696.169042 27.675676 564.332187 10.063882H462.183784C311.225553 10.063882 194.484521 168.06683 194.484521 318.521867c0 0 3.019165 34.720393-0.503194 21.134153C213.102703 417.651106 199.516462 394.000983 255.371007 374.879607c44.784275-15.095823 117.74742 31.701229 182.156266 26.166093 44.281081-3.522359 120.766585-35.726781 160.015725-54.848157 33.210811 22.643735 94.600491 61.892875 126.804914 60.886486 72.963145-3.019165 110.199509-66.421622 110.199508-66.421621z" fill="#2B435B"></path><path d="M236.752826 518.79312c-38.242752 0-68.937592-27.172482-68.937593-60.383292S198.510074 397.523342 236.752826 397.523342M789.763145 398.026536c36.73317 0 66.421622 27.172482 66.421622 60.886486s-56.35774 60.383292-66.421622 60.383292" fill="#FDE8CF"></path><path d="M404.316462 425.199017c18.114988 0 33.210811 15.095823 33.210811 33.210811s-15.095823 33.210811-33.210811 33.210811c-18.114988 0-33.210811-14.592629-33.210811-33.210811 0-18.114988 14.592629-33.210811 33.210811-33.210811z" fill="#012428"></path><path d="M603.078133 458.409828m-33.210811 0a33.210811 33.210811 0 1 0 66.421621 0 33.210811 33.210811 0 1 0-66.421621 0Z" fill="#012428"></path><path d="M600.058968 466.460934m-24.656511 0a24.656511 24.656511 0 1 0 49.313022 0 24.656511 24.656511 0 1 0-49.313022 0Z" fill="#012428"></path><path d="M365.570516 524.328256c21.134152 0 38.745946 8.5543 38.745946 19.121375s-17.1086 19.121376-38.745946 19.121376-38.745946-8.5543-38.745946-19.121376 17.1086-19.121376 38.745946-19.121375zM657.92629 524.328256c21.134152 0 38.745946 8.5543 38.745946 19.121375s-17.1086 19.121376-38.745946 19.121376-38.745946-8.5543-38.745946-19.121376 17.611794-19.121376 38.745946-19.121375z" fill="#FA6E6E"></path><path d="M580.937592 579.679607c-0.503194 39.752334-32.707617 71.453563-72.459951 70.950368-39.24914-0.503194-70.950369-32.204423-70.950368-70.950368" fill="#EB4545"></path></svg>'
const male='<svg id="iconnv" viewBox="0 0 1024 1024"><path d="M836.560197 696.420639V340.662408C836.560197 190.207371 698.181818 27.675676 566.344963 10.063882H464.19656C313.238329 10.063882 196.497297 168.06683 196.497297 318.521867l-5.535135 377.395578c0 150.455037-33.210811 152.467813-38.745946 162.531695s176.62113 38.745946 176.62113 38.745946H439.036855l143.410319-16.605405s238.010811-19.62457 237.507617-38.745946c0-6.038329 82.523833-42.771499 38.745946-38.745946-24.656511 3.019165-21.637346-15.599017-22.14054-106.67715z" fill="#EB4545"></path><path d="M301.161671 861.971499S455.139066 800.581818 454.132678 784.982801c-1.509582-27.675676-4.025553-66.421622-4.025553-66.421622 0-30.69484 24.656511-55.351351 55.351352-55.351351s55.351351 24.656511 55.351351 55.351351v50.319411c0 14.592629 137.875184 159.009337 137.875184 159.009336" fill="#FDE8CF"></path><path d="M378.653563 805.110565c15.095823 1.006388 29.688452 3.522359 44.281081 6.541523 23.146929 5.535135 52.332187 92.084521 86.046191 89.065357 41.261916-4.025553 58.87371-93.594103 85.039804-93.594103 18.114988-1.006388 36.229975-3.522359 53.841769-6.541524 62.899263 0.503194 98.626044 69.94398 98.12285 130.327273v80.511056l-478.034398-0.503194V915.813268c0-60.383292 49.816216-108.186732 110.702703-110.702703z" fill="#29BE96"></path><path d="M514.012776 167.563636c150.958231 0 273.234398 122.276167 273.234398 273.234398v26.669288c0 150.958231-122.276167 273.234398-273.234398 273.234398-150.958231 0-273.234398-122.276167-273.234398-273.234398v-26.669288c0-150.958231 122.276167-273.234398 273.234398-273.234398z" fill="#FDE8CF"></path><path d="M836.560197 340.662408C836.560197 190.207371 698.181818 27.675676 566.344963 10.063882H464.19656C313.238329 10.063882 196.497297 168.06683 196.497297 318.521867c0 0 3.019165 34.720393-0.503194 21.134153 19.121376 77.491892 5.535135 53.841769 60.886487 34.720393 44.784275-15.095823 117.74742 31.701229 182.156265 26.166093 44.281081-3.522359 120.766585-35.726781 160.015725-54.848157 33.210811 22.643735 94.600491 61.892875 126.804914 60.886486 73.466339-2.515971 110.702703-65.918428 110.702703-65.918427z" fill="#EB4545"></path><path d="M238.765602 518.79312c-38.242752 0-68.937592-27.172482-68.937592-60.383292S200.52285 397.523342 238.765602 397.523342M791.775921 398.026536c36.73317 0 66.421622 27.172482 66.421622 60.886486s-29.688452 60.383292-66.421622 60.383292" fill="#FDE8CF"></path><path d="M406.329238 425.199017c18.114988 0 33.210811 15.095823 33.210811 33.210811 0 18.114988-15.095823 33.210811-33.210811 33.210811-18.114988 0-33.210811-14.592629-33.21081-33.210811 0-18.114988 14.592629-33.210811 33.21081-33.210811z" fill="#012428"></path><path d="M605.090909 458.409828m-33.210811 0a33.210811 33.210811 0 1 0 66.421622 0 33.210811 33.210811 0 1 0-66.421622 0Z" fill="#012428"></path><path d="M602.071744 466.460934m-24.656511 0a24.656511 24.656511 0 1 0 49.313023 0 24.656511 24.656511 0 1 0-49.313023 0Z" fill="#012428"></path><path d="M367.583292 524.328256c21.134152 0 38.745946 8.5543 38.745946 19.121375s-17.1086 19.121376-38.745946 19.121376-38.745946-8.5543-38.745946-19.121376 17.1086-19.121376 38.745946-19.121375zM659.939066 524.328256c21.134152 0 38.745946 8.5543 38.745946 19.121375s-17.1086 19.121376-38.745946 19.121376-38.745946-8.5543-38.745946-19.121376 17.611794-19.121376 38.745946-19.121375z" fill="#FA6E6E"></path></svg>'
export default class userInfo extends Component {
  state={
    "nickname": "",
    "gender": "男",
    "birthday": "",
    "city": "",
    "header": "",
    "lng": "",
    "lat": "",
    "address": ""
  }
  render() {
    const dateNow=new Date()
    const currentDate=`${dateNow.getFullYear()}-${dateNow.getMonth()+1}-${dateNow.getDate()}`
    const {birthday}=this.state;
    return (
      <View style={{ backgroundColor: "#fff", flex: 1, padding: pxToDp(30) }}>
      {/* 1.0 标题 开始 */}
      <Text style={{ fontSize: pxToDp(20), color: "#666", fontWeight: "bold" }} >填写资料</Text>
      <Text style={{ fontSize: pxToDp(20), color: "#666", fontWeight: "bold" }} >提升我的魅力</Text>
      <SvgUri svgXmlData={female} width="30" height="30"/>
      <SvgUri svgXmlData={male} width="30" height="30"/>
      <View>
        <DatePicker
        androidMode="spinner"
          style={{width: "100%"}}
          date={birthday}
          mode="date"
          placeholder="选择日期"
          format="YYYY-MM-DD"
          minDate="1990-01-01"
          maxDate={currentDate}
          confirmBtnText="确认"
          cancelBtnText="取消"
          customStyles={{
            dateIcon: {
              display:'none'
            },
            dateInput: {
              marginLeft: pxToDp(10),
              marginTop:pxToDp(20),
              borderWidth:0,
              borderBottomWidth:pxToDp(1.1),
              alignItems:'flex-start',
              paddingLeft:pxToDp(10),
            },
            placeholderText:{
              
              color:'#888'
            }
          }}
          onDateChange={(birthday) => {this.setState({birthday})}}
        />
      </View>
      </View>
    )
  }
}
