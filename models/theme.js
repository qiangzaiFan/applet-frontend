/**
 * @作者 阿强
 * @创建时间 2024-09-22 04:33
 */

import { Http } from '../utils/http'
import { data as themesAData } from '../assets/json/wxshop/names.js'
import { data as themesEDataSPU } from '../assets/json/wxshop/maoyi.js'

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
    return list[0]
    // return this.themes.find(t => t.name === Theme.locationA)
  }

  getHomeLocationE() {
    let list = JSON.parse(JSON.stringify(themesAData))
    return list[1]
    // return this.themes.find(t => t.name === Theme.locationE)
  }

  getHomeLocationF() {
    let list = JSON.parse(JSON.stringify(themesAData))
    list[2].entrance_img = '../../imgs/home/topBannerCompress2.png'
    return list[2]
    // return this.themes.find(t => t.name === Theme.locationF)
  }

  getHomeLocationH() {
    return this.themes.find(t => t.name === Theme.locationH)
  }

  static getHomeLocationESpu() {
    return Theme.getThemeSpuByName(Theme.locationE)
  }

  static getThemeSpuByName(name) {
    const data = JSON.parse(JSON.stringify(themesEDataSPU))
    return data
    // return Http.request({
    //   url: `theme/name/${name}/with_spu`
    // })
  }
}

export { Theme }
