import { getSlashYMD } from '../../utils/date'

/**
 *   @作者 强仔

 */

class CouponData {
  startTime
  endTime
  status

  constructor(coupon, status) {
    Object.assign(this, coupon)
    this.startTime = getSlashYMD(coupon.start_time)
    this.endTime = getSlashYMD(coupon.end_time)
  }
}

export { CouponData }
