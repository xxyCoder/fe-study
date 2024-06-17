# 产生原因和作用
- JS对象本质是键值对的集合，但是只能使用字符串当键，而Map其类似于对象，但是键的范围不限于字符串

# 用法
1. 构造函数接收任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构作为参数
2. 使用"Same-value-zero equality"算法判断值是否相等
3. size
4. set(key,value): Map
5. get(key): any
6. has(key): boolean
7. delete(key): boolean
8. clear(): void
9. 允许遍历
  - 存在keys()、values()、entries()、forEach()
  - 其遍历顺序即为插入顺序

# 应用场景

# WeakMap
- 与WeakSet作用类似，结构与Map一致
- 应用场景
  1. DOM作为键名，保存状态
  2. 作为私有属性存储器