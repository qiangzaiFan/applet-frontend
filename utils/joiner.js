/**
 * @作者 阿强
 *

 * @创建时间 2024-11-04 09:31
 */

class Joiner {
  _str = ''
  _symbol = '-'
  _cutCharNum = 1
  constructor(symbol, cutCharNum) {
    if (symbol) {
      this._symbol = symbol
    }
    if (cutCharNum) {
      this._cutCharNum = cutCharNum
    }
  }
  join(part) {
    if (part) {
      this._str += `${part}${this._symbol}`
    }
  }
  getStr() {
    return this._str.substring(0, this._str.length - this._cutCharNum)
  }
}

export { Joiner }
