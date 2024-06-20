# 作用
- 用于设置多行元素的空间量，指定元素行盒的最小高度

# 属性值
1. number值
  - 无单位数字乘以该元素字体大小
2. length值
  - 有单位数字
3. 百分比值
  - 给定的百分比值乘以元素计算出的字体大小
4. 关键字normal
  - 取决于浏览器所设置的默认值

# 表现
- 行高为两行文字基线之间的距离
1. 对于inline盒子，inline-height小于font-size，则为默认值
2. 对于inline-block和block，inline-height小于font-size有效