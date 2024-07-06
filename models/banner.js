/**
 * @作者 阿强
 * @创建时间 2024-09-23 04:14
 */
import { Http } from '../utils/http'
import { data as themesBData } from '../assets/json/wxshop/bannerJs.js'

class Banner {
  static locationB = 'b-1'
  static locationG = 'b-2'
  static async getHomeLocationB() {
    const data = JSON.parse(JSON.stringify(themesBData))
    return data
    // return await Http.request({
    //   url: `banner/name/${Banner.locationB}`
    // })
  }

  static async getHomeLocationG() {
    return await Http.request({
      url: `banner/name/${Banner.locationG}`
    })
  }
}

export { Banner }
