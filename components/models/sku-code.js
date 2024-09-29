/**
 *   @作者 强仔
 */
import { combination } from '../../utils/util'

class SkuCode {
  code
  spuId
  totalSegments = []

  constructor(code) {
    this.code = code
    this._splitToSegments()
  }

  // code码分割成片段
  _splitToSegments() {
    // 2$1-44#3-9#4-14
    //获取sku的所有路径

    const spuAndSpec = this.code.split('$')
    this.spuId = spuAndSpec[0]

    const specCodeArray = spuAndSpec[1].split('#')
    const length = specCodeArray.length

    for (let i = 1; i <= length; i++) {
      const segments = combination(specCodeArray, i)
      const newSegments = segments.map(segs => {
        return segs.join('#')
      })
      // console.log('---newSegments,',newSegments);
      this.totalSegments = this.totalSegments.concat(newSegments)
    }
    // 尽量少写显式的for循环
    // for for
    // 类、函数
  }
}

export { SkuCode }
