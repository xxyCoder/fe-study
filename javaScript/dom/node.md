# node本质
- 构成文档结构的基本单元，所有节点对象都继承了该node接口

# 用法
1. nodeType返回一个整数值，表示节点的类型
  - Node中定义了节点常量
2. nodeName返回节点名称
  a. 文档节点：#document
  b. 元素节点：大写标签名
  c. 属性节点：属性名称
  d. 文本节点：#text
  e. 注释节点：#comment
3. nodeValue返回一个字符串，表示当前节点本身的文本值
  - 只有文本节点、属性节点和注释节点有值，其余为null
4. textContent返回当前节点和它所有后代节点的文本内容，自动忽略html标签，可读写（使用新文本替换原来后代节点，对html自动转义）
5. ownerDocument返回当前节点所在的顶层文档对象，即document对象
6. nextSibling和previousSibling返回后一个/前一个同级节点，没有则返回null
7. parentNode返回当前节点的父节点（元素节点、文档节点和文档片段节点）
8. parentElement返回当前节点的父元素节点
9. firstChild和lastChild返回第一个/最后一个子节点
10. childNodes返回一个类数组对象（NodeList集合），包含所有子节点
11. appendChild()接受一个节点对象作为参数，作为其最有一个子节点插入
12. hasChildNodes()返回布尔值表示是否有子节点
13. cloneNode()克隆节点，接受一个布尔值作为参数表示是否克隆其子节点
  - 拷贝所有属性除了on-和addEventListener监听的方法
  - 需要注意id属性，如果原节点有则id重复了
14. insertBefore(newNode, referenceNode)将某个节点插入父节点内部指定位置，如果第二个参数为null则变为appendChild方法
15. removeChild()接受一个子节点，将其从节点的子节点列表中移除，如果当前子节点非节点的子节点则报错
16. replaceChild(newChild, oldChild)将新子节点替换旧子节点
17. isEqualNode()返回布尔值，用于检查两个节点是否相等（类型、属性和子节点相同）
18. isSameNode()返回布尔值，表示两节点是否为同一个节点
19. normalize()用于清理当前节点所有文本节点，即将相邻文本节点合并为一个文本节点