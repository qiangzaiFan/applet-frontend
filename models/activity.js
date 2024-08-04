/**
 * @作者 阿强
 * @创建时间 2024-09-28 01:03
 */
import { Http } from '../utils/http'
import { data as themesDData } from '../assets/json/wxshop/activity'

class Activity {
  static locationD = 'a-2'
  static async getHomeLocationD() {
    let data = JSON.parse(JSON.stringify(themesDData))
    data.entrance_img = '../../imgs/home/topBannerCompress1.png';
    return data
    // return await Http.request({
    //   url: `activity/name/${Activity.locationD}`
    // })
  }
}

export { Activity }
