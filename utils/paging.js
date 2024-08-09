/**
 * @作者 阿强
 * @创建时间 2024-10-13 15:03
 */
import { Http } from './http'

class Paging {
  //不关心细节
  //嗨， 我需要下一页的数据了，你能给我吗
  // 状态
  // 实例化
  // new Paging

  start
  count
  req
  locker = false
  url
  moreData = true // 当前是不是还有更多的数据
  accumulator = []

  constructor(req, count = 10, start = 0) {
    this.start = start
    this.count = count
    this.req = req
    this.url = req.url
  }

  async getMoreData() {
    if (!this.moreData) {
      return
    }
    if (!this._getLocker()) {
      return
    }
    const data = await this._actualGetData()
    this._releaseLocker()
    return data
  }

  async _actualGetData() {
    const req = this._getCurrentReq()
    let paging = await Http.request(req)
    if (!paging) {
      return null
    }
    if (paging.total === 0) {
      return {
        empty: true,
        items: [],
        moreData: false,
        accumulator: []
      }
    }

    this.moreData = Paging._moreData(paging.total_page, paging.page)
    if (this.moreData) {
      this.start += this.count
    }
    this._accumulate(paging.items)
    return {
      empty: false,
      items: paging.items,
      moreData: this.moreData,
      accumulator: this.accumulator
    }
  }

  _accumulate(items) {
    this.accumulator = this.accumulator.concat(items)
  }

  static _moreData(totalPage, pageNum) {
    return pageNum < totalPage - 1
  }

  _getCurrentReq() {
    let url = this.url
    const params = `start=${this.start}&count=${this.count}`
    if (url.includes('?')) {
      url += '&' + params
      // contains
    } else {
      url += '?' + params
    }
    this.req.url = url
    return this.req
  }

  _getLocker() {
    if (this.locker) {
      return false
    }
    this.locker = true
    return true
  }

  _releaseLocker() {
    this.locker = false
  }
}

export { Paging }
