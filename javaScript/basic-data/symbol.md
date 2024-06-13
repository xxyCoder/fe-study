# 产生原因和作用
- 考虑到使用他人提供的对象，像为其添加新属性或者方法，可能会和对象中已存在的属性名或方法名冲突，所以需要创建出一个属性名或方法名是独一无二的
- Symbol的作用就是保证每个属性的名字独一无二，属于JS的原始类型

# 用法
1. 使用symbol()创建，可以接收一个字符串作为参数（非字符参数调用其toString方法），表示对Symbol实例的描述，该方法不能使用new调用
  - 不能使用new原因：生成的Symbol是原始类型的值，非引用类型，如果使用new调用则必须返回一个引用类型
  - Symbol.prototype.description返回该字符串参数，不能被修改、删除
2. typeof 实例得到的值为symbol
3. print 的值为Symbol(description)
4. 不能与其他类型的值进行运算，会报错
  - 可以显式转为String类型，也可以转为Boolean类型，但不能是Number类型（报TypeError）
5. 使用Object.getOwnPropertySymbol()获取指定对象的所有Symbol属性名
6. 对于希望重新使用同一个Symbol值，产生了Symbol.for()方法，接收一个字符串作为参数，搜索有没有以该参数作为名称的Symbol值，如果有则返回，如果没有则创建一个并注册到全局
7. Symbol.keyFor()接收已登记的Symbol作为参数，返回其description，未登记则返回undefined
8. 存在内置属性
  - Symbol.iterator、Symbol.toPrimitive、Symbol.toStringTag
9. 和对象一样有属性，但是添加额外属性失败
  - Symbol是已冻结、已密封和不可扩展的
10. 不能被序列化

# 好处
1. 唯一性避免了属性名冲突
2. 可以隐藏内部属性，防止外部意外访问

# 坏处
1. 常规（for in、for of）遍历无法被遍历到
2. 可调试性差

# 原理

# 总结