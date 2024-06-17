# 产生原因和作用
- 想要拿到语言内部方法，修改某些Object方法的返回结果，让其更合理
  - defineProperty方法在无法定义属性时，Object会抛出错误，而Reflect则返回false
- 现阶段，某些方法同时部署在Object和Reflect对象中，未来新方法只部署在Reflect对象中
- 让Object操作都变为函数式操作，如in、delete操作符
  - Reflect.has()、Reflect.deleteProperty()

# 用法
1. 每一个Proxy对象的拦截操作，内部都有对应的方法，保证原生行为能够正常执行