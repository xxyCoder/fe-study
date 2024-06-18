# 产生原因和作用
- 解决回调地狱问题，让代码更容易维护和理解

# 用法
1. 构造函数接收一个函数作为参数，该函数接收resolve和reject作为参数，俩函数由JS引擎提供
  - resolve将promise状态由pending变为fulfilled
  - reject将promise状态由pending变为rejected
  - 状态一旦落定就不可改变
2. Promise.prototype.then()
  - 为实例添加状态改变时的回调函数，该回调函数返回新promise实例，故可以链式调用，但链式调用的then方法需要等待前一个then方法返回的promise状态落定
3. Promise.prototype.catch()
  - 语法糖，即then(null, fn)
4. Promise.prototype.finally()
  - 无论promise实例的状态如何都会执行，并返回前一个promise的结果
5. Promise.all()
  - 接受一个具有iterator接口的数据结构作为参数，且每个成员都是promise实例，如果不是则调用Promise.resolve包裹
    - 如果具有then方法，那么还需要等待then的promise落定
  - 只有所有promise的状态为fulfilled，最终返回的promise为fulfilled，否则为rejected
6. Promise.race()
  - 接受参数和Promise.all一致，但是只要参数中任意一个promise首先改变了，Promise.race的状态值也会跟着改变
7. Promise.allSettled()
  - 和Promise.all()方法一致，区别在于promise结果只能是fulfilled，且promise的参数为数组，数组中每一项包含了该项promise的值和状态
8. Promise.any()
  - 和Promise.all()方法相反，只有参数中有promise为fulfilled，那么Promise.any的promise就为fulfilled
9. Promise.resolve()
  - 语法糖，即Promise实例调用resolve()
10. Promise.reject()
  - 语法糖，即Promise实例调用reject()
11. Promise.try()
  - 可让同步函数同步执行，异步函数异步执行，还能使用then方法指定下一步的流程

# 优点
1. 清晰的控制流程
2. 可链式调用

# 缺点
1. 缺乏取消操作的支持
2. 语法略显繁琐

# 应用场景
1. 网络请求
2. 异步文件读取