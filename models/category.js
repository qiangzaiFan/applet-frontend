/**
 * @作者 阿强
 * @创建时间 2024-09-26 05:47
 */
import { Http } from '../utils/http'

class Category {
  static async getHomeLocationC() {
    return await Http.request({
      url: `category/grid/all`
    })
  }
}

export { Category }
