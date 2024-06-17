# 产生原因和作用
- JS中没有能够确保存储没有重复值的数据结果

# 用法
1. 使用"Same-value-zero equality"算法判断值是否相等
  - 即类似 ===，但是对于NaN认为自身等于自身
2. 构造函数接收一个有iterator接口的数据结构
3. add(value): Set
4. delete(value): boolean
5. has(value): boolean
6. clear(): void
7. size
8. 允许遍历
  - 存在keys()、values()、entries()、forEach()
  - 其遍历顺序即为插入顺序

# 应用场景
1. 实现交集、并集和差集

## WeakSet
- 产生原因和作用
  1. 考虑到存储后，忘记取消引用导致内存泄漏
  2. 适用需要存储，但是不能影响垃圾回收对其回收
    - 如DOM的存储
- 用法
  1. 只允许添加引用类型数据和Symbol类型
  2. 值为弱引用，即垃圾回收机制不考虑WeakSet对值的引用
  3. 垃圾回收机制何时运行是不可预测的，故ES6规定WeakSet不能遍历
  4. add(value): WeakSet
  5. has(value): boolean
  6. delete(value): boolean