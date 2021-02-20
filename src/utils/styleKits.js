// 设计稿宽度 / 元素的宽度 =手机屏幕 /手机中元素的宽度
// 手机中元素的宽度=手机屏幕 * 元素的宽度 / 设计稿宽度 (本列中为375)

import {Dimensions} from 'react-native'

/* 屏幕的宽度 */
export const screenWidth = Dimensions.get("window").width

/* 屏幕的高度 */
export const screenHeight = Dimensions.get("window").height

/* px 转 dp(安卓的像素单位) */
export const pxToDp=(elePx)=>{
  return screenWidth * elePx / 375 ;
}
