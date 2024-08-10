# CSSStyleDeclaration接口
- 以下部署了该接口，可以直接读写css的样式属性
1. 元素的style属性
2. CSSStyle实例的style属性
3. window.getComputedStyle()返回值

## 用法
1. cssText
  - 读写当前规则的所有样式文本声明
2. length
  - 表示当前规则包含多少条样式声明
3. parentRule
  - 返回当前规则所属的哪个样式块
4. getPropertyPriority()
  - 接受css样式的属性名作为参数，返回一个字符串，表示是否设置了!important优先级，如果没则返回空字符串
5. getPropertyValue()
  - 接受css样式作为参数返回一个字符串表示该属性的值
6. item()
  - 返回该位置的css属性名
7. removeProperty()
  - 接受一个属性名作为参数，在规则中移除该属性
8. setProperty(name, value, isImportant?)
  - 设置新的css属性