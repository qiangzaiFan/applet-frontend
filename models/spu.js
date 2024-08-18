/**
 * @作者 阿强
 * @创建时间 2024-10-21 17:45
 */
import { Http } from '../utils/http'
import { data as spuData } from '../assets/json/wxshop/with_spu.js'


class Spu {
  static isNoSpec(spu) {
    if (spu.sku_list && spu.sku_list.length === 1 && spu.sku_list[0].specs.length === 0) {
      return true 
    }
    return false
  }

  //1. -条数据没有空
  //2. 最后一页，还有没有更多的数据
  //3. 累加100 1-2021-40 ...., setData 重新渲染页面
  //4.非分页数据: a.正在加载loading b.空
  //  分页数据: a.正在加载b. 加载完成c.没有更多数据
  //5. 上滑页面触底加载避免用户重复发请求redis 数据锁
  //按钮button 防抖截流。禁用倒计时模态loading
  // start count 10,0,10,20
  // 类 函数 ES6 class JS 主流语言 思维方式 OO 类
  // class JS 面向，模拟 00 class 统一

  // 1-20 21-40 41-60
  // 1-40 1-60

  static getDetail(id) {
    const data = JSON.parse(JSON.stringify(spuData))||[]
    console.log('----data,',data);
    const list = data.spu_list
    const newData = list.find((item)=>item[0])
    return newData
    // return Http.request({
    //   url: `spu/id/${id}/detail`
    // })
  }
}

export { Spu }
