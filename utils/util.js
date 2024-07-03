/**
 * @作者 阿强
 * @创建时间 2024-09-22 15:56
 */

const promisic = function (func) {
  return function (params = {}) {
    return new Promise((resolve, reject) => {
      const args = Object.assign(params, {
        success: res => {
          resolve(res)
        },
        fail: error => {
          reject(error)
        }
      })
      func(args)
    })
  }
}

const combination = function (arr, size) {
  var r = []
  function _(t, a, n) {
    if (n === 0) {
      r[r.length] = t
      return
    }
    for (var i = 0, l = a.length - n; i <= l; i++) {
      var b = t.slice()
      b.push(a[i])
      _(b, a.slice(i + 1), n - 1)
    }
  }
  _([], arr, size)
  return r
}

// 代理模式

export { promisic, combination }
