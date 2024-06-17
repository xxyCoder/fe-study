# 解析JSX过程
1. 通过@babel/core和@babel/preset-react解析生成AST语法树，通过遍历节点改为React.createElement执行函数
2. 执行React.createElement创建虚拟DOM
  a. 创建一个JS对象，存储了key、props等属性
  b. 对于子节点则递归创建JS对象，存储在父对象属性中
  ```js
  {
    $$typeof: Symbol.for('react.element'),
    type,
    ref,
    key,
    props,
    children
  }
  ```
3. 通过render函数生成真实DOM
  a. 根据虚拟DOM创建真实DOM（利用原生DOM方法，经过DOM diff创建），插入到父节点或容器中