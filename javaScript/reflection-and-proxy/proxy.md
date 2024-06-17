# 产生原因与作用
- 希望能够修改某些操作的默认行为
- proxy可以理解为在目标对象之前架设一层拦截，外界访问该对象，都需要经过这层拦截

# 用法
1. ES6提供原生Proxy构造函数，接收目标对象和定制拦截行为对象
  - 要拦截生效，必须对proxy操作
2. 可以拦截以下属性
  - get(target, propKey, receiver)
  - set(target, propKey, value, receiver)
  - has(target, propKey)，拦截in操作
  - deleteProperty(target, propKey)，拦截delete操作
  - ownKeys(target)，拦截Object.getOwnPropertyNames、Object.getOwnPropertySymbols、Object.keys、for...in操作
  - getOwnPropertyDescriptor(target, propKey)，拦截Object.getOwnPropertyDescriptor操作
  - defineProperty(target, propKey, propDesc)，拦截Object.defineProperty操作
  - preventExtensions(target)
  - getPrototypeOf(target)
  - isExtensible(target)
  - setPrototypeOf(target, proto)
  - apply(target, ctx, args)，拦截普通函数调用、call和apply调用
  - construct(target, args)
3. Proxy.revocable()
  - 返回一个可取消的proxy实例
  - { proxy, revoke } = Proxy.revocable(target, handler)
4. 拦截行为对象的this指向对象本身

# 应用场景
1. 适合用来写Web服务的客户端，拦截web服务接口，不必为每一种数据都写一个适配方法
2. proxy做响应式