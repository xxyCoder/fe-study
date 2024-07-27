# 作用
- 工具类

# 方法
1. inspect(obj[, showHidden[, depth[, color]]])
  - 用于调试object的字符串表示，showHidden允许检测WeakMap和WeakSet条目
2. promisify(original: Function)
  - 返回一个promise版本
  - 如果original存在[util.promisify.custom]属性，则返回该属性的值