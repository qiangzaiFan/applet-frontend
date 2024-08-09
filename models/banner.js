/**
 * @作者 阿强
 * @创建时间 2024-09-23 04:14
 */
import { Http } from '../utils/http'
import { data as themesBData } from '../assets/json/wxshop/bannerJs.js'
import { data as themesGData } from '../assets/json/wxshop/banner2.js'

class Banner {
  static locationB = 'b-1'
  static locationG = 'b-2'
  static bannerGImgList = [
    '../../imgs/home/topBannerCompress2.png',
    '../../imgs/home/topBannerCompress1.png',
    '../../imgs/home/topBannerCompress2.png'
  ]
  static async getHomeLocationB() {
    const data = JSON.parse(JSON.stringify(themesBData))
    return data
    // return await Http.request({
    //   url: `banner/name/${Banner.locationB}`
    // })
  }

  static async getHomeLocationG() {
    let data = JSON.parse(JSON.stringify(themesGData))
    data.img = Banner.bannerGImgList[0]
    let items = data.items
    items.forEach((item, index) => {
      item.img = Banner.bannerGImgList[index]
    })
    return data
    // return await Http.request({
    //   url: `banner/name/${Banner.locationG}`
    // })
  }
}

export { Banner }
