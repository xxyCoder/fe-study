# 简介
- element节点对于页面中的一个元素

# 用法
1. draggable
  - 表示当前是否可拖动，该属性可读写
2. title
  - 鼠标悬浮时弹出的文字提示框
3. hidden
  - 用来控制当前元素的可见性，优先级比css控制低
4. contentEditable
  - 使元素内容可编辑
5. attributes
  - 类数组对象，成员是当前元素的属性节点
6. className
  - class属性的字符串形式，每个class使用空格隔开
7. classList
  - 类数组对象，每个成员都是class
  - add()
  - remove()
  - contains()
  - toggle()
8. dataset
  - 返回一个对象，其key为自定义data-属性，
9. clientHeight、clientWidth
  - 表示块级元素的css高度（小数被四舍五入），单位px，如果没有设置css高度则返回实际高度，该高度还包含了padding部分
10. clientLeft、clientTop
  - 返回块级元素左边框和顶边框的宽度，单位px
11. scrollHeight、scorllWidth
  - 返回当前元素总高度整数（小数四舍五入），包括溢出部分、不可见部分、padding以及伪元素高度
  - 只读
12. scrollLeft、scrollTop
  - 当前元素的水平滚动条向右侧/上侧滚动的px
  - 可读写
13. offsetParent
  - 返回最靠近当前元素，且position不等于static的元素
14. offsetWith、offsetHeigh
  - 返回一个整数，包括元素高度、padding和border以及滚动条
  - 只读
15. offsetLeft、offsetTop
  - 距离offsetParent的距离