/**
 *   @作者 强仔
  
  
  
  
 * @创建时间 2020-04-24 14:28
 */

class Address {
  static STORAGE_KEY = 'address'

  static getLocal() {
    const address = wx.getStorageSync(Address.STORAGE_KEY)
    return address ? address : null
  }

  static setLocal(address) {
    wx.setStorageSync(Address.STORAGE_KEY, address)
  }
}

export { Address }
