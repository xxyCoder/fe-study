# 链接和导航
- 指使用js进行页面切换，通过比浏览器默认的重新加载快，因为导航会更新必要组件而非整个页面

## Link组件
1. 拓展了原生HTML<a>的内置组件，提供了预加载和客户端路由之间导航功能
  - href属性指定路由
  - scroll为false表示维持导航前的滚动距离
  - replace属性指定是否替换
  - prefetch为true表示在后台预获取页面
  - 其他props自动转换给底层a标签

## useRouter
- 客户端的hook，有push和replace方法
  - {push,replace}(url, opts?)
  - refresh() 刷新路由
  - prefetch()  预获取，加快客户端导航
  - back()
  - forward()

## redirect
- 客户端组件，重定向到页面
