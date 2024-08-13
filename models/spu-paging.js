/**
 * @作者 阿强
 * @创建时间 2024-10-12 18:07
 */
import { Paging } from '../utils/paging'
import { data as spuData } from '../assets/json/wxshop/spu.js'

class SpuPaging {
  static getLatestPaging() {
    const data = JSON.parse(JSON.stringify(spuData))
    return data
    // return new Paging(
    //   {
    //     url: `spu/latest`
    //   },
    //   5
    // )
  }
}

export { SpuPaging }
