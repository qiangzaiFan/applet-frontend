/**
 * @作者 阿强
 * @创建时间 2024-09-22 04:33
 */

import { Http } from '../utils/http'
import { data as themesAData } from '../assets/json/wxshop/themeJs.js'

class Theme {
  static locationA = 't-1'
  static locationE = 't-2'
  static locationF = 't-3'
  static locationH = 't-4'

  themes = []

  // 扩展性

  async getThemes() {
    const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`
    this.themes = await Http.request({
      url: `theme/by/names`,
      data: {
        names
      }
    })
  }

  getHomeLocationA() {
    const list = JSON.parse(JSON.stringify(themesAData))
    console.log('---themesAData,', list)
    return list[0]
    // return this.themes.find(t => t.name === Theme.locationA)
  }

  getHomeLocationE() {
    return this.themes.find(t => t.name === Theme.locationE)
  }

  getHomeLocationF() {
    return this.themes.find(t => t.name === Theme.locationF)
  }

  getHomeLocationH() {
    return this.themes.find(t => t.name === Theme.locationH)
  }

  static getHomeLocationESpu() {
    return Theme.getThemeSpuByName(Theme.locationE)
  }

  static getThemeSpuByName(name) {
    return Http.request({
      url: `theme/name/${name}/with_spu`
    })
  }
}

export { Theme }
