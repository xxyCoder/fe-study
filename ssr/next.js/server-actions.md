# Server Actions
- 服务端执行的异步函数，可以在服务端和客户端中使用，以处理next.js中的数据提交和更改

# 用法
1. 定义"use server"
  - 模块级别，在文件顶部
  - 函数级别，在async函数的顶部
2. 参数和返回值都必须是可序列化的
3. 处理数据后，一定要重新验证数据
  - 即revalidatePath或者revalidateTag

# 原理
- 搭配form标签使用，next会自动插入<input type="hidden" />，其值为$ACTION_ID_xxxx，用于服务端区分action（一个页面有多个action），当点击submit的时候触发表单提交，发送一个post请求到当前页面地址，服务端根据server actions中的定义进行处理，返回RSC payload