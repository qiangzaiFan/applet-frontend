/**
 * @作者 阿强
 * @创建时间 2024-10-12 18:07
 */
import { Paging } from '../utils/paging'
import { data as spuData } from '../assets/json/wxshop/spu.js'

class SpuPaging {
  static getLatestPaging() {
    const data = JSON.parse(JSON.stringify(spuData))
    data.items.forEach((item,index) => {
      item.img = index%2===0?'../../imgs/home/topBannerCompress1.png':'../../imgs/home/topBannerCompress2.png'
    });
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
