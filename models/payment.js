/**
 *   @作者 强仔
 * @创建时间 2020-05-04 22:02
 */
import { Http } from '../utils/http'

class Payment {
  static async getPayParams(orderId) {
    const serverParams = await Http.request({
      url: `payment/pay/order/${orderId}`,
      method: 'POST'
    })
    return serverParams
  }
}

export { Payment }
