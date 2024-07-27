# 作用
- 代表整个文档对象，继承了EventTarget和Node接口

# 用法
1. documentElement
  - 返回当前文档的根节点，一般是html节点
2. body、head
  - 指向body和head节点
3. scrollingElement
  - 返回文档的滚动元素，即文档滚动的时候返回是哪个元素在滚动
4. domain
  - 当前文档的域名，不包含协议和端口，可以设置为其上级域名但不能是顶级域名
5. referrer
  - 表示当前文档的访问者来自哪里
6. hidden
  - 表示当前页面是否可见，如果最小化或者切换TAB都会导致不可见
7. visibilityState
  - visible 页面可见
  - hidden  页面不可见（最小化或者切换tab）
  - prerender 页面正在渲染
  - unloaded  页面从内存中卸载
8. readyState
  - 返回文档的状态
  - loading 加载HTML中（尚未解析完成）
  - interactive 加载外部资源
  - complete  加载完成
9. cookie
  - 操作浏览器的cookie
10. designMode
  - 控制当前文档是否可以编辑
11. open()、close()
  - 前者清除所有文档的内容，使文档处于可编辑状态，后者用来关闭open
12. write()
  - 向文档写入内容，在首次渲染的时候只要没执行close()，其写入的内容会追加在文档后面；如果在DOMContentLoaded事件发生之后在调用，会先调用open方法擦除页面。写入的数据不会转义
13. querySelector()、querySelectorAll()
14. elementFromPoint()、elementsFromPoint()
  - 前者返回页面指定位置最上层的元素节点，后者返回数组，成员是位于指定坐标的所有元素
15. createElement()
16. createTextNode()
17. createAttribute()
18. createDocumentFragment()
19. createEvent()
  - 生成一个事件对象
20. execCommand()、queryCommandSupported()、queryCommandEnabled()
  - 执行命令
  - 检查是否浏览器是否支持execCommand()的某个命令
  - 检查execCommand()某个命令在当前情况是否能用