/**
 * @作者 阿强
 * @创建时间 2024-09-26 05:47
 */
import { Http } from '../utils/http'
import { data as themesCData } from '../assets/json/wxshop/category.js'
class Category {
  static async getHomeLocationC() {
    const list = JSON.parse(JSON.stringify(themesCData))
    return list
    // return await Http.request({
    //   url: `category/grid/all`
    // })
  }
}

export { Category }
