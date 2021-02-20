import { PermissionsAndroid, Platform } from "react-native";
import { init, Geolocation } from "react-native-amap-geolocation";
import axios from "axios";
class Geo {
  //初始化
  async initGeo() {
    if (Platform.OS === "android") {
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION);
    }
    await init({
      //高低地图我的应用中android端的key
      ios: "b06765e99d8a4badad95656915a20893",
      android: "b06765e99d8a4badad95656915a20893"
    });
    return Promise.resolve();
  }
  //获取当前的地理位置
  // async getCurrentPosition() {
  //   return new Promise((resolve, reject) => {
  //     console.log("开始定位");
  //     Geolocation.getCurrentPosition(({ coords }) => {
  //       resolve(coords);
  //     }, reject);
  //   })
  // }
  //根据拿到的地理位置，获得经纬度，然后作为参数调用高德api
  // async getCityByLocation() {
  //   await init({
  //     //高低地图我的应用中android端的key
  //     ios: "b06765e99d8a4badad95656915a20893",
  //     android: "b06765e99d8a4badad95656915a20893"
  //   });
  //   const { longitude, latitude } = await this.getCurrentPosition();
  //   const res = await axios.get("https://restapi.amap.com/v3/geocode/regeo", {
  //     //key是高低地图我的应用中web服务的key
  //     params: { location: `${longitude},${latitude}`, key: "fea668367b85e167f6e6e9435793e1e6", }
  //   });
  //   return Promise.resolve(res.data);
  // }
  async getCityByLocation() {
    Toast.showLoading("努力获取中")
    const { longitude, latitude } = await this.getCurrentPosition();
    const res = await axios.get("https://restapi.amap.com/v3/geocode/regeo", {
      // key  高德地图中第一个应用的key
      params: { location: `${longitude},${latitude}`, key: "fea668367b85e167f6e6e9435793e1e6", }
    });
    Toast.hideLoading();
    return Promise.resolve(res.data);
  }
}


export default new Geo();