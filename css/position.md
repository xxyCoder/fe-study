# 作用
- 用于指定一个元素在文档中的定位方式，通过left、right、top和bottom决定了元素的最终位置

# 属性值
1. static
  - 正常布局行为，top等方向和z-index属性设置无效
2. relative
  - 元素先放置在未添加定位时的位置，再不改变页面布局的前提下调整元素位置
  - 设置left等方向属性是相对于自身进行偏移
  - 对于table-*-group、table-row、table-column、table-cell、table-caption元素无效
3. absolute
  - 元素被移出正常文档流，并不为其预留空间，通过指定相对于最近的非static定位的祖先元素偏移，来确定位置
  - 可设置margin，且不会合并
  - 宽度没有设置，则被内容撑开，不表现为水流式布局
4. fixed
  - 元素被移除正常文档流，并不为其预留空间，通过指定相对于屏幕视口的位置偏移，来确定位置，不随着屏幕滚动而改变
  - 当祖先的transform、perspective、filter或background-filter属性非none时，容器由视口改为该祖先
  - 可设置margin，且不会合并
  - 宽度没有设置，则被内容撑开，不表现为水流式布局
5. sticky
  - 相对定位和固定定位的组合，元素在跨越特定阙值之前为相对定位，跨域之后为固定定位

## 定位
- 如果存在高度，且top和bottom同时存在，则以布局顺序为主（顺序从上至下，那么top优先级最高；宽度同理
- 如果不存在高度，那么高度有top、bottom和内容撑开的高度最大值决定；宽度同理
