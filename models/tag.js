/**
 *   @作者 强仔
  
  
  
  
 */
import { Http } from '../utils/http'

class Tag {
  static getSearchTags() {
    return Http.request({
      url: `tag/type/1`
    })
  }
}

export { Tag }
