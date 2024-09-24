# undefined类型
- 派生自null类型，是window中的一个全局变量
## 出现场景
1. 声明变量但是未赋值
2. 获取对象中不存在的属性
3. 函数没有明确的返回值

## 类型转换
1. 对象：报错
2. 字符串：'undefined'
3. 数值：NaN
4. 布尔：false


# null类型

## 出现场景
1. 表示空指针对象，未来可能赋值一个对象
2. 获取DOM时候没有拿到指定的元素
3. 使用正则没有捕获到结果

## 类型转换
1. 对象：报错
2. 字符串：'null'
3. 数值：0
4. 布尔：false


# boolean类型

## 类型转换
1. 字符串：'true' | 'false'
2. 数值：1 | 0
3. 对象：Boolean


# number类型
- 包含浮点数和整数，一般是64位
## 类型转换
1. 布尔：0和NaN转换为false；其他为true
2. 字符串：'${number}'
3. 对象：Number

## Number函数
1. 数字统一转换为十进制
2. 其余类型按照各自类型转换规则进行转换

## parseInt函数
- 用于解析字符串，接收字符串（不是字符串则调用toString）和基数，遇到不是数值类型的则舍弃后部分转换
- 对于科学计数法e，传入数值类型能够正确处理，这是因为JS对数值类型的E会进行处理，然后调用toString作为第一个参数

## parseFloat函数
- 用于解析字符串，其没有基数的概念，只能转换为十进制

## isNaN() vs Number.isNaN()
- isNaN判断是否能转换为数字（会进行类型转换），不能则为true，否则为false
- Number.isNaN只有传入值为NaN才返回true，不进行类型转换

# string类型

## 类型转换
1. 布尔：空字符串为false；其他为true
2. 数值：只包含数字、一个小数点、空格则转换为十进制；其余为NaN

## String函数
- 类型按照各自类型转换规则进行转换

# object类型

## 类型转换
1. 布尔：null转换为false；其余都为true
2. 数值：先考虑valueOf()的返回值，如果不能转换为数字，则考虑toString()的返回值；valueOf()和toString()返回值如果都是对象，则报错
3. 字符串：先考虑toString()的返回值，然后再考虑valueOf()的返回值
