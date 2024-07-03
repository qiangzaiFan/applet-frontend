/**
 * @作者 阿强
 * @创建时间 2024-09-28 01:03
 */
import { Http } from '../utils/http'

class Activity {
  static locationD = 'a-2'
  static async getHomeLocationD() {
    return await Http.request({
      url: `activity/name/${Activity.locationD}`
    })
  }
}

export { Activity }
