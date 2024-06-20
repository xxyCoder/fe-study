# 产生原因和作用
- 即使是generator让异步同步化也需要在then中调用next方法，于是产生async，简化了异步编程，让其执行更像同步编程，避免嵌套调用

# 用法
1. async函数返回值是Promise对象，其Promise值取决于内部有无没有被处理的异常，如果有则状态为rejected,值为当前异常，否则为fulfilled，值为return值
  - 如果出现异常，后面的程序都不会执行，直接返回
2. await命令后面跟着是一个Promise对象，返回对象的值，如果不是Promise对象，则用Promise.resolve包裹值
3. await只能使用在async函数中和ESM中的顶层

# 原理
1. generator函数+自动执行器
```js
function spawn(genF) {
  return new Promise((resolve, reject) => {
    const gen = genF();
    function dfs(nexfF) {
      let next;
      try {
        next = nextF()
      } catch(e) {
        return reject(e);
      }
      
      if (next.done) {
        return resolve(next.value);
      }
      Promise.resolve(next.value)
        .then(v => dfs(function() { return gen.next(v) }))
        .catch(e => dfs(function() { return gen.throw(e) }))
    }
    dfs(function() { return gen.next() })
  })
}
```

# 应用场景
1. 网络请求
2. 文件操作