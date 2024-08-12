/**
 *   @作者 强仔
  
  
  
  
 * @创建时间 2019-08-30 20:56
 */
import { Http } from '../utils/http'

class User {
  static async updateUserInfo(data) {
    return Http.request({
      url: `user/wx_info`,
      data,
      method: 'POST'
    })
  }
}

export { User }
