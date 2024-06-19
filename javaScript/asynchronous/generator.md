# 产生原因和作用
- 为了解决promise.then中嵌套promise.then方法导致可读性降低
- generator提供了暂停和恢复功能，使得异步代码看起来像同步代码；此外可以用来实现迭代器和控制流的管理

# 用法
1. function和函数名之间存在*号表示generator函数
2. 执行generator函数，返回迭代器对象，并不执行函数体内容
3. 函数内部使用yield关键字，实现暂停执行下部分，yield后紧跟着的表达式的值作为返回对象的value值
  - 表达式为惰性求值，只有next指针指向yield后的表达式才会开始执行
4. 函数外调用迭代器next方法，恢复函数的执行，可接受一个参数，作为当前yield表达式的返回值
5. Generator.prototype.throw()可以在函数体外抛出错误，然后再函数体内捕获错误，如果内部没有捕获则抛出函数体外
6. Generator.prototype.return()可以给定返回值，提前终止generator函数
7. yield* 后跟着迭代器对象，用来在一个generator函数里执行另一个generator函数
8. generator函数中的this指向全局对象，除非使用call等方法修改指向

# 应用场景
1. 异步操作同步化
2. 部署iterator接口

# 原理
- 协程：一个线程（或函数）执行到一半，可以暂停执行，将执行权交给另一个线程（或函数），等到稍后收回执行权的时候，再恢复执行
- generator是协程在ES6中的一种实现，协程是比线程更轻量级的存在，可以在某个地方挂起，也可以继续执行