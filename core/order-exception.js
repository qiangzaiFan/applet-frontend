/**
 *   @作者 强仔
  
 */

class OrderException extends Error {
  type

  constructor(msg, type) {
    super()
    this.message = msg
    this.type = type
  }
}

export { OrderException }
